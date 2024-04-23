import Notification from "./Notification";
import Cart from "./cart";
import { heroBackground } from "../../assets";
import { useRef } from "react";
import useHeroAnimation from "./useHeroAnimation";
import Info from "./info";

function HeroContainer() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { MainImageRotateX, BoxYAnimation, BoxXAnimation } = useHeroAnimation({
    containerRef,
  });

  return (
    <div
      className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24"
      style={{ perspective: "1000px" }}
      ref={containerRef}
    >
      <Cart rotateX={MainImageRotateX} />

      <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
        <img
          src={heroBackground}
          className="w-full"
          width={1440}
          height={1800}
          alt="hero"
        />
      </div>

      <Info style={{ x: BoxXAnimation }} />

      <Notification
        style={{ y: BoxYAnimation }}
        className="z-10 hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
        title="Code generation"
      />
    </div>
  );
}

export default HeroContainer;
