import { AnimatePresence, motion } from "framer-motion";

const About = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        exit={{
          x: "-100vw",
          opacity: 0,
          scale: 0,
          transition: {
            ease: "easeInOut",
            duration: 0.1,
          },
        }}
        className="h-screen pt-20 text-center"
      >
        About
      </motion.div>
    </AnimatePresence>
  );
};

export default About;
