import { robot } from "../../assets";
import Generating from "../Generating";
import { motion, MotionValue } from "framer-motion";
import { Gradient } from "../design/Hero";
import { cartVariants } from "./animation";

interface ICartProps {
  rotateX: MotionValue<number>;
}

function Cart({ rotateX }: ICartProps) {
  return (
    <motion.div
      className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient"
      style={{ rotateX }}
      variants={cartVariants}
      initial="hidden"
      animate="visible"
      transition={{ type: "spring", damping: 10, stiffness: 100 }}
    >
      <div className="relative bg-n-8 rounded-[1rem]">
        <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />

        <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
          <img
            src={robot}
            className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
            width={1024}
            height={490}
            alt="AI"
          />

          <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" />
        </div>
      </div>
      <Gradient />
    </motion.div>
  );
}

export default Cart;
