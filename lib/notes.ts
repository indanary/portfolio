import "server-only"
import {notion} from "./notion"

const databaseId = process.env.NOTION_DATABASE_ID

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
	const res = await notion.search({
		filter: {
			property: "object",
			value: "page",
		},
		sort: {
			direction: "descending",
			timestamp: "last_edited_time",
		},
	})

	const pages = res.results.filter(
		(p: any) => p.parent?.database_id === databaseId,
	)

	return pages.map((page: any) => ({
		title: getText(page.properties.Title),
		slug: getText(page.properties.Slug),
		theme: page.properties.Theme?.select?.name || "",
		description: getText(page.properties.Description),
	}))
}

export async function getNoteBySlug(slug: string) {
	const res = await notion.search({
		query: slug,
		filter: {property: "object", value: "page"},
	})

	const page = res.results.find(
		(p: any) =>
			p.parent?.database_id === databaseId &&
			getText(p.properties.Slug) === slug,
	)

	if (!page) return null

	const blocks = await notion.blocks.children.list({
		block_id: page.id,
	})

	return {page, blocks: blocks.results}
}
