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
					getText(block.bulleted_list_item.rich_text),
				)
				break

			case "numbered_list_item":
				if (!listBuffer || listBuffer.type !== "ol") {
					listBuffer = {type: "ol", items: []}
					result.push(listBuffer)
				}
				listBuffer.items.push(
					getText(block.numbered_list_item.rich_text),
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
			return {type: "p", text: getText(block.paragraph.rich_text)}

		case "heading_1":
			return {type: "h1", text: getText(block.heading_1.rich_text)}

		case "heading_2":
			return {type: "h2", text: getText(block.heading_2.rich_text)}

		case "heading_3":
			return {type: "h3", text: getText(block.heading_3.rich_text)}

		case "quote":
			return {type: "quote", text: getText(block.quote.rich_text)}

		case "code":
			return {
				type: "code",
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
				alt: getText(block.image.caption),
			}

		case "divider":
			return {type: "divider"}

		case "callout":
			return {type: "callout", text: getText(block.callout.rich_text)}

		default:
			return null
	}
}

function getText(richText: any[]) {
	return richText
		.map((t) => {
			if (t.annotations?.code) {
				return `<code>${t.plain_text}</code>`
			}
			return t.plain_text
		})
		.join("")
}
