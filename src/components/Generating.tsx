import { loading } from "../assets";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
const Generating = ({ className }: { className?: string }) => {
  return (
    <motion.div
      className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] ${
        className || ""
      } text-base`}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      transition={{
        duration: 0.5,
        delay: 0.5,
        type: "spring",
      }}
    >
      <img className="w-5 h-5 mr-4" src={loading} alt="Loading" />
      AI is generating
    </motion.div>
  );
};

export default Generating;
