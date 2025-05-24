import { motion } from 'motion/react';

export const RevealLinks = () => {
  return (
    <section className="grid place-content-center bg-black text-bold h-screen py-24 gap-4">
      <FlipLink href="#">Twitter</FlipLink>
      <FlipLink href="#">LinkedIn</FlipLink>
      <FlipLink href="#">Instagram</FlipLink>
      <FlipLink href="#">Facebook</FlipLink>
    </section>
  );
};

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ children, href }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative overflow-hidden whitespace-nowrap text-4xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl text-transparent [text-shadow:_0_0_2px_white,_0_0_2px_white]"
    >
        <div>
           {children.split("").map((l, i) => (
            <motion.span 
               variants={{
                 initial: {
                  y: 0,
                 }, 
                 hovered: {
                  y: "-100%",
                 },
               }}
               transition={{
                duration: DURATION, 
                ease: "easeInOut", 
                delay: STAGGER * i,
               }}
               className='inline-block'
               key={i}
               >
                {l}
               </motion.span>
           ))}
        </div>
        <div className='absolute inset-0'>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
        </div>
    </motion.a>
  );
};