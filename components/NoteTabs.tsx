"use client"

import {useState} from "react"

import NoteCard from "./NoteCard"

const themes = [
	{key: "Software", label: "Software Engineering"},
	{key: "Psychology", label: "Psychology"},
	{key: "Philosophy", label: "Philosophy"},
]

export default function NotesTabs({notes}: {notes: any[]}) {
	const [active, setActive] = useState("Software")

	const filtered = notes.filter((n) => n.theme === active)

	return (
		<>
			<section className="flex gap-10 border-b border-slate-800 pb-3">
				{themes.map((t) => (
					<button
						key={t.key}
						onClick={() => setActive(t.key)}
						className={`transition cursor-pointer ${
							active === t.key
								? "text-white border-b border-white pb-2"
								: "text-slate-400 hover:text-white"
						}`}
					>
						{t.label}
					</button>
				))}
			</section>

			<section>
				<ul className="grid grid-cols-1 gap-3 sm:gap-4">
					{filtered.map((n) => (
						<NoteCard
							key={n.slug}
							title={n.title}
							description={n.description}
							href={`/notes/${n.slug}`}
						/>
					))}
				</ul>
			</section>
		</>
	)
}
