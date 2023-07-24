import React from "react";
import { useSpring, animated } from "react-spring";
// import { animated, useSpring } from "@react-spring/web";

import "./Hero.css";

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const Hero = () => {
  const [props, set] = useSpring({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  });
  return (
    <div className="hero_main_wrapp">
      <div className="hero_base_wrapp">
        <div className="hero_text_wrapp">
          <h1>Get My NFC | NFC Business Card </h1>
          <p>
            This is a digital business card on which you can share your details.
            Create your/business digital profile.
          </p>
          <button>Order Now</button>
        </div>
        <div className="hero_img_wrapp">
          <animated.div
            class="card-hero"
            onMouseMove={({ clientX: x, clientY: y }) =>
              set({ xys: calc(x, y) })
            }
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{ transform: props.xys.interpolate(trans) }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
