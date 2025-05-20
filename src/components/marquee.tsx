"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export function CustomerMarquee() {
  const scrollerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!scrollerRef.current) return

    const scrollerInner = scrollerRef.current

    // Clone the content for seamless infinite scrolling
    const content = Array.from(scrollerInner.children)
    content.forEach((item) => {
      const duplicatedItem = item.cloneNode(true)
      scrollerInner.appendChild(duplicatedItem)
    })

    let animationId: number | null = null
    let startTime: number | null = null

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = timestamp - startTime

      // Move the scroller at a consistent speed
      const translateX = (progress * 0.05) % (scrollerInner.scrollWidth / 2)
      scrollerInner.style.transform = `translateX(-${translateX}px)`

      animationId = requestAnimationFrame(step)
    }

    animationId = requestAnimationFrame(step)

    return () => {
      if (animationId) cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <div className="w-full bg-[#e1daca] py-6">
      <div className="flex flex-col md:flex-row items-center md:items-start">
        {/* Fixed heading - 40% width on desktop */}
        <div className="w-full md:w-[40%] px-6 md:px-12 mb-6 md:mb-0">
          <h2 className="text-2xl md:text-3xl font-bold">Trusted by 1,000s of global teams</h2>
        </div>

        {/* Scrolling logos - 60% width on desktop */}
        <div className="w-full md:w-[60%] overflow-hidden">
          <div className="scroller">
            <div className="scroller__inner flex" ref={scrollerRef}>
              <div className="mx-4 flex items-center justify-center">
                <Image src="/placeholder.svg?height=40&width=150" alt="TeamViewer" width={150} height={40} />
              </div>
              <div className="mx-4 flex items-center justify-center">
                <Image src="/placeholder.svg?height=40&width=150" alt="GET YOUR GUIDE" width={150} height={40} />
              </div>
              <div className="mx-4 flex items-center justify-center">
                <Image src="/placeholder.svg?height=40&width=150" alt="Nordcloud" width={150} height={40} />
              </div>
              <div className="mx-4 flex items-center justify-center">
                <Image src="/placeholder.svg?height=40&width=150" alt="Wise" width={150} height={40} />
              </div>
              <div className="mx-4 flex items-center justify-center">
                <Image src="/placeholder.svg?height=40&width=150" alt="Fujifilm" width={150} height={40} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
