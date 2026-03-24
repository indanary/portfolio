/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import {useState} from "react"
import {motion, AnimatePresence} from "framer-motion"
import {getTopicColor} from "@/lib/topic"

import NoteCard from "./NoteCard"

const themes = [
	{key: "Software", label: "Software Engineering"},
	{key: "Psychology", label: "Psychology"},
	{key: "Philosophy", label: "Philosophy"},
]

export default function NoteTabs({notes}: {notes: any[]}) {
	const [active, setActive] = useState("Software")
	const [activeTopic, setActiveTopic] = useState<string | null>(null)

	const filtered = notes.filter((n) => {
		if (n.theme !== active) return false
		if (!activeTopic) return true
		return (n.topic || "Other") === activeTopic
	})

	const counts = notes.reduce((acc, note) => {
		if (!acc[note.theme]) {
			acc[note.theme] = 0
		}
		acc[note.theme]++
		return acc
	}, {} as Record<string, number>)

	const topics: Record<string, number> = notes
		.filter((n) => n.theme === active)
		.reduce((acc, note) => {
			const topic = note.topic || "Other"
			if (!acc[topic]) acc[topic] = 0
			acc[topic]++
			return acc
		}, {} as Record<string, number>)

	return (
		<div className="flex flex-col gap-8 sm:gap-10">
			{/* Tabs */}
			<div className="overflow-x-auto">
				<div className="flex gap-6 sm:gap-8 border-b border-[var(--border)] min-w-max">
					{themes.map((t) => {
						const isActive = active === t.key
						const count = counts[t.key] || 0

						return (
							<button
								key={t.key}
								onClick={() => {
									setActive(t.key)
									setActiveTopic(null)
								}}
								className="relative pb-3 text-sm whitespace-nowrap transition cursor-pointer"
							>
								<span
									className={`transition ${
										isActive
											? "text-[var(--foreground)]"
											: "text-[var(--muted)] hover:text-[var(--foreground)]"
									}`}
								>
									<span className="flex items-center gap-2">
										{t.label}
										<span className="text-xs px-2 py-0.5 rounded-full bg-[var(--border)]">
											{count}
										</span>
									</span>
								</span>

								{isActive && (
									<motion.div
										layoutId="tab-indicator"
										className="absolute left-0 right-0 -bottom-px h-px bg-[var(--foreground)]"
									/>
								)}
							</button>
						)
					})}
				</div>
			</div>

			{/* Topics */}
			<div className="flex flex-wrap gap-2">
				<button
					onClick={() => setActiveTopic(null)}
					className={`text-xs px-3 py-1 rounded transition cursor-pointer ${
						!activeTopic
							? "bg-[var(--foreground)] text-[var(--background)]"
							: "bg-[var(--border)] text-[var(--muted)] hover:text-[var(--foreground)]"
					}`}
				>
					All ({Object.values(topics).reduce((a, b) => a + b, 0)})
				</button>

				{Object.entries(topics).map(([topic, count]) => {
					const isActive = activeTopic === topic
					const color = getTopicColor(topic)

					return (
						<button
							key={topic}
							onClick={() => setActiveTopic(topic)}
							className={`inline-flex items-center px-2 py-[2px] rounded border text-xs font-medium whitespace-nowrap transition cursor-pointer ${color} ${
								isActive
									? "ring-1 ring-[var(--foreground)]"
									: "hover:opacity-80"
							}`}
						>
							{topic} ({count})
						</button>
					)
				})}
			</div>

			{/* Notes list */}
			<AnimatePresence mode="wait">
				<motion.ul
					key={active}
					initial={{opacity: 0, y: 10}}
					animate={{opacity: 1, y: 0}}
					exit={{opacity: 0, y: -10}}
					transition={{duration: 0.2}}
					className="flex flex-col gap-5 sm:gap-6"
				>
					{filtered.map((n) => (
						<NoteCard
							key={n.slug}
							title={n.title}
							description={n.description}
							date={n.date}
							topic={n.topic}
							href={`/notes/${n.slug}`}
						/>
					))}
				</motion.ul>
			</AnimatePresence>
		</div>
	)
}
