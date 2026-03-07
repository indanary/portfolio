import Link from "next/link"
import {getTopicColor} from "@/lib/topic"
import {formatDate} from "@/lib/date"

interface NoteCardProps {
	title: string
	description: string
	href: string
	date: string
	topic: string
}

export default function NoteCard({
	title,
	description,
	href,
	date,
	topic,
}: NoteCardProps) {
	const topicStyle = getTopicColor(topic)

	return (
		<Link href={href}>
			<li className="flex flex-col gap-3 rounded-lg p-4 border border-slate-800 transition hover:border-slate-900 hover:bg-slate-900">
				<div className="flex items-center justify-between">
					<span
						className={`text-xs px-2 py-1 rounded border ${topicStyle}`}
					>
						{topic}
					</span>

					<span className="text-xs text-slate-400">
						{formatDate(date)}
					</span>
				</div>

				<span className="font-medium">{title}</span>

				<span className="text-slate-400 text-sm">{description}</span>
			</li>
		</Link>
	)
}
