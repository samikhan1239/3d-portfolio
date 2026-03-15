export const startMatrix = () => {
  const canvas = document.querySelector(".matrix-bg") as HTMLCanvasElement;
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  /* Developer characters */
  const codeChars =
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz{}[]()<>=+-*/%$#@!&|;:.,";

  const fontSize = 16;
  let columns: number;
  let drops: number[] = [];

  const resize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    columns = Math.floor(canvas.width / fontSize);
    drops = new Array(columns).fill(1);
  };

  resize();
  window.addEventListener("resize", resize);

  const draw = () => {
    ctx.fillStyle = "rgba(2,6,23,0.07)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.font = `${fontSize}px monospace`;

    for (let i = 0; i < drops.length; i++) {
      const text =
        codeChars[Math.floor(Math.random() * codeChars.length)];

      /* Neon developer glow */
      ctx.fillStyle = "#00ff9c";
      ctx.shadowBlur = 12;
      ctx.shadowColor = "#00ff9c";

      ctx.fillText(text, i * fontSize, drops[i] * fontSize);

      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }

      drops[i]++;
    }

    requestAnimationFrame(draw);
  };

  draw();
};