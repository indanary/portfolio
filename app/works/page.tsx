import {works} from "@/lib/works"

export default function WorksPage() {
	return (
		<main className="max-w-[68ch] mx-auto px-6 pt-32 pb-32">
			<header className="mb-24 space-y-6">
				<h1 className="text-2xl font-medium">Works</h1>
				<p className="text-slate-400 leading-relaxed">
					A selection of projects and collaborations across energy,
					telecom, finance, government, and startups.
				</p>
			</header>

			<section className="space-y-24">
				{works.map((w, i) => (
					<article key={i} className="space-y-6">
						{/* Title row */}
						<div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
							<h2 className="text-lg font-medium leading-tight">
								{w.company}
							</h2>
							<p className="text-sm text-slate-400">{w.role}</p>
						</div>

						{/* Description */}
						<p className="text-slate-400 leading-relaxed">
							{w.description}
						</p>

						{/* Highlights */}
						<ul className="list-disc pl-5 space-y-2 text-slate-300">
							{w.highlights.map((h, j) => (
								<li key={j}>{h}</li>
							))}
						</ul>

						{/* Tech stack */}
						<div className="flex flex-wrap gap-2 pt-3">
							{w.tech.map((t) => (
								<span
									key={t}
									className="text-xs px-2 py-1 rounded bg-slate-800 text-slate-300"
								>
									{t}
								</span>
							))}
						</div>
					</article>
				))}
			</section>
		</main>
	)
}
