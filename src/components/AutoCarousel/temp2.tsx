import { useRef, useEffect } from "react";
import "./AutoCarousel.scss";

// Simple Card component
const Card: React.FC<{
  className?: string;
  children: React.ReactNode;
}> = ({ className = "", children }) => {
  return <div className={`card ${className}`}>{children}</div>;
};

// Simple CardContent component
const CardContent: React.FC<{
  className?: string;
  children: React.ReactNode;
}> = ({ className = "", children }) => {
  return <div className={`card-content ${className}`}>{children}</div>;
};

// Main component
export const AutoCarousel: React.FC<{ scrollDirection?: "left" | "right" }> = ({
  scrollDirection = "left",
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Sample card data - replace with your own
  const cards = [
    { id: 1, title: "Card 1", colorClass: "red" },
    { id: 2, title: "Card 2", colorClass: "blue" },
    { id: 3, title: "Card 3", colorClass: "green" },
    { id: 4, title: "Card 4", colorClass: "yellow" },
    { id: 5, title: "Card 5", colorClass: "purple" },
    { id: 6, title: "Card 6", colorClass: "pink" },
  ];

  // Handle the infinite scroll effect
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const handleScroll = () => {
      if (scrollDirection === "left") {
        scrollContainer.scrollLeft += 1;
        if (scrollContainer.scrollLeft >= (scrollContainer.scrollWidth - scrollContainer.clientWidth) / 2) {
          scrollContainer.scrollLeft = 0;
        }
      } else {
        scrollContainer.scrollLeft -= 1;
        if (scrollContainer.scrollLeft <= 0) {
          scrollContainer.scrollLeft = (scrollContainer.scrollWidth - scrollContainer.clientWidth) / 2;
        }
      }
    };

    const intervalId = setInterval(handleScroll, 20);
    return () => clearInterval(intervalId);
  }, [scrollDirection]);

  return (
    <div className="infinite-scroll-wrapper">
      {/* <div className="header">
        <h2>Infinite Scroll Cards</h2>
        <div className="controls">
          <Button
            variant="outline"
            size="icon"
            onClick={toggleDirection}
            aria-label={`Change direction to ${scrollDirection === "left" ? "right" : "left"}`}
          >
            {scrollDirection === "left" ? <ChevronLeft /> : <ChevronRight />}
          </Button>
          <Button variant="outline" onClick={togglePause}>
            {isPaused ? "Play" : "Pause"}
          </Button>
        </div>
      </div> */}

      <div ref={scrollContainerRef} className="scroll-container" style={{ scrollBehavior: "smooth" }}>
        {/* First set of cards */}
        {cards.map((card) => (
          <div key={card.id} className="card-wrapper">
            <Card className={card.colorClass}>
              <CardContent>
                <h3>{card.title}</h3>
              </CardContent>
            </Card>
          </div>
        ))}

        {/* Duplicate set of cards to create the infinite effect */}
        {cards.map((card) => (
          <div key={`dup-${card.id}`} className="card-wrapper">
            <Card className={card.colorClass}>
              <CardContent>
                <h3>{card.title}</h3>
              </CardContent>
            </Card>
          </div>
        ))}
        {/* Another duplicate set for smoother transitions */}
        {cards.map((card) => (
          <div key={`dup2-${card.id}`} className="card-wrapper">
            <Card className={card.colorClass}>
              <CardContent>
                <h3>{card.title}</h3>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

// "use client"

// import { useRef, useEffect } from "react"

// // Simple Card component
// const Card = ({ className, children }) => {
//   return <div className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`}>{children}</div>
// }

// // Simple CardContent component
// const CardContent = ({ className, children }) => {
//   return <div className={`p-6 ${className}`}>{children}</div>
// }

// // Main component
// function InfiniteScrollContainer({ direction = "left", speed = 20 }) {
//   const containerRef = useRef<HTMLDivElement>(null)

//   // Sample card data - replace with your own
//   const cards = [
//     { id: 1, title: "Card 1", color: "bg-red-100" },
//     { id: 2, title: "Card 2", color: "bg-blue-100" },
//     { id: 3, title: "Card 3", color: "bg-green-100" },
//     { id: 4, title: "Card 4", color: "bg-yellow-100" },
//     { id: 5, title: "Card 5", color: "bg-purple-100" },
//     { id: 6, title: "Card 6", color: "bg-pink-100" },
//   ]

//   // Calculate animation duration based on speed
//   // Lower speed value = faster animation
//   const animationDuration = cards.length * speed * 0.5

//   // Set animation direction
//   useEffect(() => {
//     const container = containerRef.current
//     if (!container) return

//     // Apply animation direction
//     container.style.animationDirection = direction === "left" ? "normal" : "reverse"
//   }, [direction])

//   return (
//     <div className="w-full max-w-4xl mx-auto p-4 space-y-4 overflow-hidden">
//       <div className="mb-4">
//         <h2 className="text-2xl font-bold">Infinite Scroll Cards</h2>
//       </div>

//       <div className="relative overflow-hidden">
//         <div
//           ref={containerRef}
//           className="inline-flex animate-scroll"
//           style={{
//             animationDuration: `${animationDuration}s`,
//             animationTimingFunction: "linear",
//             animationIterationCount: "infinite",
//           }}
//         >
//           {/* First set of cards */}
//           {cards.map((card) => (
//             <div key={card.id} className="px-2 flex-shrink-0">
//               <Card className={`w-64 h-40 ${card.color}`}>
//                 <CardContent className="flex items-center justify-center h-full">
//                   <h3 className="text-xl font-medium">{card.title}</h3>
//                 </CardContent>
//               </Card>
//             </div>
//           ))}

//           {/* Duplicate set for seamless looping */}
//           {cards.map((card) => (
//             <div key={`dup-${card.id}`} className="px-2 flex-shrink-0">
//               <Card className={`w-64 h-40 ${card.color}`}>
//                 <CardContent className="flex items-center justify-center h-full">
//                   <h3 className="text-xl font-medium">{card.title}</h3>
//                 </CardContent>
//               </Card>
//             </div>
//           ))}
//         </div>
//       </div>

//       <style jsx global>{`
//         @keyframes scroll {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-50%);
//           }
//         }
        
//         .animate-scroll {
//           animation-name: scroll;
//           will-change: transform;
//         }
//       `}</style>
//     </div>
//   )
// }

// export default InfiniteScrollContainer

