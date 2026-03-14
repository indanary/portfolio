export const runtime = "nodejs"
export const revalidate = 60

import Link from "next/link"
import {getPublishedNotes} from "@/lib/notes"

import Reveal from "@/components/Reveal"
import NoteCard from "@/components/NoteCard"

export const metadata = {
	title: "Home",
	description:
		"Indana Rishi — Software Engineer. Essays on software, psychology, philosophy, and thoughtful system building.",
}

export default async function Home() {
	const notes = await getPublishedNotes()

	const softwareNotes = notes
		.filter((n) => n.theme === "Software")
		.slice(0, 3)
	const psychologyNotes = notes
		.filter((n) => n.theme === "Psychology")
		.slice(0, 3)
	const philosophyNotes = notes
		.filter((n) => n.theme === "Philosophy")
		.slice(0, 3)

	return (
		<main className="max-w-[68ch] mx-auto px-5 sm:px-6 pt-24 sm:pt-28 pb-20 sm:pb-24">
			<div className="flex flex-col gap-16 sm:gap-24">
				{/* Identity */}
				<Reveal>
					<section className="flex flex-col gap-10">
						<div className="flex flex-col">
							<h1 className="font-medium text-lg sm:text-xl">
								Indana Rishi
							</h1>

							<span className="text-slate-400">
								Software Engineer
							</span>
						</div>
						<span className="text-base sm:text-lg leading-relaxed">
							I’m a human who happens to be a software engineer —
							and here’s how I think.
						</span>
						<span className="text-slate-400">
							I write about software engineering, psychology, and
							philosophy as a way to understand the world and
							myself.
						</span>
					</section>
				</Reveal>

				{/* Notes */}
				<Reveal>
					<section className="flex flex-col gap-10">
						<div className="flex items-center justify-between">
							<h2 className="font-medium text-lg sm:text-xl tracking-tight">
								Notes
							</h2>
							<Link
								href="/notes"
								className="text-slate-400 hover:underline"
							>
								See all
							</Link>
						</div>

						<div className="flex flex-col gap-4">
							<h3>Software Engineering</h3>

							<ul className="grid grid-cols-1 gap-3 sm:gap-4">
								{softwareNotes.map((n) => (
									<NoteCard
										key={n.slug}
										title={n.title}
										description={n.description}
										date={n.date}
										topic={n.topic}
										href={`/notes/${n.slug}`}
									/>
								))}
							</ul>
						</div>

						<div className="flex flex-col gap-4">
							<h3>Psychology</h3>

							<ul className="grid grid-cols-1 gap-3 sm:gap-4">
								{psychologyNotes.map((n) => (
									<NoteCard
										key={n.slug}
										title={n.title}
										description={n.description}
										date={n.date}
										topic={n.topic}
										href={`/notes/${n.slug}`}
									/>
								))}
							</ul>
						</div>

						<div className="flex flex-col gap-4">
							<h3>Philosophy</h3>

							<ul className="grid grid-cols-1 gap-3 sm:gap-4">
								{philosophyNotes.map((n) => (
									<NoteCard
										key={n.slug}
										title={n.title}
										description={n.description}
										date={n.date}
										topic={n.topic}
										href={`/notes/${n.slug}`}
									/>
								))}
							</ul>
						</div>
					</section>
				</Reveal>

				{/* Contact */}
				<Reveal>
					<section className="flex flex-col gap-10">
						<h2 className="font-medium text-lg sm:text-xl tracking-tight">
							Connect
						</h2>

						<span>
							Feel free to contact me at indanary@gmail.com
						</span>

						<div className="flex gap-10">
							<Link
								href="https://www.linkedin.com/in/indana-rishi/"
								target="_blank"
								rel="noopener noreferrer"
								className="text-slate-400 hover:text-white transition"
							>
								LinkedIn
							</Link>

							<Link
								href="https://instagram.com/indanarishi"
								target="_blank"
								rel="noopener noreferrer"
								className="text-slate-400 hover:text-white transition"
							>
								Instagram
							</Link>
						</div>
					</section>
				</Reveal>
			</div>
		</main>
	)
}
