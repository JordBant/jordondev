import React from "react";
import "./LoadingPage.scss";

export const LoadingPage = ({ isLoaded }: { isLoaded: boolean }) => {
  return <div className={`loading-page ${isLoaded ? "loaded" : ""}`} />;
};

