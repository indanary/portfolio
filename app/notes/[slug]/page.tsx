export const runtime = "nodejs"

import Link from "next/link"
import {getNoteBySlug} from "@/lib/notes"
import {renderBlocks} from "@/lib/renderNotion"

interface PageProps {
	params: Promise<{slug: string}>
}

export async function generateMetadata({params}: {params: {slug: string}}) {
	const data = await getNoteBySlug(params.slug)

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

				<section className="flex flex-col gap-6">
					<h1 className="font-medium text-xl">
						{page.properties.Title.title[0]?.plain_text}
					</h1>
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
