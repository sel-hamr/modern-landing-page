import Button from "../Button";
import { curve } from "../../assets";
import { motion } from "framer-motion";

const item = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const image = {
  hidden: { opacity: 0, x: "-100%" },
  visible: { opacity: 1, x: 0 },
};

function Intro() {
  return (
    <motion.div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
      <motion.h1
        className="h1 mb-6"
        variants={item}
        initial="hidden"
        animate="visible"
      >
        Explore the Possibilities of&nbsp;AI&nbsp;Chatting with {` `}
        <span className="inline-block relative">
          Brainwave{" "}
          <span className="absolute top-full left-0 w-full xl:-mt-2 overflow-hidden">
            <motion.img
              src={curve}
              variants={image}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.6 }}
              width={624}
              height={28}
              alt="Curve"
            />
          </span>
        </span>
      </motion.h1>
      <motion.p
        className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8"
        variants={item}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.2 }}
      >
        Unleash the power of AI within Brainwave. Upgrade your productivity with
        Brainwave, the open AI chat app.
      </motion.p>
      <motion.div
        variants={item}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.4 }}
      >
        <Button href="/pricing" white>
          Get started
        </Button>
      </motion.div>
    </motion.div>
  );
}

export default Intro;
