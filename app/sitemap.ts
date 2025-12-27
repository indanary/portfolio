import {getPublishedNotes} from "@/lib/notes"

export default async function sitemap() {
	const notes = await getPublishedNotes()

	const base = "https://YOURDOMAIN.com"

	const noteUrls = notes.map((n) => ({
		url: `${base}/notes/${n.slug}`,
		lastModified: new Date(),
	}))

	return [
		{url: base, lastModified: new Date()},
		{url: `${base}/notes`, lastModified: new Date()},
		{url: `${base}/works`, lastModified: new Date()},
		{url: `${base}/about`, lastModified: new Date()},
		...noteUrls,
	]
}
