/* eslint-disable @typescript-eslint/no-explicit-any */
export function renderBlocks(blocks: any[]) {
	const result: any[] = []
	let listBuffer: any = null

	for (const block of blocks) {
		switch (block.type) {
			case "bulleted_list_item":
				if (!listBuffer || listBuffer.type !== "ul") {
					listBuffer = {type: "ul", items: []}
					result.push(listBuffer)
				}

				listBuffer.items.push(
					getRichText(block.bulleted_list_item.rich_text),
				)
				break

			case "numbered_list_item":
				if (!listBuffer || listBuffer.type !== "ol") {
					listBuffer = {type: "ol", items: []}
					result.push(listBuffer)
				}

				listBuffer.items.push(
					getRichText(block.numbered_list_item.rich_text),
				)
				break

			default:
				listBuffer = null
				result.push(normalBlock(block))
		}
	}

	return result.filter(Boolean)
}

function normalBlock(block: any) {
	switch (block.type) {
		case "paragraph":
			return {type: "p", text: getRichText(block.paragraph.rich_text)}

		case "heading_1":
			return {type: "h1", text: getRichText(block.heading_1.rich_text)}

		case "heading_2":
			return {type: "h2", text: getRichText(block.heading_2.rich_text)}

		case "heading_3":
			return {type: "h3", text: getRichText(block.heading_3.rich_text)}

		case "quote":
			return {type: "quote", text: getRichText(block.quote.rich_text)}

		case "code":
			return {
				type: "code",
				language: block.code.language,
				text: block.code.rich_text
					.map((t: any) => t.plain_text)
					.join(""),
			}

		case "image":
			return {
				type: "image",
				src:
					block.image.type === "external"
						? block.image.external.url
						: block.image.file.url,
				alt: getRichText(block.image.caption),
			}

		case "divider":
			return {type: "divider"}

		case "callout":
			return {
				type: "callout",
				text: getRichText(block.callout.rich_text),
			}

		default:
			return null
	}
}

function getRichText(richText: any[]) {
	return richText
		.map((t) => {
			let text = escapeHTML(t.plain_text)

			const a = t.annotations || {}

			if (a.code) text = `<code>${text}</code>`
			if (a.bold) text = `<strong>${text}</strong>`
			if (a.italic) text = `<em>${text}</em>`
			if (a.underline) text = `<u>${text}</u>`
			if (a.strikethrough) text = `<s>${text}</s>`

			if (t.href) {
				text = `<a href="${t.href}" target="_blank" rel="noopener noreferrer">${text}</a>`
			}

			return text
		})
		.join("")
}

function escapeHTML(str: string) {
	return str
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
}
