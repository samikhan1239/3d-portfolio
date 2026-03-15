import { useEffect, useState } from "react";
import "./styles/Loading.css";
import { useLoading } from "../context/LoadingProvider";
import Marquee from "react-fast-marquee";

const Loading = ({ percent }: { percent: number }) => {
  const { setIsLoading } = useLoading();
  const [loaded, setLoaded] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  /* ---------- Matrix Effect ---------- */

  useEffect(() => {
    const canvas = document.getElementById("matrix") as HTMLCanvasElement;
    if (!canvas) return;

    const ctx = canvas.getContext("2d")!;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const letters =
      "アカサタナハマヤャラワ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const fontSize = 16;
    const columns = canvas.width / fontSize;

    const drops: number[] = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    const draw = () => {
      ctx.fillStyle = "rgba(2,6,23,0.08)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#00ffaa";
      ctx.font = fontSize + "px monospace";

      for (let i = 0; i < drops.length; i++) {
        const text =
          letters[Math.floor(Math.random() * letters.length)];

        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (
          drops[i] * fontSize > canvas.height &&
          Math.random() > 0.975
        ) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33);

    return () => clearInterval(interval);
  }, []);

  /* ---------- Loading Logic (UNCHANGED) ---------- */

  if (percent >= 100 && !loaded) {
    setTimeout(() => {
      setLoaded(true);
      setTimeout(() => {
        setIsLoaded(true);
      }, 900);
    }, 600);
  }

  useEffect(() => {
    import("./utils/initialFX").then((module) => {
      if (isLoaded) {
        setTimeout(() => {
          module.initialFX?.();
          setIsLoading(false);
        }, 900);
      }
    });
  }, [isLoaded]);

  return (
    <>
      {/* MATRIX BACKGROUND */}
      <canvas id="matrix" className="matrix-bg"></canvas>

      {/* HEADER */}
      <div className="loading-header">
        <span className="loader-title">SAM KHAN</span>
      </div>

      {/* MAIN LOADER */}
      <div className="loading-screen">
        <div className="loading-wrap">
          <div className="loading-content">
            INITIALIZING AI SYSTEM
            <span>{percent}%</span>
          </div>

          <div className="loading-bar">
            <div
              className="loading-progress"
              style={{ width: `${percent}%` }}
            />
          </div>

          <div className="loading-content2">
            FULL STACK • AI/ML ENGINEER
          </div>
        </div>

        {/* MARQUEE */}
        <div className="loading-marquee">
          <Marquee speed={80}>
            <span>FULL STACK DEVELOPER</span>
            <span>AI / ML ENGINEER</span>
            <span>SOFTWARE ENGINEER</span>
            <span>NEXT.JS • NODE • AI</span>
          </Marquee>
        </div>
      </div>
    </>
  );
};

export default Loading;

/* ---------- PROGRESS FUNCTION (UNCHANGED) ---------- */

export const setProgress = (setLoading: (value: number) => void) => {
  let percent: number = 0;

  let interval = setInterval(() => {
    if (percent <= 50) {
      let rand = Math.round(Math.random() * 5);
      percent = percent + rand;
      setLoading(percent);
    } else {
      clearInterval(interval);

      interval = setInterval(() => {
        percent = percent + Math.round(Math.random());
        setLoading(percent);

        if (percent > 91) {
          clearInterval(interval);
        }
      }, 2000);
    }
  }, 100);

  function clear() {
    clearInterval(interval);
    setLoading(100);
  }

  function loaded() {
    return new Promise<number>((resolve) => {
      clearInterval(interval);

      interval = setInterval(() => {
        if (percent < 100) {
          percent++;
          setLoading(percent);
        } else {
          resolve(percent);
          clearInterval(interval);
        }
      }, 2);
    });
  }

  return { loaded, percent, clear };
};