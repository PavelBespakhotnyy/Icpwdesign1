import { Link } from "react-router";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showSubtitle?: boolean;
  className?: string;
}

export function Logo({ size = "md", showSubtitle = true, className = "" }: LogoProps) {
  const sizes = {
    sm: { icpw: "text-2xl", pw: "text-xs", sub: "text-[10px]" },
    md: { icpw: "text-4xl", pw: "text-sm", sub: "text-xs" },
    lg: { icpw: "text-6xl", pw: "text-lg", sub: "text-sm" },
  };

  const s = sizes[size];

  return (
    <Link to="/" className={`flex flex-col items-center text-center group ${className}`} style={{ textDecoration: 'none' }}>
      {/* Main Logo Mark */}
      <div className="relative">
        <div
          className={`${s.icpw} tracking-[0.12em] select-none`}
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            color: 'var(--icpw-primary)',
            letterSpacing: '0.15em',
            lineHeight: 1,
          }}
        >
          ICPW
        </div>
        {/* Decorative underline */}
        <div
          className="mx-auto mt-2 transition-all duration-500 group-hover:w-full"
          style={{
            height: '2px',
            width: '60%',
            background: 'linear-gradient(90deg, var(--icpw-primary) 0%, var(--icpw-tertiary) 100%)',
            borderRadius: '1px',
          }}
        />
      </div>

      {showSubtitle && (
        <>
          <div
            className={`mt-2 ${s.pw} tracking-[0.3em] uppercase`}
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 500,
              color: 'var(--icpw-on-surface-variant)',
              letterSpacing: '0.3em',
            }}
          >
            Process Work
          </div>
          <div
            className={`mt-1.5 ${s.sub} tracking-wide`}
            style={{
              fontFamily: 'var(--font-body)',
              color: 'var(--icpw-on-surface-variant)',
              opacity: 0.8,
            }}
          >
            Международный Центр Процессуальной Работы
          </div>
          <div
            className={`${s.sub} tracking-wide italic`}
            style={{
              fontFamily: 'var(--font-body)',
              color: 'var(--icpw-tertiary)',
              opacity: 0.7,
            }}
          >
            International Centre of Process Work
          </div>
        </>
      )}
    </Link>
  );
}
