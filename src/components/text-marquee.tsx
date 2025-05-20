"use client"

import { useEffect, useRef } from "react"

// Sample user activity notifications
const userActivities = [
  "Abhishek used Blink AI",
  "Sunil bought Pro plan",
  "Riya generated beautiful summary",
  "John saved 2 hours with Blink",
  "Priya summarized 5 documents",
  "Alex upgraded to Premium",
  "Maya shared summary with team",
  "David processed 10 PDFs",
  "Sarah loves the quick summaries",
  "Raj converted presentation to notes",
  "Emma simplified complex document",
  "Michael recommended to colleagues",
  "Neha generated report in seconds",
  "Tom saved research findings",
  "Aisha summarized meeting notes",
]

export function TextMarquee() {
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
    <div className="w-full bg-[#CCFF00] py-3">
      <div className="overflow-hidden">
        <div className="scroller">
          <div className="scroller__inner flex" ref={scrollerRef}>
            {userActivities.map((activity, index) => (
              <div key={index} className="flex items-center whitespace-nowrap mx-4">
                <div className="w-2 h-2 bg-black rounded-full mr-2"></div>
                <span className="text-sm font-medium">{activity}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
