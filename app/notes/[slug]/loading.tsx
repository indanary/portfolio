export default function Loading() {
	return (
		<main className="max-w-[68ch] mx-auto px-5 sm:px-6 pt-24 sm:pt-28 pb-24">
			<div className="flex flex-col gap-16 sm:gap-20">
				{/* Wording */}
				<p className="text-sm text-[var(--muted)]/80 animate-pulse">
					Just a moment — opening this note
				</p>

				{/* Skeleton */}
				<div className="flex flex-col gap-16 sm:gap-20 animate-pulse">
					{/* Back */}
					<div className="h-4 w-24 bg-[var(--border)]/60 rounded" />

					{/* Header */}
					<div className="flex flex-col gap-6">
						{/* Meta */}
						<div className="flex items-center gap-3">
							<div className="h-5 w-16 rounded-full bg-[var(--border)]/60" />
							<div className="h-4 w-20 bg-[var(--border)]/60 rounded" />
						</div>

						{/* Title */}
						<div className="flex flex-col gap-3">
							<div className="h-8 w-[85%] bg-[var(--border)]/70 rounded" />
							<div className="h-8 w-[60%] bg-[var(--border)]/70 rounded" />
						</div>
					</div>

					{/* Content */}
					<div className="flex flex-col gap-4">
						<div className="h-4 w-full bg-[var(--border)]/60 rounded" />
						<div className="h-4 w-[92%] bg-[var(--border)]/60 rounded" />
						<div className="h-4 w-[88%] bg-[var(--border)]/60 rounded" />
						<div className="h-4 w-[95%] bg-[var(--border)]/60 rounded" />
						<div className="h-4 w-[80%] bg-[var(--border)]/60 rounded" />
					</div>

					{/* Extra content */}
					<div className="flex flex-col gap-4">
						<div className="h-4 w-[90%] bg-[var(--border)]/50 rounded" />
						<div className="h-4 w-[85%] bg-[var(--border)]/50 rounded" />
						<div className="h-4 w-[75%] bg-[var(--border)]/50 rounded" />
					</div>
				</div>
			</div>
		</main>
	)
}
