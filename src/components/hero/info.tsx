import { MotionValue, motion } from "framer-motion";
import { heroIcons } from "../../constants";
import { infoVariants } from "./animation";

interface InfoProps {
  style?: {
    [key: string]: MotionValue<number>;
  };
}

function Info({ style }: InfoProps) {
  return (
    <motion.ul
      className="z-10 hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex"
      style={style}
      variants={infoVariants}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.5 }}
    >
      {heroIcons.map((icon, index) => (
        <li className="p-5" key={index}>
          <img src={icon} width={24} height={25} alt={icon} />
        </li>
      ))}
    </motion.ul>
  );
}

export default Info;
