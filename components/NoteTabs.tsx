/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import {useState} from "react"
import {motion, AnimatePresence} from "framer-motion"

import NoteCard from "./NoteCard"

const themes = [
	{key: "Software", label: "Software Engineering"},
	{key: "Psychology", label: "Psychology"},
	{key: "Philosophy", label: "Philosophy"},
]

export default function NoteTabs({notes}: {notes: any[]}) {
	const [active, setActive] = useState("Software")

	const filtered = notes.filter((n) => n.theme === active)

	return (
		<div className="flex flex-col gap-8 sm:gap-10">
			{/* Tabs */}
			<div className="overflow-x-auto">
				<div className="flex gap-6 sm:gap-8 border-b border-[var(--border)] min-w-max">
					{themes.map((t) => {
						const isActive = active === t.key

						return (
							<button
								key={t.key}
								onClick={() => setActive(t.key)}
								className="relative pb-3 text-sm whitespace-nowrap transition cursor-pointer"
							>
								<span
									className={`transition ${
										isActive
											? "text-[var(--foreground)]"
											: "text-[var(--muted)] hover:text-[var(--foreground)]"
									}`}
								>
									{t.label}
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
