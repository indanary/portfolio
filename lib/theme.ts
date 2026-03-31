// lib/theme.ts
export const THEMES = [
	{key: "Software", label: "Software Engineering"},
	{key: "Psychology", label: "Psychology"},
	{key: "Philosophy", label: "Philosophy"},
]

export function getThemeLabel(themeKey: string) {
	return THEMES.find((t) => t.key === themeKey)?.label || themeKey
}
