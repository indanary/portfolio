/* eslint-disable @typescript-eslint/no-explicit-any */
import "server-only"
import {notion} from "./notion"

const databaseId = process.env.NOTION_DATASOURCE_ID

function getText(prop: any) {
	if (!prop) return ""
	if (prop.type === "title") {
		return prop.title.map((t: any) => t.plain_text).join("")
	}
	if (prop.type === "rich_text") {
		return prop.rich_text.map((t: any) => t.plain_text).join("")
	}
	return ""
}

export async function getPublishedNotes() {
	const results: any[] = []
	let cursor: string | undefined = undefined

	while (true) {
		const res = await notion.dataSources.query({
			data_source_id: databaseId!,
			start_cursor: cursor,
			page_size: 100,
			filter: {
				property: "Status",
				select: {equals: "Published"},
			},
			sorts: [
				{
					timestamp: "last_edited_time",
					direction: "descending",
				},
			],
		})

		results.push(...res.results)

		if (!res.has_more) break
		cursor = res.next_cursor!
	}

	return results.map((page: any) => ({
		title: getText(page.properties.Title),
		slug: getText(page.properties.Slug),
		theme: page.properties.Theme?.select?.name || "",
		description: getText(page.properties.Description),
		topic: page.properties.Topic?.select?.name || "",
		date: page.properties.Date?.date?.start || "",
	}))
}

function isFullBlock(block: any): block is {has_children: boolean; id: string} {
	return "has_children" in block
}

async function getAllBlocks(blockId: string): Promise<any[]> {
	const blocks: any[] = []

	let cursor: string | undefined = undefined

	do {
		const res = await notion.blocks.children.list({
			block_id: blockId,
			start_cursor: cursor,
		})

		for (const block of res.results) {
			let children: any[] = []

			if (isFullBlock(block) && block.has_children) {
				children = await getAllBlocks(block.id)
			}

			blocks.push({
				...block,
				children,
			})
		}

		cursor = res.has_more ? res.next_cursor ?? undefined : undefined
	} while (cursor)

	return blocks
}

export async function getNoteBySlug(slug: string) {
	const res = await notion.dataSources.query({
		data_source_id: databaseId!,
		filter: {
			property: "Slug",
			rich_text: {
				equals: slug,
			},
		},
	})

	const page = res.results[0]
	if (!page) return null

	const blocks = await getAllBlocks(page.id)

	return {page, blocks}
}
