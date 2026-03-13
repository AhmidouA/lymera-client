// src/components/ui/Logo.tsx

type LogoProps = {
  dark: boolean;
  width?: number;
  height?: number;
};

export default function Logo({ dark, width = 160, height = 40 }: LogoProps) {
  const cTop  = dark ? "#D4AF7A" : "#C4A882";
  const cSide = dark ? "#A07850" : "#8B6347";
  const cText = dark ? "#F5EFE6" : "#2C1A0E";
  const cSub  = dark ? "#D4AF7A" : "#8B6347";

  const L = 20;
  const W = 6;
  const cx = 20;
  const cy = 20;

  const ph = `M ${cx},${cy} C ${cx-W/2},${cy-L*0.35} ${cx-W/2},${cy-L*0.65} ${cx},${cy-L} C ${cx+W/2},${cy-L*0.65} ${cx+W/2},${cy-L*0.35} ${cx},${cy} Z`;
  const pb = `M ${cx},${cy} C ${cx-W/2},${cy+L*0.35} ${cx-W/2},${cy+L*0.65} ${cx},${cy+L} C ${cx+W/2},${cy+L*0.65} ${cx+W/2},${cy+L*0.35} ${cx},${cy} Z`;
  const pg = `M ${cx},${cy} C ${cx-L*0.35},${cy-W/2} ${cx-L*0.65},${cy-W/2} ${cx-L},${cy} C ${cx-L*0.65},${cy+W/2} ${cx-L*0.35},${cy+W/2} ${cx},${cy} Z`;
  const pd = `M ${cx},${cy} C ${cx+L*0.35},${cy-W/2} ${cx+L*0.65},${cy-W/2} ${cx+L},${cy} C ${cx+L*0.65},${cy+W/2} ${cx+L*0.35},${cy+W/2} ${cx},${cy} Z`;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 160 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Lymera Beauty Studio"
    >
      {/* Fleur */}
      <path d={ph} fill={cTop}  opacity="0.82" />
      <path d={pb} fill={cTop}  opacity="0.50" />
      <path d={pg} fill={cSide} opacity="0.68" />
      <path d={pd} fill={cSide} opacity="0.44" />
      <circle cx={cx} cy={cy} r="2.1" fill={cSide} />
      <circle cx={cx} cy={cy} r="1.1" fill={cTop}  />

      {/* LYMERA */}
      <text
        x="48" y="24"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="18"
        fontWeight="300"
        fill={cText}
        letterSpacing="4"
      >
        LYMERA
      </text>

      {/* BEAUTY STUDIO */}
      <text
        x="49" y="35"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="6.5"
        fontWeight="300"
        fill={cSub}
        letterSpacing="3.5"
      >
        BEAUTY STUDIO
      </text>
    </svg>
  );
}