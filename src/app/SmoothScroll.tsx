'use client'
import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function SmoothScrollProvider({ children }: any) {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            // smooth: true,
        })

        function raf(time: any) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

        // Connect Lenis scroll to ScrollTrigger
        lenis.on('scroll', ScrollTrigger.update)
        ScrollTrigger.defaults({ scroller: document.body })

        return () => {
            lenis.destroy()
        }
    }, [])

    return <>{children}</>
}
