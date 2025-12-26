export const runtime = "nodejs"

import Link from "next/link"
import {getNoteBySlug} from "@/lib/notes"
import {renderBlocks} from "@/lib/renderNotion"

interface PageProps {
	params: Promise<{slug: string}>
}

export default async function NotePage({params}: PageProps) {
	const {slug} = await params
	const data = await getNoteBySlug(slug)

	if (!data) {
		return <div className="pt-36 text-center">Note not found</div>
	}

	const blocks = renderBlocks(data.blocks)

	return (
		<main className="max-w-2xl mx-auto pt-36 pb-24">
			<div className="flex flex-col gap-20">
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
						{data.page.properties.Title.title[0]?.plain_text}
					</h1>
				</section>

				<section className="flex flex-col gap-6 leading-relaxed text-slate-200">
					{blocks.map((b: any, i: number) => {
						if (b.type === "p") return <p key={i}>{b.text}</p>
						if (b.type === "h1")
							return (
								<h1 key={i} className="text-xl font-medium">
									{b.text}
								</h1>
							)
						if (b.type === "h2")
							return (
								<h2 key={i} className="text-lg font-medium">
									{b.text}
								</h2>
							)
						if (b.type === "h3")
							return (
								<h3 key={i} className="font-medium">
									{b.text}
								</h3>
							)
						return null
					})}
				</section>
			</div>
		</main>
	)
}
