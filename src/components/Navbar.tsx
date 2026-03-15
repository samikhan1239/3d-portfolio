import { useEffect } from "react";
import HoverLinks from "./HoverLinks";
import "./styles/Navbar.css";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export let smoother: ScrollSmoother | null = null;

const Navbar = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.7,
      speed: 1.7,
      effects: true,
      autoResize: true,
      ignoreMobileResize: true,
    });

    smoother.scrollTop(0);
    smoother.paused(true);

    const links = document.querySelectorAll(".header ul a");

    const handleClick = (e: Event) => {
      if (window.innerWidth > 1024) {
        e.preventDefault();

        const target = e.currentTarget as HTMLAnchorElement;
        const section = target.getAttribute("data-href");

        if (section && smoother) {
          smoother.scrollTo(section, true, "top top");
        }
      }
    };

    links.forEach((elem) => {
      elem.addEventListener("click", handleClick);
    });

    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      links.forEach((elem) => {
        elem.removeEventListener("click", handleClick);
      });

      window.removeEventListener("resize", handleResize);

      smoother?.kill();
    };
  }, []);

  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          SK
        </a>

        <a
          href="mailto:samikhan10902@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          samikhan10902@gmail.com
        </a>

        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>

          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>

          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;