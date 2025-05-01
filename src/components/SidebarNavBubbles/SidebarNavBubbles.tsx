import React, { useEffect, useState } from "react";
import { Tooltip } from "./partials/Tooltip";
import { SectionNavigatorProps } from "./SidebarNavBubbles.types";
import "./SidebarNavBubbles.scss";

export function SidebarNavBubbles({
  sections,
  position = "left",
  offset = 6,
  bubbleSize = 12,
  bubbleGap = 24,
  // primaryColor = "#ef7410",
  primaryColor = "white",
  bubbleBorderWidth = 2,
}: SectionNavigatorProps) {
  const [activeSection, setActiveSection] = useState<string>(sections[0]?.id || "");

  const scrollToSection = (ref: React.RefObject<HTMLElement> | React.MutableRefObject<undefined>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6, // When 60% of the section is visible
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    sections.forEach((section) => {
      if (section.ref.current) observer.observe(section.ref.current);
    });

    return () => {
      observer.disconnect();
    };
  }, [sections]);

  // Set CSS variables for customization
  const cssVariables = {
    "--offset": `${offset}px`,
    "--bubble-size": `${bubbleSize}px`,
    "--bubble-gap": `${bubbleGap}px`,
    "--primary-color": primaryColor,
    "--bubble-border-width": `${bubbleBorderWidth}px`,
  } as React.CSSProperties;

  const tooltipSide = position === "left" ? "right" : "left";

  return (
    <div className={`section-navigator section-navigator--${position}`} style={cssVariables}>
      {sections.map((section) => (
        <Tooltip key={section.id} content={section.label} side={tooltipSide}>
          <button
            onClick={() => scrollToSection(section.ref)}
            className={`section-navigator__bubble ${
              activeSection === section.id ? "section-navigator__bubble--active" : ""
            }`}
            aria-label={`Navigate to ${section.label} section`}
          />
        </Tooltip>
      ))}
    </div>
  );
}

// import React, { useEffect, useState } from "react"
// import { Tooltip } from "./tooltip"

// export interface Section {
//   id: string
//   ref: React.RefObject<HTMLElement>
//   label: string
// }

// interface SectionNavigatorProps {
//   sections: Section[]
//   position?: "left" | "right"
//   offset?: number
//   bubbleSize?: number
//   bubbleGap?: number
//   primaryColor?: string
//   bubbleBorderWidth?: number
// }

// export function SectionNavigator({
//   sections,
//   position = "left",
//   offset = 6,
//   bubbleSize = 12,
//   bubbleGap = 24,
//   primaryColor = "#3b82f6", // Default to a blue color if CSS variables aren't available
//   bubbleBorderWidth = 2
// }: SectionNavigatorProps) {
//   const [activeSection, setActiveSection] = useState<string>(sections[0]?.id || "")

//   const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
//     ref.current?.scrollIntoView({ behavior: "smooth" })
//   }

//   useEffect(() => {
//     const observerOptions = {
//       root: null,
//       rootMargin: "0px",
//       threshold: 0.6, // When 60% of the section is visible
//     }

//     const observerCallback = (entries: IntersectionObserverEntry[]) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           setActiveSection(entry.target.id)
//         }
//       })
//     }

//     const observer = new IntersectionObserver(observerCallback, observerOptions)

//     // Observe all sections
//     sections.forEach(section => {
//       if (section.ref.current) observer.observe(section.ref.current)
//     })

//     return () => {
//       observer.disconnect()
//     }
//   }, [sections])

//   // Create styles for positioning
//   const containerStyle: React.CSSProperties = {
//     position: 'fixed',
//     top: '50%',
//     transform: 'translateY(-50%)',
//     [position]: `${offset}px`,
//     zIndex: 50,
//     display: 'flex',
//     flexDirection: 'column',
//     gap: `${bubbleGap}px`,
//     alignItems: 'center'
//   }

//   const getBubbleStyle = (isActive: boolean): React.CSSProperties => ({
//     width: `${bubbleSize}px`,
//     height: `${bubbleSize}px`,
//     borderRadius: '50%',
//     border: `${bubbleBorderWidth}px solid ${primaryColor}`,
//     backgroundColor: isActive ? primaryColor : 'transparent',
//     transition: 'background-color 0.3s ease',
//     cursor: 'pointer',
//     padding: 0
//   })

//   const tooltipSide = position === "left" ? "right" : "left"

//   return (
//     <div style={containerStyle}>
//       {sections.map((section) => (
//         <Tooltip
//           key={section.id}
//           content={section.label}
//           side={tooltipSide}
//         >
//           <button
//             onClick={() => scrollToSection(section.ref)}
//             style={getBubbleStyle(activeSection === section.id)}
//             aria-label={`Navigate to ${section.label} section`}
//           />
//         </Tooltip>
//       ))}
//     </div>
//   )
// }

