import { useRef, useEffect } from "react";
import gsap from "gsap";
import { PhysicsPropsPlugin } from "gsap/PhysicsPropsPlugin";

gsap.registerPlugin(PhysicsPropsPlugin);

export default function BouncingBall() {
  const ballRef = useRef(null);

  useEffect(() => {
    const ball = ballRef.current;

    // basic bounce animation
    gsap.to(ball, {
      duration: 5,
      physicsProps: {
        x: { velocity: 200, acceleration: 0 },        // shoot right
        y: { velocity: -800, acceleration: 800, friction: 0.05 } // go up, fall down
      }
    });
  }, []);

  return (
    <div style={styles.page}>
      <div ref={ballRef} style={styles.ball}></div>
    </div>
  );
}

const styles = {
  page: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    background: "#f0f0f0"
  },
  ball: {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    background: "#3498db",
    position: "relative"
  }
};