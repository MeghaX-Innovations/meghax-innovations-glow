import Image from "next/image";
import { motion } from "framer-motion";

const techStackLogos = [
  { <Image src="/react.svg" alt="React" width={40} height={40} />,
    <Image src="/tailwind.svg" alt="TailWind" width={40} height={40} />,
    <Image src="/docker.svg" alt="Docker" width={40} height={40} />,
    <Image src="/mongodb.svg" alt="mongoDB" width={40} height={40} />,
    <Image src="/nodejs.svg" alt="NOdeJS" width={40} height={40} />,
    <Image src="/nextjs.svg" alt="NextJS" width={40} height={40} />,
  // add or remove logos here
];

const radius = 150; // distance from center

export default function AboutSection() {
  return (
    <section className="relative w-full h-[400px] flex items-center justify-center">
      {/* Rotating container */}
      <div className="relative w-[400px] h-[400px] animate-spin-slow">
        {techStackLogos.map((logo, index) => {
          const angle = (index / techStackLogos.length) * 2 * Math.PI;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <div
              key={index}
              className="absolute"
              style={{
                left: `calc(50% + ${x}px - 20px)`,
                top: `calc(50% + ${y}px - 20px)`,
              }}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>
          );
        })}
      </div>

      {/* Central Megha logo (static) */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <Image
          src="/megha-logo.jpg" // update this path to your actual Megha logo
          alt="MeghaX Logo"
          width={80}
          height={80}
        />
      </div>
    </section>
  );
}
