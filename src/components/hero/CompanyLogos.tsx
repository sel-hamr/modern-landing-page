import { companyLogos } from "../../constants";
import { motion } from "framer-motion";

const CompanyLogosContainer = {
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

const CompanyLogosItem = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const CompanyLogosTitle = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1 },
};

const CompanyLogos = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <motion.h5
        className="tagline mb-6 text-center text-n-1/50"
        variants={CompanyLogosTitle}
        initial="hidden"
        whileInView="visible"
      >
        Helping people create beautiful content at
      </motion.h5>
      <motion.ul
        className="flex"
        variants={CompanyLogosContainer}
        initial="hidden"
        whileInView="visible"
      >
        {companyLogos.map((logo, index) => (
          <motion.li
            variants={CompanyLogosItem}
            className="flex items-center justify-center flex-1 h-[8.5rem]"
            key={index}
          >
            <img src={logo} width={134} height={28} alt={logo} />
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default CompanyLogos;
