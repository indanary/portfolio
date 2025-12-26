import Link from "next/link"

export default function Header() {
	return (
		<header className="fixed top-0 inset-x-0 z-40 bg-black/60 backdrop-blur">
			<div className="max-w-[68ch] mx-auto px-6 h-16 flex items-center justify-between">
				<Link href="/" className="font-medium">
					Indana
				</Link>

				<nav className="flex gap-6 text-slate-400">
					<Link href="/works" className="hover:text-white transition">
						Works
					</Link>
					<Link href="/notes" className="hover:text-white transition">
						Notes
					</Link>
					<Link href="/about" className="hover:text-white transition">
						About
					</Link>
				</nav>
			</div>
		</header>
	)
}
