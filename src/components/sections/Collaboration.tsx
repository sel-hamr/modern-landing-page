import { brainwaveSymbol, check } from "../../assets";
import { collabApps, collabContent, collabText } from "../../constants";
import Button from "../Button";
import Section from "../Section";
import { LeftCurve, RightCurve } from "../design/Collaboration";
import { motion } from "framer-motion";

const variantH2 = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
    },
  },
};
const variantP1 = {
  hidden: { opacity: 0, y: -100 },
  visible: {
    opacity: 1,
    y: 0,
  },
};
const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const items = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Collaboration = () => {
  return (
    <Section crosses>
      <div className="container lg:flex">
        <div className="max-w-[25rem]">
          <motion.h2
            className="h2 mb-4 md:mb-8"
            variants={variantH2}
            initial="hidden"
            whileInView="visible"
          >
            AI Chat App for seamless collaboration
          </motion.h2>

          <motion.ul
            className="max-w-[22rem] mb-10 md:mb-14"
            variants={container}
            initial="hidden"
            whileInView="visible"
          >
            {collabContent.map((item) => (
              <motion.li className="mb-3 py-3" key={item.id} variants={items}>
                <div className="flex items-center">
                  <img src={check} width={24} height={24} alt="check" />
                  <h6 className="body-2 ml-5">{item.title}</h6>
                </div>
                {item.text && (
                  <p className="body-2 mt-3 text-n-4">{item.text}</p>
                )}
              </motion.li>
            ))}
          </motion.ul>
          <motion.div
            variants={variantP1}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.8 }}
          >
            <Button>Try it now</Button>
          </motion.div>
        </div>

        <div className="lg:ml-auto xl:w-[38rem] mt-4">
          <motion.p
            className="body-2 mb-8 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto"
            variants={variantP1}
            initial="hidden"
            whileInView="visible"
          >
            {collabText}
          </motion.p>

          <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100">
            <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
              <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                  <motion.img
                    src={brainwaveSymbol}
                    width={48}
                    height={48}
                    alt="brainwave"
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 12,
                      ease: "linear",
                      repeat: Infinity,
                    }}
                  />
                </div>
              </div>
            </div>

            <motion.ul>
              {collabApps.map((app, index) => (
                <motion.li
                  key={app.id}
                  className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
                    index * 45
                  }`}
                >
                  <div
                    className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${
                      index * 45
                    }`}
                  >
                    <img
                      className="m-auto"
                      width={app.width}
                      height={app.height}
                      alt={app.title}
                      src={app.icon}
                    />
                  </div>
                </motion.li>
              ))}
            </motion.ul>

            <LeftCurve />
            <RightCurve />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Collaboration;
