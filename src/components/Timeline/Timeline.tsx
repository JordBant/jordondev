import { useScroll, useTransform, motion } from "motion/react"
import { useEffect, useRef, useState } from "react"
import { TIMELINE_DATA } from "../../store/icons.constants";
import "./Timeline.scss"

export const Timeline = () => {
  const ref = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect()
      setHeight(rect.height)
    }
  }, [ref])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  })

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height])
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1])

  return (
    <div className="timeline-container" ref={containerRef}>
      <div className="timeline-header">
        <h2 className="timeline-title">Changelog from my journey</h2>
        <p className="timeline-description">
          I&apos;ve been working on Aceternity for the past 2 years. Here&apos;s a timeline of my journey.
        </p>
      </div>

      <div ref={ref} className="timeline-content">
        {TIMELINE_DATA.map((item, index) => (
          <div key={index} className="timeline-entry">
            <div className="timeline-marker-container">
              <div className="timeline-marker">
                <div className="timeline-marker-dot" />
              </div>
              <h3 className="timeline-entry-title-desktop">{item.title}</h3>
            </div>

            <div className="timeline-entry-content">
              <h3 className="timeline-entry-title-mobile">{item.title}</h3>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="timeline-line"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="timeline-progress"
          />
        </div>
      </div>
    </div>
  )
}
