export default function Loading() {
	return (
		<main className="max-w-[68ch] mx-auto px-5 sm:px-6 pt-24 sm:pt-28 pb-24">
			<div className="flex flex-col gap-12 sm:gap-16">
				{/* Wording */}
				<p className="text-sm text-[var(--muted)] animate-pulse">
					Just a moment — gathering the notes
				</p>

				{/* Skeleton */}
				<div className="flex flex-col gap-12 sm:gap-16 animate-pulse">
					{/* Header */}
					<div className="flex flex-col gap-5">
						<div className="h-6 w-24 bg-[var(--border)]/70 rounded" />
						<div className="h-4 w-[60%] bg-[var(--border)]/60 rounded" />
					</div>

					{/* Tabs */}
					<div className="flex gap-6 border-b border-[var(--border)]">
						<div className="h-4 w-32 bg-[var(--border)]/60 rounded" />
						<div className="h-4 w-28 bg-[var(--border)]/60 rounded" />
						<div className="h-4 w-28 bg-[var(--border)]/60 rounded" />
					</div>

					{/* Notes list */}
					<div className="flex flex-col gap-6">
						{Array.from({length: 5}).map((_, i) => (
							<div key={i} className="flex flex-col gap-3">
								<div className="h-5 w-[70%] bg-[var(--border)]/70 rounded" />
								<div className="h-4 w-[90%] bg-[var(--border)]/60 rounded" />
								<div className="h-4 w-[40%] bg-[var(--border)]/50 rounded" />
							</div>
						))}
					</div>
				</div>
			</div>
		</main>
	)
}
