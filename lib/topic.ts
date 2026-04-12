const topicColors: Record<string, string> = {
	// 🟡 JavaScript ecosystem (warm / yellow-orange)
	JavaScript:
		"bg-amber-500/10 text-amber-600 border-amber-500/20 dark:text-amber-400",

	TypeScript:
		"bg-blue-500/10 text-blue-600 border-blue-500/20 dark:text-blue-400",

	// ⚛️ Frontend frameworks
	React: "bg-sky-500/10 text-sky-600 border-sky-500/20 dark:text-sky-400",

	Vue: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20 dark:text-emerald-400",

	// 🌐 Web fundamentals
	HTML: "bg-orange-500/10 text-orange-600 border-orange-500/20 dark:text-orange-400",

	CSS: "bg-pink-500/10 text-pink-600 border-pink-500/20 dark:text-pink-400",

	// 🧠 Thinking domains
	Logic: "bg-indigo-500/10 text-indigo-600 border-indigo-500/20 dark:text-indigo-400",

	// 🧠 Psychology / Philosophy
	"Psychology Foundations":
		"bg-purple-500/10 text-purple-600 border-purple-500/20 dark:text-purple-400",

	"Philosophy Foundations":
		"bg-teal-500/10 text-teal-600 border-teal-500/20 dark:text-teal-400",

	Other: "bg-zinc-500/10 text-zinc-600 border-zinc-500/20 dark:text-zinc-400",
}

const fallbackColors = [
	"bg-red-500/10 text-red-600 border-red-500/20 dark:text-red-400",
	"bg-orange-500/10 text-orange-600 border-orange-500/20 dark:text-orange-400",
	"bg-yellow-500/10 text-yellow-600 border-yellow-500/20 dark:text-yellow-400",
	"bg-green-500/10 text-green-600 border-green-500/20 dark:text-green-400",
	"bg-teal-500/10 text-teal-600 border-teal-500/20 dark:text-teal-400",
	"bg-indigo-500/10 text-indigo-600 border-indigo-500/20 dark:text-indigo-400",
	"bg-purple-500/10 text-purple-600 border-purple-500/20 dark:text-purple-400",
	"bg-rose-500/10 text-rose-600 border-rose-500/20 dark:text-rose-400",
]

function hashString(str: string) {
	let hash = 0
	for (let i = 0; i < str.length; i++) {
		hash = str.charCodeAt(i) + ((hash << 5) - hash)
	}
	return Math.abs(hash)
}

function getFallbackColor(topic: string) {
	const normalized = topic.trim().toLowerCase()
	const index = hashString(normalized) % fallbackColors.length
	return fallbackColors[index]
}

export function getTopicColor(topic: string) {
	return topicColors[topic] ?? getFallbackColor(topic)
}
