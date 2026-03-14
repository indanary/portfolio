import Link from "next/link"

export default function Header() {
	return (
		<header className="fixed top-0 inset-x-0 z-40 backdrop-blur">
			<div className="mx-auto px-6 h-16 flex items-center justify-between">
				<Link
					href="/"
					className="group flex items-center gap-2 font-medium tracking-tight"
				>
					<span>Indana</span>

					<span className="opacity-0 translate-x-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-2 text-sm">
						Hi{" "}
						<span className="inline-block group-hover:animate-[wave_0.6s_ease]">
							👋
						</span>
					</span>
				</Link>

				<nav className="flex items-center gap-6">
					<Link
						href="/notes"
						className="relative after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:h-[1px] after:w-full after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:after:scale-x-100"
					>
						Notes
					</Link>

					<Link
						href="/about"
						className="relative after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:h-[1px] after:w-full after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:after:scale-x-100"
					>
						About
					</Link>

					{/* Theme toggle will go here later */}
				</nav>
			</div>
		</header>
	)
}
