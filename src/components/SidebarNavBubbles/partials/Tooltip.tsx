import React, { useState, useRef, useEffect } from "react"
import './Tooltip.scss'

interface TooltipProps {
  children: React.ReactNode
  content: React.ReactNode
  side?: "top" | "right" | "bottom" | "left"
  delayDuration?: number
}

export function Tooltip({ 
  children, 
  content, 
  side = "top", 
  delayDuration = 300,
}: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [position, setPosition] = useState({ top: 0, left: 0 })
  const timeoutRef = useRef<number | null>(null)
  const childRef = useRef<HTMLDivElement>(null)

  const showTooltip = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => {
      if (childRef.current) {
        const rect = childRef.current.getBoundingClientRect()
        let top = 0
        let left = 0

        switch (side) {
          case "top":
            top = rect.top - 10
            left = rect.left + rect.width / 2
            break
          case "right":
            top = rect.top + rect.height / 2
            left = rect.right + 10
            break
          case "bottom":
            top = rect.bottom + 10
            left = rect.left + rect.width / 2
            break
          case "left":
            top = rect.top + rect.height / 2
            left = rect.left - 10
            break
        }

        setPosition({ top, left })
        setIsVisible(true)
      }
    }, delayDuration)
  }

  const hideTooltip = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setIsVisible(false)
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  return (
    <>
      <div 
        ref={childRef}
        className="tooltip__trigger"
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        onFocus={showTooltip}
        onBlur={hideTooltip}
      >
        {children}
      </div>
      <div 
        className={`tooltip__content tooltip__content--${side} ${isVisible ? 'tooltip__content--visible' : ''}`}
        style={{ top: `${position.top}px`, left: `${position.left}px` }}
      >
        {content}
      </div>
    </>
  )
}


// import * as React from "react";

// interface TooltipProps {
//   children: React.ReactNode;
//   content: React.ReactNode;
//   side?: "top" | "right" | "bottom" | "left";
//   delayDuration?: number;
// }

// export function Tooltip({ children, content, side = "top", delayDuration = 300 }: TooltipProps) {
//   const [isVisible, setIsVisible] = React.useState(false);
//   const [position, setPosition] = React.useState({ top: 0, left: 0 });
//   const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);
//   const childRef = React.useRef<HTMLDivElement>(null);

//   const showTooltip = () => {
//     if (timeoutRef.current) clearTimeout(timeoutRef.current);
//     timeoutRef.current = setTimeout(() => {
//       if (childRef.current) {
//         const rect = childRef.current.getBoundingClientRect();
//         let top = 0;
//         let left = 0;

//         switch (side) {
//           case "top":
//             top = rect.top - 8;
//             left = rect.left + rect.width / 2;
//             break;
//           case "right":
//             top = rect.top + rect.height / 2;
//             left = rect.right + 8;
//             break;
//           case "bottom":
//             top = rect.bottom + 8;
//             left = rect.left + rect.width / 2;
//             break;
//           case "left":
//             top = rect.top + rect.height / 2;
//             left = rect.left - 8;
//             break;
//         }

//         setPosition({ top, left });
//         setIsVisible(true);
//       }
//     }, delayDuration);
//   };

//   const hideTooltip = () => {
//     if (timeoutRef.current) clearTimeout(timeoutRef.current);
//     setIsVisible(false);
//   };

//   React.useEffect(() => {
//     return () => {
//       if (timeoutRef.current) clearTimeout(timeoutRef.current);
//     };
//   }, []);

//   const getTooltipStyles = (): React.CSSProperties => {
//     const baseStyles: React.CSSProperties = {
//       position: "fixed",
//       zIndex: 9999,
//       backgroundColor: "hsl(var(--foreground))",
//       color: "hsl(var(--background))",
//       padding: "0.5rem 0.75rem",
//       borderRadius: "0.25rem",
//       fontSize: "0.875rem",
//       pointerEvents: "none",
//       opacity: isVisible ? 1 : 0,
//       transition: "opacity 150ms ease-in-out",
//       whiteSpace: "nowrap",
//     };

//     switch (side) {
//       case "top":
//         return {
//           ...baseStyles,
//           top: `${position.top - 10}px`,
//           left: `${position.left}px`,
//           transform: "translate(-50%, -100%)",
//         };
//       case "right":
//         return {
//           ...baseStyles,
//           top: `${position.top}px`,
//           left: `${position.left + 10}px`,
//           transform: "translateY(-50%)",
//         };
//       case "bottom":
//         return {
//           ...baseStyles,
//           top: `${position.top + 10}px`,
//           left: `${position.left}px`,
//           transform: "translate(-50%, 0)",
//         };
//       case "left":
//         return {
//           ...baseStyles,
//           top: `${position.top}px`,
//           left: `${position.left - 10}px`,
//           transform: "translate(-100%, -50%)",
//         };
//     }
//   };

//   return (
//     <>
//       <div
//         ref={childRef}
//         onMouseEnter={showTooltip}
//         onMouseLeave={hideTooltip}
//         onFocus={showTooltip}
//         onBlur={hideTooltip}
//       >
//         {children}
//       </div>
//       {isVisible && <div style={getTooltipStyles()}>{content}</div>}
//     </>
//   );
// }

