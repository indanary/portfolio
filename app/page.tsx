export const runtime = "nodejs"

import Link from "next/link"
import {getPublishedNotes} from "@/lib/notes"

import Reveal from "@/components/Reveal"

export const metadata = {
	title: "Home",
	description:
		"Indana Rishi — Software Engineer. Essays on software, psychology, philosophy, and thoughtful system building.",
}

export default async function Home() {
	const notes = await getPublishedNotes()

	const softwareNotes = notes
		.filter((n) => n.theme === "Software")
		.slice(0, 3)
	const psychologyNotes = notes
		.filter((n) => n.theme === "Psychology")
		.slice(0, 3)
	const philosophyNotes = notes
		.filter((n) => n.theme === "Philosophy")
		.slice(0, 3)

	return (
		<main className="max-w-[68ch] mx-auto px-5 sm:px-6 pt-24 sm:pt-28 pb-20 sm:pb-24">
			<div className="flex flex-col gap-14 sm:gap-20">
				{/* Identity */}
				<Reveal>
					<section className="flex flex-col gap-10">
						<div className="flex flex-col">
							<h1 className="font-medium text-lg sm:text-xl">
								Indana Rishi
							</h1>

							<span className="text-slate-400">
								Software Engineer
							</span>
						</div>
						<span className="text-base sm:text-lg leading-relaxed">
							I’m a human who happens to be a software enginer —
							and here’s how I think.
						</span>
						<span className="text-slate-400">
							I write about software engineering, psychology, and
							philosophy as a way to understand the world and
							myself.
						</span>
					</section>
				</Reveal>

				{/* Notes */}
				<Reveal>
					<section className="flex flex-col gap-10">
						<div className="flex items-center justify-between">
							<h2 className="font-medium text-lg sm:text-xl tracking-tight">
								Notes
							</h2>
							<Link
								href="/notes"
								className="text-slate-400 hover:underline"
							>
								See all
							</Link>
						</div>

						<div className="flex flex-col gap-4">
							<h3>Software Engineering</h3>

							<ul className="grid grid-cols-1 gap-3 sm:gap-4">
								{softwareNotes.map((n) => (
									<Link
										key={n.slug}
										href={`/notes/${n.slug}`}
									>
										<li className="flex flex-col gap-2 rounded-lg p-4 border border-slate-800 transition hover:border-slate-900 hover:bg-slate-900">
											<span>{n.title}</span>
											<span className="text-slate-400">
												{n.description}
											</span>
										</li>
									</Link>
								))}
							</ul>
						</div>

						<div className="flex flex-col gap-4">
							<h3>Psychology</h3>

							<ul className="grid grid-cols-1 gap-3 sm:gap-4">
								{psychologyNotes.map((n) => (
									<Link
										key={n.slug}
										href={`/notes/${n.slug}`}
									>
										<li className="flex flex-col gap-2 rounded-lg p-4 border border-slate-800 transition hover:border-slate-900 hover:bg-slate-900">
											<span>{n.title}</span>
											<span className="text-slate-400">
												{n.description}
											</span>
										</li>
									</Link>
								))}
							</ul>
						</div>

						<div className="flex flex-col gap-4">
							<h3>Philosophy</h3>

							<ul className="grid grid-cols-1 gap-3 sm:gap-4">
								{philosophyNotes.map((n) => (
									<Link
										key={n.slug}
										href={`/notes/${n.slug}`}
									>
										<li className="flex flex-col gap-2 rounded-lg p-4 border border-slate-800 transition hover:border-slate-900 hover:bg-slate-900">
											<span>{n.title}</span>
											<span className="text-slate-400">
												{n.description}
											</span>
										</li>
									</Link>
								))}
							</ul>
						</div>
					</section>
				</Reveal>

				{/* Selected Work */}
				<Reveal>
					<section className="flex flex-col gap-10">
						<div className="flex items-center justify-between">
							<h2 className="font-medium text-lg sm:text-xl tracking-tight">
								Selected Works
							</h2>
							<Link
								href="/works"
								className="text-slate-400 hover:underline"
							>
								See all
							</Link>
						</div>

						<ul className="grid grid-cols-1 gap-3 sm:gap-4">
							<li className="rounded-lg p-4 border border-slate-900 transition hover:border-slate-900 hover:bg-slate-900">
								<div className="flex items-start gap-4">
									<img
										src="/logos/pertamina.jpeg"
										alt="Pertamina"
										width={36}
										height={36}
										loading="lazy"
										className="mt-1"
									/>
									<div className="flex-1">
										<div className="flex flex-col sm:flex-row justify-between">
											<span className="font-medium text-slate-100">
												Pertamina Hulu Indonesia
											</span>
											<span className="text-slate-400 text-sm sm:text-base">
												Frontend Developer
											</span>
										</div>
										<p className="mt-4 sm:mt-2 text-slate-400 leading-relaxed">
											Project management system for
											monitoring projects, contracts, and
											vendor operations
										</p>
									</div>
								</div>
							</li>

							<li className="rounded-lg p-4 border border-slate-900 transition hover:border-slate-900 hover:bg-slate-900">
								<div className="flex items-start gap-4">
									<img
										src="/logos/pln.jpg"
										alt="PLN"
										width={36}
										height={36}
										loading="lazy"
										className="mt-1"
									/>
									<div className="flex-1">
										<div className="flex flex-col sm:flex-row justify-between">
											<span className="font-medium text-slate-100">
												PLN Icon Plus
											</span>
											<span className="text-slate-400 text-sm sm:text-base">
												Frontend Developer
											</span>
										</div>
										<p className="mt-4 sm:mt-2 text-slate-400 leading-relaxed">
											Secure payment platform and CMS
											systems supporting national
											infrastructure services
										</p>
									</div>
								</div>
							</li>

							<li className="rounded-lg p-4 border border-slate-900 transition hover:border-slate-900 hover:bg-slate-900">
								<div className="flex items-start gap-4">
									<img
										src="/logos/telkomsel.jpg"
										alt="Telkomsel"
										width={36}
										height={36}
										loading="lazy"
										className="mt-1"
									/>
									<div className="flex-1">
										<div className="flex flex-col sm:flex-row justify-between">
											<span className="font-medium text-slate-100">
												Telkomsel
											</span>
											<span className="text-slate-400 text-sm sm:text-base">
												Frontend Developer
											</span>
										</div>
										<p className="mt-4 sm:mt-2 text-slate-400 leading-relaxed">
											CMS dashboard for e-money services
											and internal quality assurance tools
											supporting enterprise development
											teams
										</p>
									</div>
								</div>
							</li>

							<li className="rounded-lg p-4 border border-slate-900 transition hover:border-slate-900 hover:bg-slate-900">
								<div className="flex items-start gap-4">
									<img
										src="/logos/lion-parcel.png"
										alt="Lion Parcel"
										width={36}
										height={36}
										loading="lazy"
										className="mt-1"
									/>
									<div className="flex-1">
										<div className="flex flex-col sm:flex-row justify-between">
											<span className="font-medium text-slate-100">
												Lion Parcel
											</span>
											<span className="text-slate-400 text-sm sm:text-base">
												Frontend Developer
											</span>
										</div>
										<p className="mt-4 sm:mt-2 text-slate-400 leading-relaxed">
											Core logistics and delivery
											management platform supporting
											nationwide shipment operations
										</p>
									</div>
								</div>
							</li>

							<li className="rounded-lg p-4 border border-slate-900 transition hover:border-slate-900 hover:bg-slate-900">
								<div className="flex items-start gap-4">
									<img
										src="/logos/learn.jpg"
										alt="LEARN"
										width={36}
										height={36}
										loading="lazy"
										className="mt-1"
									/>
									<div className="flex-1">
										<div className="flex flex-col sm:flex-row justify-between">
											<span className="font-medium text-slate-100">
												LEARN.gov.sg
											</span>
											<span className="text-slate-400 text-sm sm:text-base">
												Frontend & Mobile Developer
											</span>
										</div>
										<p className="mt-4 sm:mt-2 text-slate-400 leading-relaxed">
											National learning platform
											delivering education services across
											web and mobile
										</p>
									</div>
								</div>
							</li>

							<li className="rounded-lg p-4 border border-slate-900 transition hover:border-slate-900 hover:bg-slate-900">
								<div className="flex items-start gap-4">
									<img
										src="/logos/biofarma.jpg"
										alt="Biofarma"
										width={36}
										height={36}
										loading="lazy"
										className="mt-1"
									/>
									<div className="flex-1">
										<div className="flex flex-col sm:flex-row justify-between">
											<span className="font-medium text-slate-100">
												Biofarma
											</span>
											<span className="text-slate-400 text-sm sm:text-base">
												Frontend Developer
											</span>
										</div>
										<p className="mt-4 sm:mt-2 text-slate-400 leading-relaxed">
											CMS dashboard for pharmaceutical
											content and healthcare system
											management
										</p>
									</div>
								</div>
							</li>
						</ul>
					</section>
				</Reveal>

				{/* Journey */}
				<Reveal>
					<section className="flex flex-col gap-10">
						<h2 className="font-medium text-lg sm:text-xl tracking-tight">
							Journey
						</h2>

						<div className="flex flex-col gap-8">
							<div className="flex gap-6">
								<span className="text-slate-400 w-32 shrink-0">
									2023 — Present
								</span>
								<div className="flex flex-col gap-2">
									<span className="font-medium text-slate-100">
										Software Engineer · PT. Samudra Inovasi
										Teknologi
									</span>
									<p className="text-slate-400 leading-relaxed">
										Working on large-scale enterprise
										systems across energy, telecom, finance,
										and government sectors, focusing on
										frontend architecture, performance, and
										product quality.
									</p>
								</div>
							</div>

							<div className="flex gap-6">
								<span className="text-slate-400 w-32 shrink-0">
									2022 — 2023
								</span>
								<div className="flex flex-col gap-2">
									<span className="font-medium text-slate-100">
										Software Engineer · PT. BIXBOX Teknologi
										Perkasa
									</span>
									<p className="text-slate-400 leading-relaxed">
										Contributed to web and mobile platforms
										in logistics, education, healthcare, and
										government projects, building real-world
										systems used at national scale.
									</p>
								</div>
							</div>

							<div className="flex gap-6">
								<span className="text-slate-400 w-32 shrink-0">
									2018 — 2021
								</span>
								<div className="flex flex-col gap-2">
									<span className="font-medium text-slate-100">
										Computer Science Diploma · Dian
										Nuswantoro University
									</span>
									<p className="text-slate-400 leading-relaxed">
										Built strong foundations in software
										engineering while actively exploring
										web, mobile development, and system
										design.
									</p>
								</div>
							</div>
						</div>
					</section>
				</Reveal>

				{/* Contact */}
				<Reveal>
					<section className="flex flex-col gap-10">
						<h2 className="font-medium text-lg sm:text-xl tracking-tight">
							Connect
						</h2>

						<span>
							Feel free to contact me at indanary@gmail.com
						</span>

						<div className="flex gap-10">
							<Link
								href="https://www.linkedin.com/in/indana-rishi/"
								target="_blank"
								rel="noopener noreferrer"
								className="text-slate-400 hover:text-white transition"
							>
								LinkedIn
							</Link>

							<Link
								href="https://instagram.com/indanarishi"
								target="_blank"
								rel="noopener noreferrer"
								className="text-slate-400 hover:text-white transition"
							>
								Instagram
							</Link>
						</div>
					</section>
				</Reveal>
			</div>
		</main>
	)
}
