const PRE_ORDER_URL =
  'https://app.tilled.com/pay/cs_8WrwuiIiMrBieL21ZoLNZ#fidkdWxabmB8Jz8ndW5aR1d1bkgwdTxVYlNhd2tzbjFDMU8xNmZ2TE9WYDNTQEZjRjBkcF9UfH83fEpwSUl1Z2dMbDI8TWlHR2FPUTRsfEx9SFVSYElIdV82b0BWTzRLQDFkTXQzZkJ2UlIzNEg2MX9xTCcpJ2RmZmpwa3FabGEnPydkZmZxWkJpQmlWS1Z3bEtoPHJQMnFwfXJqYScpJ2RmZmpwa3Faa2RoYCc%2FJ0xodWB3bHBoJUJ3anB1J3g%3D';

export const BLOG_POSTS = [
  {
    slug: 'how-does-a-light-bulb-send-internet-data',
    category: 'Basics',
    date: 'Oct 5, 2026',
    dateIso: '2026-10-05',
    title: 'How Does a Light Bulb Send Internet Data?',
    metaTitle: 'How Does a Light Bulb Send Internet Data? | Lumen LiFi',
    metaDescription:
      "Curious how a light bulb sends internet data? Here's the plain-English science behind LiFi: modulation, photodiodes, and light-speed connectivity.",
    metaKeywords:
      'how does LiFi work, light bulb internet data, LiFi modulation, LiFi photodiode, LiFi science explained, how LiFi sends data',
    excerpt:
      "A light bulb's job has always been simple: turn electricity into light so you can see. LiFi gives it a second job — turning electricity into patterns of light so your devices can connect to the internet.",
    readTime: '6 min read',
    image: '/images/blog/how-light-sends-data.png',
    imageAlt: 'How Does a Light Bulb Send Internet Data? The science in plain English',
    sections: [
      {
        type: 'p',
        text: "A light bulb's job has always been simple: turn electricity into light so you can see. [LiFi](/blogs/what-is-lifi) gives it a second job: turning electricity into patterns of light so your devices can connect to the internet. No new wiring, no new bulb shape, just a very fast, very precise flicker doing double duty.",
      },
      {
        type: 'p',
        text: "Here's what's actually happening inside that flicker, explained without the engineering jargon. From the team at [Lumen LiFi](/).",
      },
      { type: 'h2', text: 'Start with something you already know: Morse code' },
      {
        type: 'p',
        text: 'Morse code sends information by turning a signal on and off in patterns: short and long bursts that spell out letters. LiFi works on the exact same principle, just almost unimaginably faster and far more precise.',
      },
      {
        type: 'p',
        text: 'Instead of dots and dashes a human taps out, a LiFi-enabled light source switches on and off millions of times per second, in patterns that represent digital data, the same 1s and 0s your computer already understands. The "message" isn\'t a word; it\'s a stream of binary data: a webpage loading, a video buffering, a file downloading.',
      },
      { type: 'h2', text: "Why you don't see it flickering" },
      {
        type: 'p',
        text: 'Millions of flickers per second is far beyond what the human eye can perceive. The generally accepted threshold for the eye to notice flicker is a few hundred times per second at most. LiFi operates thousands of times faster than that threshold, so the light simply looks steady and constant to you, exactly like a normal lamp, while it\'s quietly transmitting data the whole time.',
      },
      { type: 'h2', text: 'The three steps, in order' },
      {
        type: 'ol',
        items: [
          'Electricity becomes light, and light becomes a code. A LiFi fixture (like the [LiFi Lamp](/lifi-lamp)) takes incoming data and converts it into a rapid on/off switching pattern in its LED. This process is called modulation: think of it as translating digital data into a language made entirely of light intensity.',
          'Light travels through the room. The modulated light leaves the bulb and simply fills the space it\'s lighting. No cables, no dish, no line that needs to be run through a wall. It behaves like ordinary light because, physically, it is ordinary light; it\'s just carrying extra information inside its flicker pattern.',
          'A receiver turns light back into data. A small sensor called a photodiode (built into a receiver device such as a dongle or desktop puck) detects those rapid changes in light intensity and converts them back into the original digital signal. Your laptop or phone then reads that signal exactly like it would read data arriving over WiFi or a cable.',
        ],
      },
      {
        type: 'cta',
        title: 'See the Science in a Lamp',
        text: "The LiFi Lamp from Lumen LiFi turns this exact technology into a piece you'd actually want in your home, available in 4 finishes.",
        label: 'Pre Order the LiFi Lamp →',
        href: PRE_ORDER_URL,
      },
      { type: 'h2', text: 'Why this method can move so much data' },
      {
        type: 'p',
        text: 'Visible light sits on a part of the electromagnetic spectrum that\'s roughly 10,000 times larger than the radio-frequency spectrum WiFi, Bluetooth, and cellular networks all compete for. More available "room" in the spectrum means more data can be encoded into the light\'s flicker pattern without interference from other signals, which is a core reason LiFi can reach very high speeds in ideal, line-of-sight conditions.',
      },
      { type: 'h2', text: "What's actually needed to make this work in a home" },
      {
        type: 'ul',
        items: [
          'A LiFi-enabled light source: a fixture engineered to modulate its LED output, like the [LiFi Lamp](/lifi-lamp), rather than a standard bulb.',
          'A receiver: a small photodiode-based device connected to your laptop, phone, or other equipment, positioned where it has a reasonably clear view of the light.',
          'A line of sight (mostly): since this is light-based, a solid object directly blocking the path between fixture and receiver can interrupt the connection, the same way closing a door blocks a flashlight beam.',
        ],
      },
      {
        type: 'p',
        text: "That's the entire chain: electricity → modulated light → photodiode → data. No part of it requires rewiring your home.",
      },
      { type: 'h2', text: 'Conclusion' },
      {
        type: 'p',
        text: "The science behind LiFi isn't exotic. It's Morse code scaled up to a speed and precision that's invisible to human eyes. A light source switches on and off millions of times per second to encode data, that flickering light travels through the room exactly like ordinary light, and a small receiver decodes it back into the webpage, video, or file you're waiting on. The light bulb was always capable of carrying more than illumination; LiFi just gives it the job.",
      },
      { type: 'h2', text: 'Frequently Asked Questions' },
      {
        type: 'faq',
        items: [
          {
            q: 'Does the light actually flicker, or is that just a metaphor?',
            a: "It's literal, not a metaphor. The LED genuinely switches on and off millions of times per second. The switching is simply so fast that it falls far outside what the human eye can detect, so the light looks perfectly steady to you.",
          },
          {
            q: 'Will LiFi flickering hurt my eyes or trigger headaches?',
            a: "Because the modulation rate is millions of times per second, thousands of times beyond what's needed for the human eye to perceive flicker at all, there's no visible strobing effect to react to; the light simply reads as constant, steady illumination.",
          },
          {
            q: 'Does the room need to be dark for LiFi to work?',
            a: 'No. The data is encoded in rapid intensity changes layered onto the light, not in the room being dark or bright. A LiFi fixture can operate at normal lighting levels while still transmitting data.',
          },
          {
            q: 'What happens if I walk between the lamp and my receiver?',
            a: "Since the connection relies on light reaching the receiver, briefly blocking that path can interrupt the signal, similar to stepping in front of a flashlight beam. This is why LiFi works best as an in-room connection alongside WiFi, which doesn't have this line-of-sight requirement.",
          },
          {
            q: 'Is this the same technology as infrared remote controls?',
            a: "They're related in concept (both use light to send signals), but LiFi uses much higher modulation speeds and operates with visible light fixtures designed to carry significantly more data than a simple infrared remote.",
          },
        ],
      },
    ],
  },
  {
    slug: 'what-is-lifi',
    category: 'Basics',
    date: 'Oct 1, 2026',
    dateIso: '2026-10-01',
    title: 'What Is LiFi? Internet Through Light Explained',
    metaTitle: 'What Is LiFi? | Lumen LiFi',
    metaDescription:
      "LiFi turns light into internet. Discover how light-based connectivity works, why it's fast and private, and how it fits with your home WiFi.",
    metaKeywords:
      'what is LiFi, LiFi explained, light fidelity internet, LiFi vs WiFi, light-based internet, LiFi technology, LiFi meaning, how does LiFi work',
    excerpt:
      "If someone told you your ceiling light could give you faster internet than your router, you'd probably assume it was a gimmick. It isn't. It's called LiFi — Light Fidelity — and it's one of the more practical pieces of future tech that's actually shipping to homes right now.",
    readTime: '8 min read',
    image: '/images/blog/what-is-lifi.png',
    imageAlt: 'What Is LiFi? Internet through light, explained simply',
    sections: [
      {
        type: 'p',
        text: 'If someone told you your ceiling light could give you faster internet than your router, you\'d probably assume it was a gimmick. It isn\'t. It\'s called LiFi — Light Fidelity — and it\'s one of the more practical pieces of "future tech" that\'s actually shipping to homes right now.',
      },
      {
        type: 'p',
        text: "Here's the simple version of [how it works](/blogs/how-does-a-light-bulb-send-internet-data), why it's fast, and where it fits next to the WiFi you already have.",
      },
      { type: 'h2', text: 'The one-sentence explanation' },
      {
        type: 'p',
        text: 'LiFi sends internet data by [flickering light](/blogs/how-does-a-light-bulb-send-internet-data) — invisibly fast, invisibly to you — instead of broadcasting it over radio waves the way WiFi and cellular networks do.',
      },
      { type: 'h2', text: 'How it actually works (no engineering degree required)' },
      { type: 'p', text: 'Every LiFi setup has three basic parts:' },
      {
        type: 'ul',
        items: [
          'A light source that transmits. An LED bulb (or a fixture built for it, like a [LiFi Lamp](/lifi-lamp)) switches on and off millions of times per second. This happens far faster than the human eye can detect — to you, the light just looks steady.',
          'A receiver that decodes. A small photodiode-based receiver — built into a laptop dongle, a desktop puck, or a future built-in chip — reads those light changes and translates them back into data.',
          'A device that connects. Your laptop, phone, or smart TV sees this as a normal internet connection. You browse, stream, and download exactly like you would on WiFi.',
        ],
      },
      {
        type: 'p',
        text: "That's it. No new cables running through your walls, no dish on your roof — just light doing double duty as illumination and a data channel.",
      },
      { type: 'h2', text: 'Why light instead of radio waves?' },
      {
        type: 'p',
        text: "WiFi, Bluetooth, and cellular signals all share the same limited slice of the radio spectrum. In a crowded apartment building, a busy office, or a house full of smart devices, that spectrum gets congested — which is a big reason WiFi slows down when everyone's home and streaming at once.",
      },
      {
        type: 'p',
        text: "Visible light works on a completely different, much larger slice of the spectrum. It isn't fighting your neighbor's router, your microwave, or your Bluetooth speaker for space. That's the core reason LiFi can move data so quickly and consistently.",
      },
      { type: 'h2', text: 'What makes it fast' },
      {
        type: 'p',
        text: 'Because light frequencies are so much higher than radio frequencies, they can carry more data per second without interference. In practical terms, that means LiFi can outperform typical WiFi and even wired fiber connections in the right conditions — especially in a single room where the light source and receiver have a clear line of sight.',
      },
      { type: 'h2', text: 'What makes it private' },
      {
        type: 'p',
        text: "This is the part people find most surprising: light doesn't pass through walls.",
      },
      {
        type: 'p',
        text: "A WiFi signal happily leaks through drywall, floors, and windows — which is convenient for coverage, but also means your network is technically reachable from outside your home. Light stops at the boundary of the room. If your LiFi signal is confined to your living room, someone standing on the sidewalk or in the apartment next door simply can't intercept it — there's no signal there to catch. It's a form of physical security that doesn't require extra software.",
      },
      { type: 'h2', text: 'Is it a replacement for WiFi?' },
      {
        type: 'p',
        text: 'Not exactly — and that\'s the point. Think of it less as "WiFi vs. LiFi" and more as WiFi and LiFi, working together.',
      },
      {
        type: 'ul',
        items: [
          'WiFi is still the right tool for whole-home coverage — it passes through walls, reaches every room, and works with the hundreds of WiFi-only devices already in your house.',
          'LiFi is the right tool for a specific room where you want maximum speed, minimal interference, and an extra layer of physical privacy — a home office, a gaming setup, a media room.',
        ],
      },
      {
        type: 'p',
        text: 'A hybrid setup, where both run side by side, lets you get whole-house coverage and light-speed performance exactly where you need it.',
      },
      { type: 'h2', text: "Where you'll actually encounter LiFi first" },
      {
        type: 'p',
        text: "LiFi is arriving in homes primarily through fixtures that already belong in a room — table lamps, ceiling lights, and dedicated pieces like the [LiFi Lamp](/lifi-lamp), an indoor décor lamp with built-in LiFi — so adopting it doesn't mean rewiring your house. The [LiFi Lamp](/lifi-lamp) comes in four finishes (White, Black, Silver, Gold) and is designed around real rooms: workspace, gaming, home office, vanity, living space, and bedroom. You place the fixture, plug in a receiver on your device, and the room gets a light-speed lane alongside your existing WiFi — including next-gen WiFi 7 for coverage across the rest of your home.",
      },
      { type: 'h2', text: 'Conclusion' },
      {
        type: 'p',
        text: "LiFi isn't science fiction — it's a straightforward idea executed with clever engineering: use light, which is abundant and interference-free, to carry the data that used to be squeezed onto crowded radio waves. It's fast because light has room to move, and it's private because light doesn't wander past your walls.",
      },
      {
        type: 'p',
        text: `You don't need to understand photodiodes or modulation rates to benefit from it. You just need a light in the room — and that's a problem most homes already have solved. Paired with your existing WiFi, a [LiFi Lamp](/lifi-lamp) gives you a dedicated, light-speed lane exactly where you need it most. It's currently available for [preorder](${PRE_ORDER_URL}), with the option to get notified first if you're not ready to order yet.`,
      },
      { type: 'h2', text: 'Frequently Asked Questions' },
      {
        type: 'faq',
        items: [
          {
            q: 'Is LiFi the same as WiFi, just renamed?',
            a: 'No. WiFi uses radio waves to transmit data; LiFi uses rapid, invisible flickers of light. They work differently, have different strengths, and are designed to complement each other rather than replace one another.',
          },
          {
            q: 'Can LiFi work if the lights are off or during the day?',
            a: 'LiFi fixtures use dedicated LEDs that flicker far too fast for the human eye to notice, so the light can run at a level that looks "off" or very dim to you while still transmitting data. Daylight doesn\'t interfere with it either, since the receiver is tuned to the specific signal pattern from the LiFi fixture, not ambient light.',
          },
          {
            q: 'Does LiFi stop working if something blocks the light?',
            a: 'Since LiFi relies on light reaching a receiver, a solid object directly between the two can interrupt the connection — similar to how closing a door blocks a flashlight beam. This is why LiFi works best for in-room use alongside WiFi for whole-home coverage, rather than as a total replacement.',
          },
          {
            q: 'Do I need to rewire my house to use LiFi?',
            a: 'No. LiFi fixtures like the [LiFi Lamp](/lifi-lamp) are designed to plug in like any lamp — no new wiring or construction required. You just need a compatible receiver (such as a dongle or puck) connected to your device.',
          },
          {
            q: 'Is LiFi more secure than WiFi?',
            a: "Light doesn't pass through walls the way radio waves do, so a LiFi signal generally stays confined to the room it's used in. That physical containment makes it harder to intercept from outside the room, which is why it's often described as more private by design.",
          },
        ],
      },
    ],
  },
];

export function getPostBySlug(slug) {
  return BLOG_POSTS.find((post) => post.slug === slug) || null;
}
