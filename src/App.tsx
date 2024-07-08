import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./App.css";
gsap.registerPlugin(useGSAP);

export default function App() {
  const container = useRef<HTMLInputElement | null>(null);
  const circle = useRef<HTMLInputElement | null>(null);
  const { contextSafe } = useGSAP({ scope: container });

  useGSAP(
    () => {
      // use selectors...
      gsap.to(".box", { rotation: "+=360", duration: 3 });

      // or refs...
      gsap.to(circle.current, { rotation: "-=360", duration: 3 });
    },
    { scope: container }
  ); // <-- scope for selector text (optional)

  const onEnter = contextSafe(
    ({ currentTarget }: { currentTarget: HTMLElement }) => {
      gsap.to(currentTarget, { rotation: "+=360" });
    }
  );

  return (
    <div className="App">
      <div ref={container} className="container">
        <div className="box gradient-blue">selector</div>
        <div className="circle gradient-green" ref={circle}>
          Ref
        </div>
      </div>
      <div className="box gradient-blue">selector</div>
      <div className="box gradient-blue" onClick={onEnter}>
        Click Me
      </div>
    </div>
  );
}
