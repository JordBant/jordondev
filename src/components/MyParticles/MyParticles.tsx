import { FC, useCallback, useMemo } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { ParticlesConfig } from "../../store";
import { Engine } from "tsparticles-engine";

export const MyParticles: FC = () => {
  const particlesOption = useMemo(() => ParticlesConfig, []);
  const customInit = useCallback(async (engine: Engine) => {
    /**
     * Adds the bundle to tsParticles
     */
    await loadFull(engine);
  }, []);
  //   return <div>MyParticles</div>,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return <Particles id="my-particles" init={customInit} options={particlesOption} />;
};

