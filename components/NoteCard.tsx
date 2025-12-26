import Link from "next/link"

interface NoteCardProps {
	title: string
	description: string
	href: string
}

export default function NoteCard({title, description, href}: NoteCardProps) {
	return (
		<Link href={href}>
			<li className="flex flex-col gap-2 rounded-lg p-4 border border-slate-800 transition hover:border-slate-900 hover:bg-slate-900">
				<span>{title}</span>
				<span className="text-slate-400">{description}</span>
			</li>
		</Link>
	)
}
