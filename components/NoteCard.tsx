import Link from "next/link"
import {getTopicColor} from "@/lib/topic"
import {formatDate} from "@/lib/date"

interface NoteCardProps {
	title: React.ReactNode
	description: React.ReactNode
	href: string
	date: string
	topic: string
	theme?: string
}

export default function NoteCard({
	title,
	description,
	href,
	date,
	topic,
	theme,
}: NoteCardProps) {
	const topicStyle = getTopicColor(topic)

	return (
		<div>
			<Link
				href={href}
				className="group block py-6 border-b border-[var(--border)] transition"
			>
				<div className="flex flex-col gap-3">
					{/* Title */}
					<h3 className="font-medium text-lg leading-snug tracking-tight transition group-hover:translate-x-[3px]">
						{title}
					</h3>

					{/* Description */}
					<p className="text-sm text-[var(--muted)] leading-relaxed max-w-[60ch]">
						{description}
					</p>

					{/* Meta */}
					<div className="flex items-center gap-3 text-xs text-[var(--muted)] pt-1">
						{theme && (
							<>
								<span className="opacity-70">{theme}</span>
								<span className="opacity-40">•</span>
							</>
						)}

						{/* Topic */}
						<span
							className={`px-2 py-[2px] rounded border text-xs font-medium whitespace-nowrap transition ${topicStyle} hover:opacity-80`}
						>
							{topic}
						</span>

						<span className="opacity-40">•</span>

						<time>{formatDate(date)}</time>
					</div>
				</div>
			</Link>
		</div>
	)
}
