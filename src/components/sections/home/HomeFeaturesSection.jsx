import Image from 'next/image';
import { motion } from 'framer-motion';
import gamingImg from '../../../../public/images/hero/gaming.png';
import streamingImg from '../../../../public/images/hero/streaming.png';
import infiniteDevicesImg from '../../../../public/images/hero/infinite.png';
import invisibleInfraImg from '../../../../public/images/hero/invisible.png';

const premiumShowcase = [
  {
    title: 'Zero-Lag Gaming',
    subtitle: 'Say goodbye to lag spikes',
    desc: 'Normal Wi-Fi bounces waves around the house, which causes lag and ruins your games. LiFi sends a straight beam of light to your device so your moves happen instantly. It is faster than plugging a cable into the wall.',
    img: gamingImg,
    badge: 'Pure Light Connection',
    accent: 'var(--lumen-cyan)',
  },
  {
    title: 'Smooth 4K & 8K Streaming',
    subtitle: 'No more buffering videos',
    desc: 'Every single light bulb sends its own fast internet beam. This means you can watch high-quality videos in the living room while someone else downloads a huge game upstairs, without anyone slowing down.',
    img: streamingImg,
    badge: 'Ultra-Fast Signal',
    accent: 'var(--lumen-teal)',
  },
  {
    title: 'Connect Countless Devices',
    subtitle: 'No network overload',
    desc: "Too many smart devices can easily slow down normal Wi-Fi. With LiFi's massive speed, you can connect hundreds of smart gadgets in one room and your internet will never get slow.",
    img: infiniteDevicesImg,
    badge: 'No Signal Jams',
    accent: 'var(--lumen-cyan)',
  },
  {
    title: 'Hidden Network Hardware',
    subtitle: 'Invisible Setup',
    desc: 'Stop hiding ugly routers and big antennas behind your furniture. Our tech integrates the internet directly into your photonic antennas for a seamless, clutter-free connection.',
    img: invisibleInfraImg,
    badge: 'Clean Ceiling Build',
    accent: 'var(--lumen-teal)',
  },
];

export default function HomeFeaturesSection() {
  return (
    <section className="page-screen section-wash-navy home-features">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-10 max-w-3xl text-center sm:mb-20"
        >
          <h2 className="lumen-h2-light text-center">
            WiFi connects your tech.
            <br />
            <span className="text-[var(--lumen-cyan)]">LiFi connects your life.</span>
          </h2>
          <p className="lumen-body-sm-light mt-4 [word-spacing:0.45em]">
            Leave old radio waves behind and move at the speed of light.
          </p>
        </motion.div>

        <div className="flex flex-col gap-12 sm:gap-24">
          {premiumShowcase.map((item, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.65 }}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-10 lg:gap-16`}
              >
                <div className="w-full lg:w-1/2">
                  <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-[#0D2240] group">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      loading="lazy"
                      sizes="(max-width: 1024px) 100vw, 600px"
                      className="object-contain w-full h-full p-2 transition-transform duration-500 group-hover:scale-[1.01]"
                    />
                  </div>
                </div>

                <div className="features-card-copy w-full lg:w-1/2 flex flex-col">
                  <span className="features-card-kicker font-mono font-bold tracking-widest uppercase mb-2" style={{ color: item.accent }}>
                    {item.subtitle}
                  </span>
                  <h3 className="lumen-h3-light mb-4">{item.title}</h3>
                  <p className="lumen-body-sm-light">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
