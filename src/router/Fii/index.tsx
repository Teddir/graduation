import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "./fii.css";
import { useRef } from "react";
import VW from "../../assets/2.mp4";

gsap.registerPlugin(useGSAP);

export default function Fii() {
  const container = useRef<HTMLInputElement | null>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ delay: 3 });
      const movements = [-100, 300, 150, -300, -90, 100, -250];

      gsap.set("h1", { y: 100 });
      gsap.set(".counter p", { scale: 0 });

      tl.to("h1", {
        y: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.1,
      });

      tl.to(
        ".counter p",
        {
          y: 0,
          scale:1,
          duration: 0.5,
          ease: "power3.out",
        },
        "-=0.5"
      );

      tl.to(".counter p", {
        y: -36,
        duration: 0.5,
        ease: "power3.out",
        delay: 0.5,
      });

      tl.to(".counter p", {
        y: -70,
        duration: 0.5,
        ease: "power3.out",
        delay: 0.5,
      });

      tl.to(".counter p", {
        y: -105,
        duration: 0.5,
        ease: "power3.out",
        delay: 0.75,
      });

      tl.to(
        ".tagline",
        {
          scale: 0,
          opacity: 0,
        },
        "-=4"
      );

      tl.to("h1", {
        fontSize: "25vw",
        duration: 1,
        ease: "power3.out",
      });

      tl.to(
        ".header-item",
        {
          clipPath: "none",
          duration: 0.1,
        },
        "<"
      );

      tl.to(
        ".block",
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          duration: 0.5,
          stagger: {
            amount: 0.5,
            from: "random",
            ease: "power3.out",
          },
        },
        "<"
      );

      movements.forEach((move, index) => {
        tl.to(
          `.h-${index + 1}`,
          {
            y: move,
            duration: 1,
            ease: "power3.out",
          },
          "<"
        );
      });
    },
    { scope: container }
  );

  return (
    <div ref={container} className="containers">
      <nav>
        <div className="logo">
          <a href="https://github.com/ibtihal197" target="_blank">
            IBTIHAL
          </a>
        </div>
        <div className="links">
          <div className="link">
            <a
              href="https://linkedin.com/in/ibtihal-qomariyyah-luthfiyyah-11b3671b7"
              target="_blank"
            >
              LINKEDIN
            </a>
          </div>
          <div className="link">
            <a href="https://instagram.com/ibtihal.ql" target="_blank">
              INSTAGRAM
            </a>
          </div>
        </div>
      </nav>
      <footer>
        <p>&copy;2024</p>
        <p>Selamat Wisuda</p>
      </footer>

      <div className="hero-video">
        <video autoPlay loop muted>
          <source src={VW} type="video/mp4" />
        </video>
      </div>

      <div className="blocks">
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
      </div>

      <div className="header">
        <div className="header-item">
          <div className="header-item-wrapper h-1">
            <h1>I</h1>
          </div>
        </div>
        <div className="header-item">
          <div className="header-item-wrapper h-2">
            <h1>B</h1>
          </div>
        </div>
        <div className="header-item">
          <div className="header-item-wrapper h-3">
            <h1>T</h1>
          </div>
        </div>
        <div className="header-item">
          <div className="header-item-wrapper h-4">
            <h1>I</h1>
          </div>
        </div>
        <div className="header-item">
          <div className="header-item-wrapper h-5">
            <h1>H</h1>
          </div>
        </div>
        <div className="header-item">
          <div className="header-item-wrapper h-6">
            <h1>A</h1>
          </div>
        </div>
        <div className="header-item">
          <div className="header-item-wrapper h-7">
            <h1>L</h1>
          </div>
        </div>
      </div>

      <div className="counter">
        <p>
          3 <br />
          2 <br />1
        </p>
      </div>

      <div className="tagline">
        <p>
          It's time to plant the seeds of hope and a new, brighter future. Be
          bold. Be courageous. Be your best
        </p>
      </div>
    </div>
  );
}
