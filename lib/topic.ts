const topicColors: Record<string, string> = {
	JavaScript:
		"bg-amber-500/10 text-amber-600 border-amber-500/20 dark:text-amber-400",
	React: "bg-sky-500/10 text-sky-600 border-sky-500/20 dark:text-sky-400",
	CSS: "bg-pink-500/10 text-pink-600 border-pink-500/20 dark:text-pink-400",
}

const defaultTopicColor =
	"bg-[var(--callout-bg)] text-[var(--muted)] border-[var(--border)]"

export function getTopicColor(topic: string) {
	return topicColors[topic] ?? defaultTopicColor
}
