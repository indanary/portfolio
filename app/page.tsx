export const runtime = "nodejs"
export const revalidate = 60

import Link from "next/link"

import {getPublishedNotes} from "@/lib/notes"
import {getThemeLabel} from "@/lib/theme"

import Reveal from "@/components/Reveal"
import NoteCard from "@/components/NoteCard"
import NameMotion from "@/components/NameMotion"
import HeroScroll from "@/components/HeroScroll"

export const metadata = {
	title: "Home",
	description:
		"Indana Rishi — Software Engineer. Essays on software, psychology, philosophy, and thoughtful system building.",
}

export default async function Home() {
	const notes = await getPublishedNotes()

	const featuredNotes = notes.slice(0, 4)

	return (
		<main className="mx-auto px-5 sm:px-6">
			{/* Hero */}
			<HeroScroll>
				<Reveal>
					<section className="flex flex-col gap-10 sm:gap-12 items-center text-center">
						<div className="relative">
							<span className="absolute -top-3 sm:-top-2 left-0.5 sm:left-1.5 text-xs sm:text-sm tracking-wide text-[var(--muted)]">
								Hi, I&apos;m
							</span>

							<NameMotion />
						</div>

						<div className="flex flex-col gap-4 items-center text-lg sm:text-xl lg:text-2xl max-w-[40ch]">
							<p className="leading-relaxed">
								A software engineer curious about how systems
								work
								<br />— including humans.
							</p>

							<p className="text-[var(--muted)] text-sm sm:text-base lg:text-lg">
								Here you&apos;ll find notes on software
								engineering, psychology, philosophy, and the
								ideas that live between them.
							</p>
						</div>
					</section>
				</Reveal>
			</HeroScroll>

			{/* Content sections */}
			<div className="flex flex-col items-center gap-20 sm:gap-24 pb-20 sm:pb-24 px-5 sm:px-6">
				{/* Featured Notes */}
				<Reveal>
					<section className="flex flex-col gap-8 sm:gap-10 w-full max-w-[68ch]">
						<div className="flex items-start sm:items-center justify-between gap-4">
							<h2 className="font-medium text-lg sm:text-xl tracking-tight">
								Featured Notes
							</h2>

							<Link
								href="/notes"
								className="shrink-0 text-sm text-[var(--muted)] hover:opacity-70 transition"
							>
								View all
							</Link>
						</div>

						<ul className="flex flex-col gap-6">
							{featuredNotes.map((n) => (
								<NoteCard
									key={n.title}
									title={n.title}
									description={n.description}
									date={n.date}
									topic={n.topic}
									theme={getThemeLabel(n.theme)}
									href={`/notes/${n.slug}`}
								/>
							))}
						</ul>
					</section>
				</Reveal>
			</div>
		</main>
	)
}
