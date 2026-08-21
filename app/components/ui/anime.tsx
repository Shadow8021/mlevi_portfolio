import React from "react";

const nodes = [
  { x: 18, y: 20 },
  { x: 50, y: 9 },
  { x: 82, y: 20 },
  { x: 95, y: 50 },
  { x: 82, y: 80 },
  { x: 50, y: 91 },
  { x: 18, y: 80 },
  { x: 5, y: 50 },
];

export default function NetworkAnimation() {
  return (
    <section className="relative mx-auto flex h-[260px] w-full max-w-[560px] items-center justify-center overflow-hidden sm:h-[300px] lg:h-[340px]">
      
      {/* Halo général */}
      <div className="absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-700/10 blur-[80px] sm:h-[260px] sm:w-[260px]" />

      <div className="relative h-full w-full max-w-[520px]">

        {/* =========================
            CONNEXIONS
        ========================== */}
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          {nodes.map((node, index) => (
            <g key={index}>
              {/* Ligne normale */}
              <line
                x1="50"
                y1="50"
                x2={node.x}
                y2={node.y}
                className="network-line"
              />

              {/* Flux lumineux */}
              <line
                x1="50"
                y1="50"
                x2={node.x}
                y2={node.y}
                className="network-flow"
                style={{
                  animationDelay: `${index * 0.35}s`,
                }}
              />
            </g>
          ))}
        </svg>

        {/* =========================
            NŒUDS EXTÉRIEURS
        ========================== */}
        {nodes.map((node, index) => (
          <div
            key={index}
            className="absolute z-10"
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <div className="node-wrapper">
              <div className="node">
                <div className="node-dot" />
              </div>
            </div>
          </div>
        ))}

        {/* =========================
            CENTRE
        ========================== */}
        <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
          
          {/* Glow */}
          <div className="absolute inset-[-45px] rounded-[35px] bg-violet-700/20 blur-[35px]" />

          {/* Bloc central */}
          <div className="central-card relative flex h-[110px] w-[110px] items-center justify-center rounded-[27px] border border-violet-600 bg-[#09090d] shadow-[0_0_35px_rgba(109,40,217,0.35)] sm:h-[120px] sm:w-[120px]">
            
            {/* Icon Layers */}
            <svg
              width="58"
              height="58"
              viewBox="0 0 58 58"
              fill="none"
              className="relative z-10"
            >
              <path
                d="M29 10L49 21L29 32L9 21L29 10Z"
                stroke="#5B21FF"
                strokeWidth="3"
                strokeLinejoin="round"
              />

              <path
                d="M9 29L29 40L49 29"
                stroke="#5B21FF"
                strokeWidth="3"
                strokeLinejoin="round"
              />

              <path
                d="M9 37L29 48L49 37"
                stroke="#5B21FF"
                strokeWidth="3"
                strokeLinejoin="round"
              />
            </svg>

            {/* Pulse */}
            <div className="absolute inset-0 rounded-[27px] border border-violet-500/50 central-pulse" />
          </div>
        </div>
      </div>

      {/* Animation CSS */}
      <style>{`
        .network-line {
          stroke: rgba(255, 255, 255, 0.10);
          stroke-width: 0.35;
        }

        .network-flow {
          stroke: #5425ff;
          stroke-width: 0.55;
          stroke-linecap: round;

          stroke-dasharray: 4 100;
          stroke-dashoffset: 100;

          filter:
            drop-shadow(0 0 2px #5425ff)
            drop-shadow(0 0 5px rgba(84, 37, 255, 0.8));

          animation: flow 2.8s linear infinite;
        }

        @keyframes flow {
          0% {
            stroke-dashoffset: 105;
            opacity: 0;
          }

          10% {
            opacity: 1;
          }

          50% {
            opacity: 1;
          }

          90% {
            opacity: 1;
          }

          100% {
            stroke-dashoffset: 0;
            opacity: 0;
          }
        }

        .node-wrapper {
          position: relative;
        }

        .node {
          width: 60px;
          height: 60px;

          display: flex;
          align-items: center;
          justify-content: center;

          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 17px;

          background:
            radial-gradient(
              circle at center,
              rgba(76, 29, 149, 0.08),
              rgba(7, 7, 10, 0.8)
            );

          box-shadow:
            inset 0 0 20px rgba(255, 255, 255, 0.015);

          animation: nodeFloat 4s ease-in-out infinite;
        }

        .node-dot {
          width: 10px;
          height: 10px;

          border-radius: 50%;

          background: #3416b8;

          box-shadow:
            0 0 5px #4c1dff,
            0 0 12px rgba(76, 29, 255, 0.8),
            0 0 25px rgba(76, 29, 255, 0.35);

          animation: dotPulse 2.2s ease-in-out infinite;
        }

        @keyframes nodeFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-3px);
          }
        }

        @keyframes dotPulse {
          0%,
          100% {
            transform: scale(0.75);
            opacity: 0.55;
          }

          50% {
            transform: scale(1.15);
            opacity: 1;
          }
        }

        .central-pulse {
          animation: centralPulse 2.5s ease-in-out infinite;
        }

        @keyframes centralPulse {
          0%,
          100% {
            opacity: 0.25;
            transform: scale(1);
          }

          50% {
            opacity: 0.7;
            transform: scale(1.035);
          }
        }

        @media (max-width: 640px) {
          .node {
            width: 42px;
            height: 42px;
            border-radius: 13px;
          }

          .node-dot {
            width: 7px;
            height: 7px;
          }

          .central-card {
            width: 90px;
            height: 90px;
            border-radius: 21px;
          }

          .central-card svg {
            width: 45px;
            height: 45px;
          }
        }
      `}</style>
    </section>
  );
}