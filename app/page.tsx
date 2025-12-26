import Image from "next/image"
import Link from "next/link"

export default function Home() {
	return (
		<main className="max-w-2xl mx-auto pt-36 pb-24">
			<div className="flex flex-col gap-20">
				{/* Identity */}
				<section className="flex flex-col gap-10">
					<div className="flex flex-col">
						<h1 className="font-medium text-xl">Indana Rishi</h1>
						<span className="text-slate-400">
							Software Engineer
						</span>
					</div>
					<span className="text-lg leading-relaxed">
						I’m a human who happens to be a software enginer — and
						here’s how I think.
					</span>
					<span className="text-slate-400">
						I write about software engineering, psychology, and
						philosophy as a way to understand the world and myself.
					</span>
				</section>

				{/* Notes */}
				<section className="flex flex-col gap-10">
					<div className="flex items-center justify-between">
						<h2 className="font-medium text-xl tracking-tight">
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
						<ul className="grid grid-cols-1 gap-3">
							<Link href="/">
								<li className="flex flex-col gap-2 rounded-lg p-4 border border-slate-800 transition hover:border-slate-900 hover:bg-slate-900">
									<span>Building Systems That Matter</span>
									<span className="text-slate-400">
										Description...
									</span>
								</li>
							</Link>
							<Link href="/">
								<li className="flex flex-col gap-2 rounded-lg p-4 border border-slate-800 transition hover:border-slate-900 hover:bg-slate-900">
									<span>
										On Working With Real Constraints
									</span>
									<span className="text-slate-400">
										Description...
									</span>
								</li>
							</Link>
							<Link href="/">
								<li className="flex flex-col gap-2 rounded-lg p-4 border border-slate-800 transition hover:border-slate-900 hover:bg-slate-900">
									<span>When Clean Architecture Breaks</span>
									<span className="text-slate-400">
										Description...
									</span>
								</li>
							</Link>
						</ul>
					</div>

					<div className="flex flex-col gap-4">
						<h3>Psychology</h3>
						<ul className="grid grid-cols-1 gap-3">
							<Link href="/">
								<li className="flex flex-col gap-2 rounded-lg p-4 border border-slate-800 transition hover:border-slate-900 hover:bg-slate-900">
									<span>
										Why We Hurt Ourselves When We’re Anxious
									</span>
									<span className="text-slate-400">
										Description...
									</span>
								</li>
							</Link>
							<Link href="/">
								<li className="flex flex-col gap-2 rounded-lg p-4 border border-slate-800 transition hover:border-slate-900 hover:bg-slate-900">
									<span>Learning to Sit With Discomfort</span>
									<span className="text-slate-400">
										Description...
									</span>
								</li>
							</Link>
							<Link href="/">
								<li className="flex flex-col gap-2 rounded-lg p-4 border border-slate-800 transition hover:border-slate-900 hover:bg-slate-900">
									<span>On Emotional Maturity</span>
									<span className="text-slate-400">
										Description...
									</span>
								</li>
							</Link>
						</ul>
					</div>

					<div className="flex flex-col gap-4">
						<h3>Philosophy</h3>
						<ul className="grid grid-cols-1 gap-3">
							<Link href="/">
								<li className="flex flex-col gap-2 rounded-lg p-4 border border-slate-800 transition hover:border-slate-900 hover:bg-slate-900">
									<span>On Responsibility</span>
									<span className="text-slate-400">
										Description...
									</span>
								</li>
							</Link>
							<Link href="/">
								<li className="flex flex-col gap-2 rounded-lg p-4 border border-slate-800 transition hover:border-slate-900 hover:bg-slate-900">
									<span>On Suffering and Meaning</span>
									<span className="text-slate-400">
										Description...
									</span>
								</li>
							</Link>
							<Link href="/">
								<li className="flex flex-col gap-2 rounded-lg p-4 border border-slate-800 transition hover:border-slate-900 hover:bg-slate-900">
									<span>What It Means to Choose</span>
									<span className="text-slate-400">
										Description...
									</span>
								</li>
							</Link>
						</ul>
					</div>
				</section>

				{/* Selected Work */}
				<section className="flex flex-col gap-10">
					<div className="flex items-center justify-between">
						<h2 className="font-medium text-xl tracking-tight">
							Selected Works
						</h2>
						<Link
							href="/notes"
							className="text-slate-400 hover:underline"
						>
							See all
						</Link>
					</div>

					<ul className="grid grid-cols-1 gap-3">
						<li className="rounded-lg p-4 border border-slate-900 transition hover:border-slate-900 hover:bg-slate-900">
							<div className="flex items-start gap-4">
								<Image
									src="/logos/pertamina.jpeg"
									alt="Pertamina"
									width={36}
									height={36}
									className="mt-1"
								/>
								<div className="flex-1">
									<div className="flex justify-between">
										<span className="font-medium text-slate-100">
											Pertamina Hulu Indonesia
										</span>
										<span className="text-slate-400">
											Frontend Developer
										</span>
									</div>
									<p className="mt-2 text-slate-400 leading-relaxed">
										Project management system for monitoring
										projects, contracts, and vendor
										operations
									</p>
								</div>
							</div>
						</li>

						<li className="rounded-lg p-4 border border-slate-900 transition hover:border-slate-900 hover:bg-slate-900">
							<div className="flex items-start gap-4">
								<Image
									src="/logos/pln.jpg"
									alt="PLN"
									width={36}
									height={36}
									className="mt-1"
								/>
								<div className="flex-1">
									<div className="flex justify-between">
										<span className="font-medium text-slate-100">
											PLN Icon Plus
										</span>
										<span className="text-slate-400">
											Frontend Developer
										</span>
									</div>
									<p className="mt-2 text-slate-400 leading-relaxed">
										Secure payment platform and CMS systems
										supporting national infrastructure
										services
									</p>
								</div>
							</div>
						</li>

						<li className="rounded-lg p-4 border border-slate-900 transition hover:border-slate-900 hover:bg-slate-900">
							<div className="flex items-start gap-4">
								<Image
									src="/logos/telkomsel.jpg"
									alt="Telkomsel"
									width={36}
									height={36}
									className="mt-1"
								/>
								<div className="flex-1">
									<div className="flex justify-between">
										<span className="font-medium text-slate-100">
											Telkomsel
										</span>
										<span className="text-slate-400">
											Frontend Developer
										</span>
									</div>
									<p className="mt-2 text-slate-400 leading-relaxed">
										CMS dashboard for e-money services and
										internal quality assurance tools
										supporting enterprise development teams
									</p>
								</div>
							</div>
						</li>

						<li className="rounded-lg p-4 border border-slate-900 transition hover:border-slate-900 hover:bg-slate-900">
							<div className="flex items-start gap-4">
								<Image
									src="/logos/lion-parcel.png"
									alt="Lion Parcel"
									width={36}
									height={36}
									className="mt-1"
								/>
								<div className="flex-1">
									<div className="flex justify-between">
										<span className="font-medium text-slate-100">
											Lion Parcel
										</span>
										<span className="text-slate-400">
											Frontend Developer
										</span>
									</div>
									<p className="mt-2 text-slate-400 leading-relaxed">
										Core logistics and delivery management
										platform supporting nationwide shipment
										operations
									</p>
								</div>
							</div>
						</li>

						<li className="rounded-lg p-4 border border-slate-900 transition hover:border-slate-900 hover:bg-slate-900">
							<div className="flex items-start gap-4">
								<Image
									src="/logos/learn.jpg"
									alt="LEARN"
									width={36}
									height={36}
									className="mt-1"
								/>
								<div className="flex-1">
									<div className="flex justify-between">
										<span className="font-medium text-slate-100">
											LEARN.gov.sg
										</span>
										<span className="text-slate-400">
											Frontend & Mobile Developer
										</span>
									</div>
									<p className="mt-2 text-slate-400 leading-relaxed">
										National learning platform delivering
										education services across web and mobile
									</p>
								</div>
							</div>
						</li>

						<li className="rounded-lg p-4 border border-slate-900 transition hover:border-slate-900 hover:bg-slate-900">
							<div className="flex items-start gap-4">
								<Image
									src="/logos/biofarma.jpg"
									alt="Biofarma"
									width={36}
									height={36}
									className="mt-1"
								/>
								<div className="flex-1">
									<div className="flex justify-between">
										<span className="font-medium text-slate-100">
											Biofarma
										</span>
										<span className="text-slate-400">
											Frontend Developer
										</span>
									</div>
									<p className="mt-2 text-slate-400 leading-relaxed">
										CMS dashboard for pharmaceutical content
										and healthcare system management
									</p>
								</div>
							</div>
						</li>
					</ul>
				</section>

				{/* Contact */}
				<section className="flex flex-col gap-10">
					<h2 className="font-medium text-xl tracking-tight">
						Connect
					</h2>

					<span>Feel free to contact me at indanary@gmail.com</span>

					<div className="flex gap-10">
						<Link
							href="/"
							className="text-slate-400 hover:underline"
						>
							LinkedIn
						</Link>
						<Link
							href="/"
							className="text-slate-400 hover:underline"
						>
							Twitter
						</Link>
						<Link
							href="/"
							className="text-slate-400 hover:underline"
						>
							Instagram
						</Link>
					</div>
				</section>
			</div>
		</main>
	)
}
