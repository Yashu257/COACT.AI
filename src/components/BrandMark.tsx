import logoColorOnDark from "../assests/New AI logo/AI logo-01.png";  // green + white  → dark bg
import logoWhite       from "../assests/New AI logo/AI logo-02.png";  // pure white     → dark bg (mono)
import logoBlack       from "../assests/New AI logo/AI logo-03.png";  // pure black     → light bg (mono)
import logoColorLight  from "../assests/New AI logo/AI logo-04.png";  // green + black  → light bg

/**
 * Brand wordmark + icon lockup. One image, no adjacent text needed.
 *
 *  variant  =
 *    "color-dark"  → full-colour (green + white) — best on dark bgs
 *    "white"       → all white — for dark bgs when colour would clash
 *    "black"       → all black — for light bgs (mono)
 *    "color-light" → full-colour (green + black) — best on light bgs
 *
 *  height = render height in px (width auto from the 2.33:1 lockup).
 */
export type BrandVariant = "color-dark" | "white" | "black" | "color-light";

const SRC: Record<BrandVariant, string> = {
  "color-dark":  logoColorOnDark,
  "white":       logoWhite,
  "black":       logoBlack,
  "color-light": logoColorLight,
};

export default function BrandMark({
  variant = "color-light",
  height = 32,
  className = "",
}: {
  variant?: BrandVariant;
  height?: number;
  className?: string;
}) {
  return (
    <img
      src={SRC[variant]}
      alt="COACT AI"
      className={className}
      style={{
        height,
        width: "auto",
        display: "block",
        objectFit: "contain",
      }}
      draggable={false}
    />
  );
}
