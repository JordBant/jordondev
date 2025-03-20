import { motion } from "motion/react";
import "./PinPerspective.scss";

export const PinPerspective = ({ title, href }: { title?: string; href?: string }) => {
  return (
    <motion.div className="pin-wrapper make-visible group-hover/pin:opacity-100">
      <div className="pin-container">
        <div className="pin-title-container-outer">
          <a className="pin-title-container-inner" target={"_blank"} href={href}>
            <span className="pin-title">{title}</span>
            <span className="pin-sub make-slighly-visible" />
          </a>
        </div>

        <div
          style={{
            perspective: "1000px",
            transform: "rotateX(70deg) translateZ(0)",
          }}
          className="pin-anim-container-one"
        >
          <>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,

                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 0,
              }}
              className="anim-container-one"
            />
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,

                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 2,
              }}
              className="anim-container-one"
            />
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,

                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 4,
              }}
              className="anim-container-one"
            />
          </>
        </div>

        <>
          <motion.div style={{ filter: "blur(2px)" }} className="anim-container-two extend-height" />
          <motion.div className="anim-container-two extend-height" />
          <motion.div style={{ filter: "blur(3px)" }} className=" anim-container-three" />
          <motion.div className=" anim-container-three anim-container-three-ext" />
        </>
      </div>
    </motion.div>
  );
};

