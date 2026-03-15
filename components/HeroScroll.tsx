"use client"

import {motion, useScroll, useTransform} from "framer-motion"
import {ReactNode} from "react"

export default function HeroScroll({children}: {children: ReactNode}) {
	const {scrollY} = useScroll()

	const y = useTransform(scrollY, [0, 400], [0, -80])
	const scale = useTransform(scrollY, [0, 400], [1, 0.96])
	const opacity = useTransform(scrollY, [0, 300], [1, 0.85])

	return (
		<motion.div
			style={{y, scale, opacity}}
			className="flex flex-col items-center justify-center min-h-screen gap-20 sm:gap-28 will-change-transform"
		>
			{children}
		</motion.div>
	)
}
