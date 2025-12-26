export default function AboutPage() {
	return (
		<main className="max-w-[68ch] mx-auto px-5 sm:px-6 pt-24 sm:pt-28 pb-20 sm:pb-24">
			<section className="flex flex-col gap-16">
				<header className="flex flex-col gap-6">
					<h1 className="text-2xl font-medium">About Me</h1>
				</header>

				<img
					src="/about.jpg"
					alt="Indana"
					className="w-full rounded-md"
				/>

				<section className="flex flex-col gap-6 text-slate-300 leading-relaxed">
					<p>
						I am someone who is deeply curious about almost
						everything, and I tend to follow that curiosity wherever
						it leads. I didn’t grow up planning to be a software
						engineer. I simply kept asking questions, taking things
						apart, trying to understand how the world works, and
						slowly I found myself here — building systems, writing
						code, and learning every day.
					</p>

					<p>
						What keeps me in this field is not the technology
						itself, but the thinking behind it. I enjoy the quiet
						work of making something clearer than it was before, of
						turning complexity into something usable, and of being
						responsible for the things I put into the world.
					</p>
				</section>

				<section className="flex flex-col gap-6 text-slate-300 leading-relaxed">
					<p>
						Outside of work, I spend a lot of time reflecting,
						writing, and paying attention to my inner life. I’m
						interested in psychology and philosophy because they
						help me understand people — including myself — with more
						patience and honesty. Running and hiking give me a sense
						of grounding, and reading reminds me how large and
						varied the world really is.
					</p>

					<p>
						These days, I’m trying to grow in quiet ways: becoming a
						better listener, a more thoughtful engineer, and someone
						who chooses his work and his life more carefully than
						before.
					</p>
				</section>

				<section className="text-slate-400 leading-relaxed">
					<p>
						I don’t have everything figured out yet, but I’m
						learning to be present for the process.
					</p>
				</section>
			</section>
		</main>
	)
}
