export const runtime = "nodejs"
export const revalidate = 60

import {getPublishedNotes} from "@/lib/notes"
import SearchClient from "@/components/SearchClient"

export const metadata = {
	title: "Search",
	description: "Search across all notes.",
}

export default async function SearchPage() {
	const notes = await getPublishedNotes()

	return (
		<main className="min-h-[calc(100vh-4rem)] max-w-[68ch] mx-auto px-5 sm:px-6 pt-24 sm:pt-28 pb-24">
			<div className="flex flex-col gap-12 sm:gap-16">
				{/* Header */}
				<section className="flex flex-col gap-5 sm:gap-6">
					<h1 className="font-medium text-2xl tracking-tight">
						Search
					</h1>

					<p className="text-[var(--muted)] max-w-[40ch] leading-relaxed">
						Find notes across software engineering, psychology, and
						philosophy.
					</p>
				</section>

				{/* Search + Results */}
				<SearchClient notes={notes} />
			</div>
		</main>
	)
}
