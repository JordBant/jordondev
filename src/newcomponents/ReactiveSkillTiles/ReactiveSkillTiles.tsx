import React, { useState, useRef, useEffect } from "react";
import {
  Github as LogoGithub,
  Binary,
  FileJson,
  Blocks,
  Braces,
  Database,
  FileCode2,
  Container,
  Cloud,
  Server,
  Cpu,
  Code2,
} from "lucide-react";

export const ReactiveSkillTiles = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const iconRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [offsets, setOffsets] = useState<{ x: number; y: number }[]>(Array(12).fill({ x: 0, y: 0 }));

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    containerRef.current?.addEventListener("mousemove", handleMouseMove);
    return () => containerRef.current?.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    let animationFrameId: number;

    const animate = () => {
      const newOffsets = offsets.map((_, index) => {
        if (!containerRef.current || !iconRefs.current[index]) return { x: 0, y: 0 };

        const iconRef = iconRefs.current[index];
        const containerRect = containerRef.current.getBoundingClientRect();
        const iconRect = iconRef.getBoundingClientRect();

        const iconCenterX = iconRect.left + iconRect.width / 2 - containerRect.left;
        const iconCenterY = iconRect.top + iconRect.height / 2 - containerRect.top;

        const distance = Math.sqrt(
          Math.pow(mousePosition.x - iconCenterX, 2) + Math.pow(mousePosition.y - iconCenterY, 2),
        );

        const maxDistance = 200;
        if (distance > maxDistance) return { x: 0, y: 0 };

        // Calculate repulsion vector
        const dx = iconCenterX - mousePosition.x;
        const dy = iconCenterY - mousePosition.y;
        const repulsionIntensity = (1 - distance / maxDistance) * 30;
        const repulsionX = (dx / distance) * repulsionIntensity;
        const repulsionY = (dy / distance) * repulsionIntensity;

        return {
          x: repulsionX,
          y: repulsionY,
        };
      });

      setOffsets(newOffsets);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrameId);
  }, [mousePosition]);

  const icons = [
    <Binary size={64} className="text-blue-500" />,
    <Blocks size={64} className="text-cyan-500" />,
    <FileJson size={64} className="text-green-500" />,
    <Braces size={64} className="text-blue-400" />,
    <Database size={64} className="text-indigo-500" />,
    <FileCode2 size={64} className="text-yellow-500" />,
    <Container size={64} className="text-blue-600" />,
    <Cloud size={64} className="text-orange-500" />,
    <Server size={64} className="text-pink-500" />,
    <Cpu size={64} className="text-orange-600" />,
    <Code2 size={64} className="text-blue-500" />,
    <LogoGithub size={64} className="text-gray-800" />,
  ];

  const calculateIconEffects = (iconRef: HTMLDivElement | null) => {
    if (!containerRef.current || !iconRef) return { scale: 1, blur: 0, showOverlay: false };

    const containerRect = containerRef.current.getBoundingClientRect();
    const iconRect = iconRef.getBoundingClientRect();

    const iconCenterX = iconRect.left + iconRect.width / 2 - containerRect.left;
    const iconCenterY = iconRect.top + iconRect.height / 2 - containerRect.top;

    const distance = Math.sqrt(
      Math.pow(mousePosition.x - iconCenterX, 2) + Math.pow(mousePosition.y - iconCenterY, 2),
    );

    const maxDistance = 200;
    const minScale = 1;
    const maxScale = 1.5;
    const blurThreshold = 50; // Distance at which blur starts

    if (distance > maxDistance) return { scale: minScale, blur: 0, showOverlay: false };

    const scale = minScale + (maxScale - minScale) * (1 - distance / maxDistance);
    const blur = distance < blurThreshold ? (1 - distance / blurThreshold) * 5 : 0;
    const showOverlay = distance < blurThreshold;

    return { scale, blur, showOverlay };
  };

  return (
    <div className="skills-wrapper">
      <div
        ref={containerRef}
        className="skills-container"
        onMouseLeave={() => setMousePosition({ x: -1000, y: -1000 })}
      >
        {icons.map((icon, index) => {
          const effects = calculateIconEffects(iconRefs.current[index]);
          return (
            <div
              key={index}
              ref={(el) => (iconRefs.current[index] = el)}
              className="skills-icon-wrapper"
              style={{
                transform: `translate(${offsets[index].x}px, ${offsets[index].y}px) scale(${effects.scale})`,
                filter: `blur(${effects.blur}px)`,
                transition: "scale 200ms ease-out, filter 200ms ease-out",
              }}
            >
              {icon}
              {effects.showOverlay && (
                <div className="skills-icon-overlay">
                  <span className="font-medium">Skill {String.fromCharCode(65 + index)}</span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

