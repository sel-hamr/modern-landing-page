import { useScroll, useTransform } from "framer-motion";

interface IUseHeroAnimationProps {
  containerRef: React.MutableRefObject<HTMLDivElement | null>;
}

function useHeroAnimation({ containerRef }: IUseHeroAnimationProps) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["center", "end center"],
  });
  const MainImageRotateX = useTransform(scrollYProgress, [0, 1], [0, 20]);

  const BoxYAnimation = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const BoxXAnimation = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return { MainImageRotateX, BoxYAnimation, BoxXAnimation };
}

export default useHeroAnimation;
