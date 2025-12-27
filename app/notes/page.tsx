export const runtime = "nodejs"

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
		<main className="max-w-[68ch] mx-auto px-5 sm:px-6 pt-24 sm:pt-28 pb-20 sm:pb-24">
			<div className="flex flex-col gap-10">
				{/* Header */}
				<section className="flex flex-col gap-6">
					<h1 className="font-medium text-xl">Notes</h1>
					<p className="text-slate-400 max-w-xl">
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
