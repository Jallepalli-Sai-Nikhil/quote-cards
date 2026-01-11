import Particles from "react-tsparticles";

const ParticlesBg = () => {
  return (
    <Particles
      options={{
        background: { color: "#0f172a" },
        particles: {
          number: { value: 60 },
          size: { value: 2 },
          move: { enable: true, speed: 1 },
          opacity: { value: 0.5 },
          links: { enable: true, opacity: 0.3 },
        },
      }}
    />
  );
};

export default ParticlesBg;
