import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Building2, Check, Factory, GraduationCap, Server } from 'lucide-react';
import corporateBoardroomImg from '../../../../public/images/hero/corporate.png';
import manufacturingImg from '../../../../public/images/hero/manufacturing.png';
import datacenterImg from '../../../../public/images/hero/data-centers.png';
import schoolImg from '../../../../public/images/hero/education.png';

const sectors = [
  {
    id: 'corp',
    tab: 'Holographic Boardroom',
    icon: Building2,
    sector: 'Corporate office sectors',
    heading: 'Lumen for Holographic Boardroom',
    desc: 'Make office teamwork better with fast light hubs. Show smooth 3D presentations, share files instantly, and remove messy internet cables from the building.',
    feature: 'Private Walls Protection',
    img: corporateBoardroomImg,
  },
  {
    id: 'factory',
    tab: 'Industrial Floors',
    icon: Factory,
    sector: 'Heavy machinery',
    heading: 'Lumen for Industrial Floors',
    desc: 'Keep factory robots running smoothly without network problems. Light waves never get mixed up by big machines, sending data right where it needs to go.',
    feature: 'Zero radio interference',
    img: manufacturingImg,
  },
  {
    id: 'data',
    tab: 'Next-Gen Data Centers',
    icon: Server,
    sector: 'Optical between racks',
    heading: 'Lumen for Next-Gen Data Centers',
    desc: 'Replace piles of cables with beams of light between server racks. Computer rooms stay cooler and files move much faster.',
    feature: 'Faster core links',
    img: datacenterImg,
  },
  {
    id: 'school',
    tab: 'Smart Campuses',
    icon: GraduationCap,
    sector: 'High-density classrooms',
    heading: 'Lumen for Smart Campuses',
    desc: 'Stop school internet from slowing down when every student goes online. Each light gives a direct connection down to the desk.',
    feature: 'Lag-free classrooms',
    img: schoolImg,
  },
];

export default function EcosystemSection() {
  return (
    <section className="page-screen section-wash-white" id="shop">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <h2 className="lumen-h2 mb-8 text-center sm:mb-10">Made for Businesses</h2>

        <div className="grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {sectors.map((s) => {
            const Icon = s.icon;
            return (
              <article
                key={s.id}
                className="eco-card flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-[0_16px_50px_rgba(13,34,64,0.08)]"
              >
                <div className="relative aspect-[16/10] w-full shrink-0 bg-[#0A192F]">
                  <Image
                    src={s.img}
                    alt={s.heading}
                    fill
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex min-h-0 flex-1 flex-col p-5">
                  <p className="eco-card-kicker inline-flex items-start gap-1.5 text-[11px] font-semibold uppercase tracking-widest text-[var(--lumen-blue)]">
                    <Icon className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                    {s.sector}
                  </p>
                  <h3 className="eco-card-title mt-3">{s.tab}</h3>
                  <p className="eco-card-desc mt-3">{s.desc}</p>
                  <div className="eco-card-chip mt-auto inline-flex items-center gap-2 self-start rounded-full bg-emerald-50 px-3 py-1.5 text-sm font-semibold text-emerald-800">
                    <Check className="h-3.5 w-3.5 shrink-0" />
                    {s.feature}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 h-12 px-8 rounded-full text-white font-semibold text-sm bg-[linear-gradient(90deg,#1A6EBF_0%,#00C2C7_100%)]"
          >
            View Production Catalog
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
