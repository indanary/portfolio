import {works} from "@/lib/works"
import Reveal from "@/components/Reveal"

export const metadata = {
	title: "About",
	description:
		"About Indana Rishi — a software engineer exploring technology, psychology, and thoughtful living.",
}

export default function AboutPage() {
	return (
		<main className="max-w-[68ch] mx-auto px-5 sm:px-6 pt-24 sm:pt-28 pb-24">
			<section className="flex flex-col gap-20 sm:gap-24">
				{/* About */}
				<Reveal>
					<section className="flex flex-col gap-10">
						<header>
							<h1 className="text-2xl font-medium">About</h1>
						</header>

						<img
							src="/about.jpg"
							alt="Indana"
							className="w-full rounded-md max-h-[420px] object-cover"
						/>

						<div className="flex flex-col gap-6 leading-relaxed">
							<p>
								I am someone who is deeply curious about almost
								everything, and I tend to follow that curiosity
								wherever it leads. I didn’t grow up planning to
								be a software engineer. I simply kept asking
								questions, taking things apart, trying to
								understand how the world works, and slowly I
								found myself here — building systems, writing
								code, and learning every day.
							</p>

							<p>
								What keeps me in this field is not the
								technology itself, but the thinking behind it. I
								enjoy the quiet work of making something clearer
								than it was before, of turning complexity into
								something usable, and of being responsible for
								the things I put into the world.
							</p>
						</div>

						<div className="flex flex-col gap-6 text-[var(--muted)] leading-relaxed">
							<p>
								Outside of work, I spend a lot of time
								reflecting, writing, and paying attention to my
								inner life. I’m interested in psychology and
								philosophy because they help me understand
								people — including myself — with more patience
								and honesty.
							</p>

							<p>
								Running and hiking give me a sense of grounding,
								and reading reminds me how large and varied the
								world really is.
							</p>

							<p>
								These days, I’m trying to grow in quiet ways:
								becoming a better listener, a more thoughtful
								engineer, and someone who chooses his work and
								his life more carefully than before.
							</p>

							<p className="underline">
								I don’t have everything figured out yet, but I’m
								learning to be present for the process.
							</p>
						</div>
					</section>
				</Reveal>

				{/* Journey */}
				<section className="flex flex-col gap-10">
					<h2 className="text-lg font-medium">Journey</h2>

					<div className="relative flex flex-col gap-12">
						{/* timeline line */}
						<div className="absolute left-[6.5rem] sm:left-[7rem] top-2 bottom-2 w-px bg-[var(--border)]" />

						<Reveal>
							<div className="flex gap-4 sm:gap-6 relative">
								<span className="text-[var(--muted)] w-24 sm:w-28 shrink-0">
									2023 — Present
								</span>

								<div className="relative flex flex-col gap-2 pl-6">
									<span className="absolute -left-[9px] top-1.5 w-3 h-3 rounded-full bg-[var(--foreground)]" />

									<span className="font-medium">
										Software Engineer · PT. Samudra Inovasi
										Teknologi
									</span>

									<p className="text-[var(--muted)] leading-relaxed">
										Building enterprise systems across
										energy, telecom, finance, and government
										sectors.
									</p>
								</div>
							</div>
						</Reveal>

						<Reveal>
							<div className="flex gap-4 sm:gap-6 relative">
								<span className="text-[var(--muted)] w-24 sm:w-28 shrink-0">
									2022 — 2023
								</span>

								<div className="relative flex flex-col gap-2 pl-6">
									<span className="absolute -left-[9px] top-1.5 w-3 h-3 rounded-full bg-[var(--foreground)]" />

									<span className="font-medium">
										Software Engineer · PT. BIXBOX Teknologi
										Perkasa
									</span>

									<p className="text-[var(--muted)] leading-relaxed">
										Contributed to web and mobile platforms
										across logistics, education, and
										healthcare.
									</p>
								</div>
							</div>
						</Reveal>
					</div>
				</section>

				{/* Works */}
				<section className="flex flex-col gap-10">
					<h2 className="text-lg font-medium">Selected Works</h2>

					<div className="space-y-16 sm:space-y-20">
						{works.map((w, i) => (
							<Reveal key={i}>
								<article className="flex flex-col gap-5 group">
									<div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
										<h3 className="text-lg font-medium transition group-hover:translate-x-[2px]">
											{w.company}
										</h3>

										<p className="text-sm text-[var(--muted)]">
											{w.role}
										</p>
									</div>

									<p className="text-[var(--muted)] leading-relaxed">
										{w.description}
									</p>

									<ul className="list-disc pl-5 space-y-2">
										{w.highlights.map((h, j) => (
											<li key={j}>{h}</li>
										))}
									</ul>

									<div className="flex flex-wrap gap-2 pt-2">
										{w.tech.map((t) => (
											<span
												key={t}
												className="text-xs px-2 py-1 rounded border border-[var(--border)] text-[var(--muted)]"
											>
												{t}
											</span>
										))}
									</div>
								</article>
							</Reveal>
						))}
					</div>
				</section>
			</section>
		</main>
	)
}
