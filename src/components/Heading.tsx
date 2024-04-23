import TagLine from "./TagLine";
import { motion } from "framer-motion";

interface HeadingProps {
  className?: string;
  title?: string;
  text?: string;
  tag?: string;
}

const headingVariants = {
  hidden: { opacity: 0, y: 400 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};
const Heading = ({ className, title, text, tag }: HeadingProps) => {
  return (
    <div
      className={`${className} max-w-[50rem] mx-auto mb-12 lg:mb-20 md:text-center`}
    >
      {tag && <TagLine className="mb-4 md:justify-center">{tag}</TagLine>}
      {title && (
        <motion.h2
          className="h2"
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
        >
          {title}
        </motion.h2>
      )}
      {text && <p className="body-2 mt-4 text-n-4">{text}</p>}
    </div>
  );
};

export default Heading;
