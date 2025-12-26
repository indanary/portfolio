export function renderBlocks(blocks: any[]) {
	return blocks
		.map((block) => {
			switch (block.type) {
				case "paragraph":
					return {
						type: "p",
						text: block.paragraph.rich_text
							.map((t: any) => t.plain_text)
							.join(""),
					}
				case "heading_1":
					return {
						type: "h1",
						text: block.heading_1.rich_text
							.map((t: any) => t.plain_text)
							.join(""),
					}
				case "heading_2":
					return {
						type: "h2",
						text: block.heading_2.rich_text
							.map((t: any) => t.plain_text)
							.join(""),
					}
				case "heading_3":
					return {
						type: "h3",
						text: block.heading_3.rich_text
							.map((t: any) => t.plain_text)
							.join(""),
					}
				default:
					return null
			}
		})
		.filter(Boolean)
}
