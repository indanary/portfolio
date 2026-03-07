const topicColors: Record<string, string> = {
	JavaScript: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
	React: "bg-blue-500/10 text-blue-400 border-blue-500/20",
	CSS: "bg-pink-500/10 text-pink-400 border-pink-500/20",
}

const defaultTopicColor = "bg-slate-500/10 text-slate-300 border-slate-500/20"

export function getTopicColor(topic: string) {
	return topicColors[topic] ?? defaultTopicColor
}
