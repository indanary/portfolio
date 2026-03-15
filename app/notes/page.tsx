export const runtime = "nodejs"
export const revalidate = 60

import {getPublishedNotes} from "@/lib/notes"

import NoteTabs from "../../components/NoteTabs"

export const metadata = {
	title: "Notes",
	description:
		"Notes and essays by Indana Rishi about software engineering, psychology, and philosophy.",
}

export default async function NotesPage() {
	const notes = await getPublishedNotes()

	return (
		<main className="max-w-[68ch] mx-auto px-5 sm:px-6 pt-24 sm:pt-28 pb-24">
			<div className="flex flex-col gap-12 sm:gap-16">
				{/* Header */}
				<section className="flex flex-col gap-5 sm:gap-6">
					<h1 className="font-medium text-2xl tracking-tight">
						Notes
					</h1>

					<p className="text-[var(--muted)] max-w-[40ch] leading-relaxed">
						A personal collection of thoughts about software
						engineering, psychology, and philosophy.
					</p>
				</section>

				{/* Tabs */}
				<NoteTabs notes={notes} />
			</div>
		</main>
	)
}
