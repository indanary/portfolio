/* eslint-disable @typescript-eslint/no-explicit-any */
export const runtime = "nodejs"
export const revalidate = 60

import Link from "next/link"

import {getNoteBySlug, getPublishedNotes} from "@/lib/notes"
import {renderBlocks} from "@/lib/renderNotion"
import {getTopicColor} from "@/lib/topic"
import {formatDate} from "@/lib/date"

import ReadingProgress from "@/components/ReadingProgress"
import NoteCard from "@/components/NoteCard"
import Reveal from "@/components/Reveal"

interface PageProps {
	params: Promise<{slug: string}>
}

export async function generateMetadata({params}: PageProps) {
	const {slug} = await params
	const data = await getNoteBySlug(slug)

	if (!data) {
		return {title: "Not Found"}
	}

	const page = data.page as any

	const title = page.properties.Title.title[0]?.plain_text
	const description =
		page.properties.Description?.rich_text[0]?.plain_text ||
		"Essay by Indana Rishi"

	return {
		title,
		description,
	}
}

export default async function NotePage({params}: PageProps) {
	const {slug} = await params

	const data = await getNoteBySlug(slug)
	const notes = await getPublishedNotes()

	if (!data) {
		return (
			<div className="pt-28 text-center text-[var(--muted)]">
				Note not found
			</div>
		)
	}

	const page = data.page as any
	const blocks = renderBlocks(data.blocks)

	const title = page.properties.Title.title[0]?.plain_text
	const topic = page.properties.Topic?.select?.name ?? "General"
	const date = page.properties.Date?.date?.start

	const topicStyle = getTopicColor(topic)

	const moreNotes = notes.filter((n) => n.slug !== slug).slice(0, 3)

	return (
		<>
			<ReadingProgress />

			<main className="max-w-[68ch] mx-auto px-5 sm:px-6 pt-24 sm:pt-28 pb-24">
				{/* Article */}
				<article className="flex flex-col gap-16 sm:gap-20">
					{/* Back navigation */}
					<Link
						href="/notes"
						className="text-sm text-[var(--muted)] hover:underline"
					>
						← Back to notes
					</Link>

					{/* Header */}
					<header className="flex flex-col gap-6">
						<div className="flex flex-wrap items-center gap-3 text-sm text-[var(--muted)]">
							<span
								className={`px-2 py-[2px] rounded border ${topicStyle}`}
							>
								{topic}
							</span>

							{date && <time>{formatDate(date)}</time>}
						</div>

						<h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.15] tracking-tight max-w-[20ch]">
							{title}
						</h1>
					</header>

					{/* Article Content */}
					<section className="notion">
						{blocks.map((b: any, i: number) => {
							if (b.type === "p")
								return (
									<p
										key={i}
										dangerouslySetInnerHTML={{
											__html: b.text,
										}}
									/>
								)

							if (b.type === "h1")
								return (
									<h1
										key={i}
										dangerouslySetInnerHTML={{
											__html: b.text,
										}}
									/>
								)

							if (b.type === "h2")
								return (
									<h2
										key={i}
										dangerouslySetInnerHTML={{
											__html: b.text,
										}}
									/>
								)

							if (b.type === "h3")
								return (
									<h3
										key={i}
										dangerouslySetInnerHTML={{
											__html: b.text,
										}}
									/>
								)

							if (b.type === "quote")
								return <blockquote key={i}>{b.text}</blockquote>

							if (b.type === "ul")
								return (
									<ul key={i}>
										{b.items.map(
											(item: string, j: number) => (
												<li key={j}>{item}</li>
											),
										)}
									</ul>
								)

							if (b.type === "ol")
								return (
									<ol key={i}>
										{b.items.map(
											(item: string, j: number) => (
												<li key={j}>{item}</li>
											),
										)}
									</ol>
								)

							if (b.type === "code")
								return (
									<pre key={i}>
										<code
											className={`language-${
												b.language || "text"
											}`}
										>
											{b.text}
										</code>
									</pre>
								)

							if (b.type === "callout")
								return (
									<div key={i} className="callout">
										{b.text}
									</div>
								)

							if (b.type === "image")
								return (
									<img
										key={i}
										src={b.src}
										alt={b.alt || ""}
										loading="lazy"
									/>
								)

							if (b.type === "divider") return <hr key={i} />

							return null
						})}
					</section>
				</article>

				{/* Continue reading */}
				<Reveal>
					<section className="flex flex-col gap-8 pt-16 sm:pt-20 mt-16 sm:mt-20 border-t border-[var(--border)]">
						<h2 className="text-lg font-medium">
							Continue reading
						</h2>

						<ul className="flex flex-col gap-5 sm:gap-6">
							{moreNotes.map((n) => (
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
					</section>
				</Reveal>
			</main>
		</>
	)
}
