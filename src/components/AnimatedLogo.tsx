import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Brain,
  Apple,
  Scale,
  Salad,
  Heart,
} from "lucide-react";

const icons = [
  { component: Brain, key: "brain" },
  { component: Apple, key: "apple" },
  { component: Salad, key: "chocolate" }, // Chocolate is not in Lucide, use Candy or custom SVG
  { component: Scale, key: "scale" },
  { component: Heart, key: "heart" },
];

export default function AnimatedLogo() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % icons.length);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, []);

  const CurrentIcon = icons[currentIndex].component;

  return (
    <div className="w-10 h-10 flex items-center justify-center relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={icons[currentIndex].key}
          initial={{ opacity: 0, scale: 0.8, rotate: -20 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0.8, rotate: 20 }}
          transition={{ duration: 0.5 }}
          className="absolute"
        >
          <CurrentIcon size={36} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
