export const BLOG_POSTS = [
  {
    slug: 'what-is-lifi',
    category: 'Basics',
    date: 'Oct 1, 2026',
    dateIso: '2026-10-01',
    title: 'What Is LiFi? Internet Through Light Explained',
    metaTitle: 'What Is LiFi? Internet Through Light Explained',
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
        text: "Here's the simple version of how it works, why it's fast, and where it fits next to the WiFi you already have.",
      },
      { type: 'h2', text: 'The one-sentence explanation' },
      {
        type: 'p',
        text: 'LiFi sends internet data by flickering light — invisibly fast, invisibly to you — instead of broadcasting it over radio waves the way WiFi and cellular networks do.',
      },
      { type: 'h2', text: 'How it actually works (no engineering degree required)' },
      { type: 'p', text: 'Every LiFi setup has three basic parts:' },
      {
        type: 'ul',
        items: [
          'A light source that transmits. An LED bulb (or a fixture built for it, like a LiFi Lamp) switches on and off millions of times per second. This happens far faster than the human eye can detect — to you, the light just looks steady.',
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
        text: "LiFi is arriving in homes primarily through fixtures that already belong in a room — table lamps, ceiling lights, and dedicated pieces like the LiFi Lamp, an indoor décor lamp with built-in LiFi — so adopting it doesn't mean rewiring your house. The LiFi Lamp comes in four finishes (White, Black, Silver, Gold) and is designed around real rooms: workspace, gaming, home office, vanity, living space, and bedroom. You place the fixture, plug in a receiver on your device, and the room gets a light-speed lane alongside your existing WiFi — including next-gen WiFi 7 for coverage across the rest of your home.",
      },
      { type: 'h2', text: 'Conclusion' },
      {
        type: 'p',
        text: "LiFi isn't science fiction — it's a straightforward idea executed with clever engineering: use light, which is abundant and interference-free, to carry the data that used to be squeezed onto crowded radio waves. It's fast because light has room to move, and it's private because light doesn't wander past your walls.",
      },
      {
        type: 'p',
        text: "You don't need to understand photodiodes or modulation rates to benefit from it. You just need a light in the room — and that's a problem most homes already have solved. Paired with your existing WiFi, a LiFi Lamp gives you a dedicated, light-speed lane exactly where you need it most. It's currently available for preorder, with the option to get notified first if you're not ready to order yet.",
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
            a: 'No. LiFi fixtures like the LiFi Lamp are designed to plug in like any lamp — no new wiring or construction required. You just need a compatible receiver (such as a dongle or puck) connected to your device.',
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
