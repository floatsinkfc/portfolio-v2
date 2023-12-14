import { useRef, useEffect } from "react";
import { useInView, motion } from "framer-motion";

export default function Transition({ children }) {

  return (
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.25}}
        viewport={{ once: true }}
      >
        {children}
      </motion.div>
  );
}