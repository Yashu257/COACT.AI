import { useNavigate } from "react-router-dom";
import {
  PlatformCardData,
  enterpriseCards,
  allCards,
  coactProductCards,
} from "../../data/home";

/** Plain card-grid overlay (no animation) with hover-zoom highlight. */
function SimpleCardOverlay({
  title,
  cards,
  onClose,
}: {
  title: string;
  cards: PlatformCardData[];
  onClose: () => void;
}) {
  const navigate = useNavigate();

  return (
    <div
      className="fixed inset-0 z-[600] flex flex-col items-center justify-center px-[16px] sm:px-[20px] py-[20px] overflow-y-auto"
      style={{ background: "rgba(4,8,20,0.96)" }}
      onClick={onClose}
    >
      <p
        className="text-[11px] sm:text-[12px] font-[700] tracking-[0.16em] uppercase mb-[24px] sm:mb-[36px] text-center"
        style={{ color: "rgba(124,255,79,0.7)" }}
      >
        {title}
      </p>

      {/* When there are 6 cards we want the top row of 4 to be full-width and
         the bottom 2 to be centred below them. We use a fixed 4-col grid and
         offset the 5th child by one column so cards 5–6 sit in cols 2 & 3.
         On smaller screens it falls back to natural auto-fit wrapping. */}
      <style>{`
        .soc-cards-6 {
          grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
        }
        @media (min-width: 720px) {
          .soc-cards-6 {
            grid-template-columns: repeat(4, minmax(0, 1fr));
          }
          .soc-cards-6 > *:nth-child(5) { grid-column-start: 2; }
        }
      `}</style>

      <div
        className={`grid gap-[12px] sm:gap-[16px] w-full max-w-[900px] ${cards.length === 6 ? "soc-cards-6" : ""}`}
        style={
          cards.length === 6
            ? undefined
            : { gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))" }
        }
        onClick={(e) => e.stopPropagation()}
      >
        {cards.map((card) => (
          <button
            key={card.name}
            onClick={() => {
              onClose();
              navigate(card.route);
            }}
            className="text-left rounded-[16px] p-[24px] cursor-pointer"
            style={{
              background: "#0d1b2e",
              border: `1px solid ${card.color}40`,
              transition: "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.transform = "scale(1.06)";
              el.style.boxShadow = `0 24px 60px rgba(0,0,0,0.5), 0 0 0 1px ${card.color}`;
              el.style.borderColor = card.color;
              el.style.zIndex = "10";
              el.style.position = "relative";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.transform = "scale(1)";
              el.style.boxShadow = "none";
              el.style.borderColor = `${card.color}40`;
              el.style.zIndex = "0";
            }}
          >
            <div style={{ fontSize: 32, marginBottom: 14 }}>{card.icon}</div>
            <div style={{ color: "#fff", fontWeight: 700, fontSize: 16, marginBottom: 12 }}>
              {card.name}
            </div>
            <div style={{ color: card.color, fontWeight: 800, fontSize: 28, lineHeight: 1 }}>
              {card.stat}
            </div>
            <div
              style={{
                color: "rgba(255,255,255,0.4)",
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginTop: 4,
              }}
            >
              {card.statLabel}
            </div>
            <div style={{ marginTop: 16, color: card.color, fontSize: 12, fontWeight: 700 }}>
              Explore →
            </div>
          </button>
        ))}
      </div>

      <p className="text-[11px] text-white/25 mt-[32px] tracking-[0.08em]">
        Click a card to open · Click anywhere else to close
      </p>
    </div>
  );
}

export function EnterpriseCardFan({ onClose }: { onClose: () => void }) {
  return <SimpleCardOverlay title="AI Enterprise Solutions" cards={enterpriseCards} onClose={onClose} />;
}

export function AllCardsOverlay({ onClose }: { onClose: () => void }) {
  return <SimpleCardOverlay title="All Platforms" cards={allCards} onClose={onClose} />;
}

export function CoactProductCardFan({ onClose }: { onClose: () => void }) {
  return <SimpleCardOverlay title="COACT Products" cards={coactProductCards} onClose={onClose} />;
}
