/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import {useEffect, useMemo, useState} from "react"
import {getThemeLabel} from "@/lib/theme"

import NoteCard from "./NoteCard"

function highlight(text: string, query: string) {
	if (!query) return text

	const q = query.toLowerCase()
	const index = text.toLowerCase().indexOf(q)

	if (index === -1) return text

	return (
		<>
			{text.slice(0, index)}
			<mark className="bg-yellow-200 text-black dark:bg-yellow-300">
				{text.slice(index, index + query.length)}
			</mark>
			{text.slice(index + query.length)}
		</>
	)
}

export default function SearchClient({notes}: {notes: any[]}) {
	const [input, setInput] = useState("")
	const [query, setQuery] = useState("")

	// ✅ Debounce input
	useEffect(() => {
		const t = setTimeout(() => setQuery(input.trim()), 200)
		return () => clearTimeout(t)
	}, [input])

	const results = useMemo(() => {
		// ✅ Minimum length guard
		if (!query || query.length < 2) return []

		const words = query.toLowerCase().split(/\s+/)

		return notes
			.map((n) => {
				const title = n.title.toLowerCase()
				const desc = n.description?.toLowerCase() || ""

				// ✅ Word-based matching
				const matches = words.every(
					(word) => title.includes(word) || desc.includes(word),
				)

				if (!matches) return null

				// ✅ Ranking
				let score = 0
				words.forEach((word) => {
					if (title.includes(word)) score += 3
					if (desc.includes(word)) score += 2
				})

				return {note: n, score}
			})
			.filter(Boolean)
			.sort((a: any, b: any) => b.score - a.score)
			.map((r: any) => r.note)
	}, [query, notes])

	return (
		<div className="flex flex-col gap-8">
			{/* Search Input */}
			<div className="relative">
				<input
					autoFocus
					value={input}
					onChange={(e) => setInput(e.target.value)}
					placeholder="Search notes..."
					className="w-full text-sm px-4 py-3 pr-10 rounded-md border border-[var(--border)] bg-transparent outline-none focus:ring-1 focus:ring-[var(--foreground)] transition"
				/>

				{/* Clear button */}
				{input && (
					<button
						onClick={() => setInput("")}
						className="absolute right-3 top-1/2 -translate-y-1/2 text-md opacity-50 hover:opacity-100 transition cursor-pointer"
						aria-label="Clear search"
					>
						×
					</button>
				)}
			</div>

			{/* States */}
			{!query && (
				<p className="text-sm text-[var(--muted)]">
					Start with a word — see where it leads
				</p>
			)}

			{query && query.length < 2 && (
				<p className="text-sm text-[var(--muted)]">
					A bit more — one letter isn’t enough to find meaning
				</p>
			)}

			{/* Results */}
			{query.length >= 2 && (
				<div className="flex flex-col gap-5 sm:gap-6">
					{/* Result count */}
					<p className="text-xs text-[var(--muted)]">
						{results.length} result
						{results.length !== 1 ? "s" : ""}
					</p>

					{results.length === 0 ? (
						<p className="text-sm text-[var(--muted)]">
							Nothing found for{" "}
							<span className="text-[var(--foreground)]">
								&ldquo;{query}&rdquo;
							</span>{" "}
							— maybe try a different angle
						</p>
					) : (
						results.map((n) => (
							<NoteCard
								key={n.title}
								title={highlight(n.title, query)}
								description={highlight(n.description, query)}
								date={n.date}
								topic={n.topic}
								theme={getThemeLabel(n.theme)}
								href={`/notes/${n.slug}`}
							/>
						))
					)}
				</div>
			)}
		</div>
	)
}
