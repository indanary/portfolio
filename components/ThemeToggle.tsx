"use client"

import {useEffect, useState} from "react"

export default function ThemeToggle() {
	const [mounted, setMounted] = useState(false)
	const [dark, setDark] = useState(false)

	useEffect(() => {
		// eslint-disable-next-line react-hooks/set-state-in-effect
		setMounted(true)

		if (document.documentElement.classList.contains("dark")) {
			setDark(true)
		}
	}, [])

	function toggleTheme() {
		const html = document.documentElement

		if (html.classList.contains("dark")) {
			html.classList.remove("dark")
			localStorage.setItem("theme", "light")
			setDark(false)
		} else {
			html.classList.add("dark")
			localStorage.setItem("theme", "dark")
			setDark(true)
		}
	}

	// prevent hydration mismatch
	if (!mounted) return null

	return (
		<button
			onClick={toggleTheme}
			className="text-lg opacity-70 hover:opacity-100 transition cursor-pointer"
			aria-label="Toggle theme"
		>
			{dark ? "☀️" : "🌙"}
		</button>
	)
}
