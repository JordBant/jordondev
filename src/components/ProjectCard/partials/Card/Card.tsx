import React from "react";
import "./Card.scss";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(({ className, ...props }, ref) => (
  <div ref={ref} className={`card ${className || ""}`} {...props} />
));
Card.displayName = "Card";

const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(({ className, ...props }, ref) => (
  <div ref={ref} className={`card-content ${className || ""}`} {...props} />
));
CardContent.displayName = "CardContent";

export { Card, CardContent };

