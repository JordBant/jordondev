"use client";
import React from "react";
import { motion } from "framer-motion";
import "./BackgroundBoxes.scss";

export const BackgroundBoxes = React.memo(({ classNames = "", ...rest }: { classNames?: string }) => {
  const rows = new Array(150).fill(1);
  const cols = new Array(100).fill(1);

  return (
    <div
      className={`background-boxes-wrapper ${classNames}`}
      {...rest}
    >
      {rows.map((_, i) => (
        <motion.div
          key={`row` + i}
          className="background-boxes-rows"
        >
          {cols.map((_, j) => (
            <motion.div
              whileHover={{
                backgroundColor: `#f8f5f34f`,
                transition: { duration: 0 },
              }}
              animate={{
                transition: { duration: 2 },
              }}
              key={`col` + j}
              className="background-boxes-columns"
            />
          ))}
        </motion.div>
      ))}
    </div>
  );
});

