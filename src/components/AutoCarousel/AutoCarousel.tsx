"use client";

import { useRef, useEffect } from "react";
import "./AutoCarousel.scss";

function InfiniteScrollContainer({ direction = "left", speed = 20 }) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Sample card data - replace with your own
  const cards = [
    { id: 1, title: "Card 1", color: "red" },
    { id: 2, title: "Card 2", color: "blue" },
    { id: 3, title: "Card 3", color: "green" },
    { id: 4, title: "Card 4", color: "yellow" },
    { id: 5, title: "Card 5", color: "purple" },
    { id: 6, title: "Card 6", color: "pink" },
  ];

  // Calculate animation duration based on speed
  // Lower speed value = faster animation
  const animationDuration = cards.length * speed * 0.5;

  // Set animation direction and ensure it's running
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Apply animation direction
    container.style.animationDirection = direction === "left" ? "normal" : "reverse";

    // Force a reflow to ensure animation applies
    void container.offsetWidth;

    // Ensure animation is running
    container.style.animationPlayState = "running";
  }, [direction]);

  return (
    <div className="infinite-scroll-wrapper">
      <div className="infinite-scroll-header">
        <h2>Infinite Scroll Cards</h2>
      </div>

      <div className="infinite-scroll-viewport">
        <div
          ref={containerRef}
          className="infinite-scroll-track"
          style={{
            animationName: "infiniteScroll",
            animationDuration: `${animationDuration}s`,
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
            animationPlayState: "running",
          }}
        >
          {/* First set of cards */}
          {cards.map((card) => (
            <div key={card.id} className="infinite-scroll-card-wrapper">
              <div className={`infinite-scroll-card ${card.color}`}>
                <div className="infinite-scroll-card-content">
                  <h3>{card.title}</h3>
                </div>
              </div>
            </div>
          ))}

          {/* Duplicate set for seamless looping */}
          {cards.map((card) => (
            <div key={`dup-${card.id}`} className="infinite-scroll-card-wrapper">
              <div className={`infinite-scroll-card ${card.color}`}>
                <div className="infinite-scroll-card-content">
                  <h3>{card.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default InfiniteScrollContainer;

// import { useRef, useEffect } from "react";
// import "./AutoCarousel.scss";

// // Main component
// function InfiniteScrollContainer({ direction = "left", speed = 20 }) {
//   const containerRef = useRef<HTMLDivElement>(null);

//   // Sample card data - replace with your own
//   const cards = [
//     { id: 1, title: "Card 1", color: "red" },
//     { id: 2, title: "Card 2", color: "blue" },
//     { id: 3, title: "Card 3", color: "green" },
//     { id: 4, title: "Card 4", color: "yellow" },
//     { id: 5, title: "Card 5", color: "purple" },
//     { id: 6, title: "Card 6", color: "pink" },
//   ];

//   // Calculate animation duration based on speed
//   // Lower speed value = faster animation
//   const animationDuration = cards.length * speed * 0.5;

//   // Set animation direction
//   useEffect(() => {
//     const container = containerRef.current;
//     if (!container) return;

//     // Apply animation direction
//     container.style.animationDirection = direction === "left" ? "normal" : "reverse";
//   }, [direction]);

//   return (
//     <div className="infinite-scroll-wrapper">
//       <div className="infinite-scroll-header">
//         <h2>Infinite Scroll Cards</h2>
//       </div>

//       <div className="infinite-scroll-container">
//         <div
//           ref={containerRef}
//           className="infinite-scroll-track"
//           style={{
//             animationDuration: `${animationDuration}s`,
//             animationTimingFunction: "linear",
//             animationIterationCount: "infinite",
//           }}
//         >
//           {/* First set of cards */}
//           {cards.map((card) => (
//             <div key={card.id} className="infinite-scroll-card-wrapper">
//               <div className={`infinite-scroll-card ${card.color}`}>
//                 <div className="infinite-scroll-card-content">
//                   <h3>{card.title}</h3>
//                 </div>
//               </div>
//             </div>
//           ))}

//           {/* Duplicate set for seamless looping */}
//           {cards.map((card) => (
//             <div key={`dup-${card.id}`} className="infinite-scroll-card-wrapper">
//               <div className={`infinite-scroll-card ${card.color}`}>
//                 <div className="infinite-scroll-card-content">
//                   <h3>{card.title}</h3>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default InfiniteScrollContainer;

