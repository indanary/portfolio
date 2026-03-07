export const runtime = "nodejs"
export const revalidate = 60

import Link from "next/link"
import {getNoteBySlug} from "@/lib/notes"
import {renderBlocks} from "@/lib/renderNotion"
import {getTopicColor} from "@/lib/topic"
import {formatDate} from "@/lib/date"

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

	if (!data) {
		return <div className="pt-28 text-center">Note not found</div>
	}

	const page = data.page as any
	const blocks = renderBlocks(data.blocks)

	const title = page.properties.Title.title[0]?.plain_text
	const topic = page.properties.Topic?.select?.name ?? "General"
	const date = page.properties.Date?.date?.start

	const topicStyle = getTopicColor(topic)

	return (
		<main className="max-w-[68ch] mx-auto px-5 sm:px-6 pt-24 sm:pt-28 pb-20 sm:pb-24">
			<div className="flex flex-col gap-14 sm:gap-20">
				<section>
					<Link
						href="/notes"
						className="text-slate-400 hover:underline"
					>
						← Notes
					</Link>
				</section>

				<section className="flex flex-col gap-4">
					<div className="flex justify-between items-center text-sm">
						<span
							className={`px-2 py-1 rounded border ${topicStyle}`}
						>
							{topic}
						</span>

						{date && (
							<span className="text-slate-400">
								{formatDate(date)}
							</span>
						)}
					</div>

					<h1 className="font-medium text-xl mt-4">{title}</h1>
				</section>

				<section className="notion">
					{blocks.map((b: any, i: number) => {
						if (b.type === "p")
							return (
								<p
									key={i}
									dangerouslySetInnerHTML={{__html: b.text}}
								/>
							)

						if (b.type === "h1")
							return (
								<h1
									key={i}
									dangerouslySetInnerHTML={{__html: b.text}}
								/>
							)

						if (b.type === "h2")
							return (
								<h2
									key={i}
									dangerouslySetInnerHTML={{__html: b.text}}
								/>
							)

						if (b.type === "h3")
							return (
								<h3
									key={i}
									dangerouslySetInnerHTML={{__html: b.text}}
								/>
							)

						if (b.type === "quote")
							return <blockquote key={i}>{b.text}</blockquote>

						if (b.type === "ul")
							return (
								<ul key={i}>
									{b.items.map((item: string, j: number) => (
										<li key={j}>{item}</li>
									))}
								</ul>
							)

						if (b.type === "ol")
							return (
								<ol key={i}>
									{b.items.map((item: string, j: number) => (
										<li key={j}>{item}</li>
									))}
								</ol>
							)

						if (b.type === "code")
							return (
								<pre key={i}>
									<code>{b.text}</code>
								</pre>
							)

						if (b.type === "callout")
							return (
								<div key={i} className="callout">
									{b.text}
								</div>
							)

						if (b.type === "image")
							return <img key={i} src={b.src} alt={b.alt || ""} />

						if (b.type === "divider") return <hr key={i} />

						return null
					})}
				</section>
			</div>
		</main>
	)
}
