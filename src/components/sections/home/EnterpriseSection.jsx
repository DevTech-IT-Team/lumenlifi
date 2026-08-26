import React from 'react';
import { ArrowRight, Building2, Check, Lock, ShieldCheck } from 'lucide-react';
import enterpriseImg from '../../../../public/images/hero/enterprise.png';

const SuperSafeForWork = () => {
  return (
    <>
      {/* Dynamic Style block for custom keyframe animations and utility classes */}
      <style>{`
        .glow-line {
          position: absolute;
          background: linear-gradient(90deg, transparent, rgba(68, 217, 228, 0.5), transparent);
          height: 1px;
          width: 100%;
          z-index: 0;
          opacity: 0.5;
        }

        .glow-line-vertical {
          position: absolute;
          background: linear-gradient(180deg, transparent, rgba(68, 217, 228, 0.5), transparent);
          width: 1px;
          height: 100%;
          z-index: 0;
          opacity: 0.5;
        }

        .node-content {
          position: relative;
          z-index: 10;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }

        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        .animate-float {
          animation: float 6s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        @keyframes shimmer {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }

        .shimmer-effect {
          background: linear-gradient(
            90deg,
            rgba(68, 217, 228, 1) 0%,
            rgba(255, 255, 255, 0.4) 50%,
            rgba(68, 217, 228, 1) 100%
          );
          background-size: 200% 100%;
          animation: shimmer 3s infinite linear;
          color: #00363a !important;
        }
      `}</style>

          <section
            className="page-screen section-wash-white relative w-full flex flex-col items-center justify-center overflow-hidden"
            id="enterprise"
          >
            {/* dot-grid overlay */}
            <div
              className="pointer-events-none absolute inset-0 z-0"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 2px 2px, rgba(0,194,199,0.09) 1px, transparent 0px)',
                backgroundSize: '40px 40px',
              }}
            />

            {/* Connection Lines (Diagrammatic) */}
            <div className="absolute inset-0 z-0 hidden md:block pointer-events-none">
              {/* Center to left */}
              <svg
                className="absolute top-1/2 left-1/4 w-1/4 h-1/4 overflow-visible -translate-y-1/2"
                preserveAspectRatio="none"
                viewBox="0 0 100 100"
              >
                <path
                  className="animate-pulse"
                  d="M100 50 Q 50 50 0 0"
                  fill="none"
                  stroke="rgba(68, 217, 228, 0.3)"
                  strokeWidth="1"
                ></path>
              </svg>

              {/* Center to right */}
              <svg
                className="absolute top-1/2 right-1/4 w-1/4 h-1/4 overflow-visible -translate-y-1/2"
                preserveAspectRatio="none"
                viewBox="0 0 100 100"
              >
                <path
                  className="animate-pulse"
                  d="M0 50 Q 50 50 100 0"
                  fill="none"
                  stroke="rgba(68, 217, 228, 0.3)"
                  strokeWidth="1"
                ></path>
              </svg>

              {/* Center down */}
              <div className="glow-line-vertical left-1/2 top-[40%] h-[30%] -translate-x-1/2"></div>
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center">
              {/* Badge */}
              <div
                className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00C2C7]/10 border border-[#00C2C7]/20 backdrop-blur-md animate-fade-in-up"
                style={{ animationDelay: '0.1s' }}
              >
                <ShieldCheck
                  className="w-4 h-4 text-[#00C2C7]"
                  strokeWidth={2}
                />
                <span className="text-[11px] font-bold text-[#00C2C7] uppercase tracking-widest">
                  Private Walls Protection
                </span>
              </div>

              {/* Headline */}
              <h2
                className="text-[var(--lumen-navy)] text-center mb-16 md:mb-32 max-w-4xl animate-fade-in-up font-semibold"
                style={{
                  animationDelay: '0.2s',
                  fontFamily: "'Geist', sans-serif",
                }}
              >
                Super Safe for Work.
              </h2>

              <div
                className="w-full max-w-7xl mx-auto mb-16 md:mb-24 relative group animate-fade-in-up"
                style={{ animationDelay: '0.4s' }}
              >
                <div className="absolute inset-0 bg-[#00C2C7]/5 blur-3xl rounded-full opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                <div className="relative rounded-lg overflow-hidden border border-[#00C2C7]/20 shadow-2xl animate-float">
                  <img
                    alt="LumenFi Technical Infrastructure Diagram"
                    className="w-full h-auto block"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAbE5M5QZ6caoPhIDT8VRB2hxoDmuWLsX1ZyI1m95bAIrR8Ty61M1otKMrLX5z0srgWiIk9ZdvzcB-jdM_B7rJb4RJLmbSEXBGbJ9kXN74kHNtGympjbJK86NajKT6MiyjG8MbNjeHLblPkiNizTzAsOG9MdxY9HtDxb1kjK7L8qmt6sbI74X6XbYGRftiC87ZCuW3h6swQmEv7EZuojNW6baG816iaf6ZtgTo1Ip3frmddKQUMTv4h4OFyGMQS6ZE9aA"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--lumen-bg)]/60 to-transparent pointer-events-none"></div>
                </div>
              </div>

              {/* Feature Nodes Layout */}
              <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 relative mt-8">
                {/* Node 1: Building */}
                <div
                  className="node-content flex flex-col items-center text-center group animate-fade-in-up hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(68,217,228,0.1)] p-6 rounded-2xl transition-all duration-500"
                  style={{ animationDelay: '0.6s' }}
                >
                  <div className="w-16 h-16 rounded-full bg-[var(--lumen-light)] border border-[var(--lumen-border)] flex items-center justify-center mb-6 shadow-sm group-hover:border-[#00C2C7]/50 group-hover:shadow-[0_0_20px_rgba(68,217,228,0.3)] transition-all duration-500 relative">
                    <Building2 className="w-8 h-8 text-[#00C2C7]" strokeWidth={1.5} />
                    <div className="absolute inset-0 rounded-full border border-[#00C2C7] opacity-0 group-hover:opacity-20 scale-110 group-hover:scale-125 transition-all duration-500"></div>
                  </div>
                  <h3
                    className="text-[var(--lumen-navy)] mb-3 font-semibold"
                    style={{ fontFamily: "'Geist', sans-serif" }}
                  >
                    Enterprise Grade
                  </h3>
                  <p className="text-[var(--lumen-muted)] max-w-[280px]">
                    Built to handle high-density office environments with
                    uncompromising stability.
                  </p>
                </div>

                {/* Node 2: Lock */}
                <div
                  className="node-content flex flex-col items-center text-center group md:mt-16 animate-fade-in-up hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(68,217,228,0.1)] p-6 rounded-2xl transition-all duration-500"
                  style={{ animationDelay: '0.8s' }}
                >
                  <div className="w-16 h-16 rounded-full bg-[var(--lumen-light)] border border-[var(--lumen-border)] flex items-center justify-center mb-6 shadow-sm group-hover:border-[#00C2C7]/50 group-hover:shadow-[0_0_20px_rgba(68,217,228,0.3)] transition-all duration-500 relative">
                    <Lock className="w-8 h-8 text-[#00C2C7]" strokeWidth={1.5} />
                    <div className="absolute inset-0 rounded-full border border-[#00C2C7] opacity-0 group-hover:opacity-20 scale-110 group-hover:scale-125 transition-all duration-500"></div>
                  </div>
                  <h3
                    className="text-[var(--lumen-navy)] mb-3 font-semibold"
                    style={{ fontFamily: "'Geist', sans-serif" }}
                  >
                    Air-Gapped Security
                  </h3>
                  <p className="text-[var(--lumen-muted)] max-w-[280px]">
                    Light doesn't penetrate walls. Your data stays physically
                    confined to the room.
                  </p>
                </div>

                {/* Node 3: Shield */}
                <div
                  className="node-content flex flex-col items-center text-center group animate-fade-in-up hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(68,217,228,0.1)] p-6 rounded-2xl transition-all duration-500"
                  style={{ animationDelay: '1.0s' }}
                >
                  <div className="w-16 h-16 rounded-full bg-[var(--lumen-light)] border border-[var(--lumen-border)] flex items-center justify-center mb-6 shadow-sm group-hover:border-[#00C2C7]/50 group-hover:shadow-[0_0_20px_rgba(68,217,228,0.3)] transition-all duration-500 relative">
                    <ShieldCheck className="w-8 h-8 text-[#00C2C7]" strokeWidth={1.5} />
                    <div className="absolute inset-0 rounded-full border border-[#00C2C7] opacity-0 group-hover:opacity-20 scale-110 group-hover:scale-125 transition-all duration-500"></div>
                  </div>
                  <h3
                    className="text-[var(--lumen-navy)] mb-3 font-semibold"
                    style={{ fontFamily: "'Geist', sans-serif" }}
                  >
                    Zero Interference
                  </h3>
                  <p className="text-[var(--lumen-muted)] max-w-[280px]">
                    Immune to radio frequency jamming and overlapping network
                    congestion.
                  </p>
                </div>
              </div>

              {/* Call to Action */}
              <div
                className="mt-20 md:mt-32 animate-fade-in-up"
                style={{ animationDelay: '1.2s' }}
              >
                <button className="group shimmer-effect text-[#00363a] px-8 py-4 rounded-full shadow-[0_0_20px_rgba(68,217,228,0.3)] hover:shadow-[0_0_40px_rgba(68,217,228,0.6)] scale-100 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 relative overflow-hidden">
                  View Enterprise Solutions
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5" />
                </button>
              </div>
            </div>
          </section>
    </>
  );
};

export default SuperSafeForWork;