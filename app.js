const products = {
  aura: {
    category: "Recovery Bracelet",
    name: "AUREL Aura",
    summary: "A sculptural recovery bracelet for body health, strain, stress, and daily recovery.",
    purpose:
      "Aura reads as a designer bracelet first, then quietly tracks recovery, body load, stress, strain, and health trend signals through hidden inner sensors.",
    detailTitle: "A recovery bracelet with a jewelry-grade body.",
    detailBody:
      "Aura is designed for young health-tech lifestyle fashion: an open bangle with satin ceramic, brushed titanium, a translucent glacier insert, and inner health sensors. It focuses on body health and recovery, so the wearer can understand physical load without wearing a fitness tracker.",
    specs: ["Body recovery index", "Body load and strain trend", "Stress rhythm sensing", "Hidden inner health sensors"],
    price: "$329",
    availability: "Ships in 2-3 weeks",
    optionGroups: [
      {
        label: "Finish",
        options: [
          { label: "Ivory / Lapis", finishKey: "lapis", swatch: "linear-gradient(135deg, #F7F1E6 0 46%, #D8D0C0 46% 62%, #44678E 62% 100%)", preview: "./assets/aura-wrap-ivory-lapis-unified.webp" },
          { label: "Rose / Burgundy", finishKey: "burgundy", swatch: "linear-gradient(135deg, #E8B6A8 0 40%, #B77D76 40% 61%, #6E2532 61% 100%)", preview: "./assets/aura-wrap-rose-burgundy-unified.webp" },
          { label: "Celadon / Champagne", finishKey: "celadon", swatch: "linear-gradient(135deg, #B8C8B4 0 42%, #879E87 42% 62%, #CAA66C 62% 100%)", preview: "./assets/aura-wrap-celadon-champagne.webp" },
        ],
      },
      {
        label: "Size",
        options: [
          { label: "Small", preview: "./assets/aura-signature-worn.webp" },
          { label: "Medium", preview: "./assets/aura-signature-whole.webp" },
          { label: "Large", preview: "./assets/aura-signature-profile.webp" },
        ],
      },
    ],
    defaultOptions: [0, 0],
    accordions: [
      ["Purpose", "Aura is for body health and recovery: recovery index, body load, strain, stress rhythm, and health trend signals in one calm daily readout."],
      ["Design language", "The form borrows from luxury bangles and designer objects: open wrap structure, satin ceramic, brushed titanium, smoke glass, and no visible screen."],
      ["What it does", "It turns recovery, body load, stress, and strain into clear guidance for workout days, late nights, travel, and high-pressure weeks."],
      ["In the box", "AUREL Aura, magnetic charging puck, travel sleeve, sizing card, and setup guide."],
    ],
    render: "./assets/aura-signature-whole.webp",
    renderPosition: "center",
    detailViews: [
      { label: "Whole", src: "@selectedFinish", alt: "AUREL Aura selected recovery bracelet finish", position: "center" },
      {
        label: "Layered Edge",
        alt: "AUREL Aura selected finish sculptural side profile",
        position: "center",
        srcByFinish: {
          lapis: "./assets/aura-wrap-ivory-lapis-layer.webp",
          burgundy: "./assets/aura-wrap-rose-burgundy-layer.webp",
          celadon: "./assets/aura-wrap-celadon-champagne-layer.webp",
        },
      },
      {
        label: "Sensors",
        alt: "AUREL Aura selected finish inner recovery sensors",
        position: "center",
        srcByFinish: {
          lapis: "./assets/aura-wrap-ivory-lapis-sensors.webp",
          burgundy: "./assets/aura-wrap-rose-burgundy-sensors.webp",
          celadon: "./assets/aura-wrap-celadon-champagne-sensors.webp",
        },
      },
      {
        label: "On Wrist",
        alt: "AUREL Aura selected finish worn as a fashion recovery bracelet",
        position: "center",
        srcByFinish: {
          lapis: "./assets/aura-wrap-ivory-lapis-fit.webp",
          burgundy: "./assets/aura-wrap-rose-burgundy-fit.webp",
          celadon: "./assets/aura-wrap-celadon-champagne-fit.webp",
        },
      },
    ],
    demos: [
      {
        label: "Recovery",
        kicker: "Body Recovery",
        title: "Your recovery index is ready for a heavier day.",
        body: "Aura combines heart rhythm, overnight recovery, and body load into one clear recovery signal.",
        metric: "82",
        status: "Recovery index",
        meter: "82%",
        effect: "pulse",
        viewIndex: 2,
      },
      {
        label: "Load",
        kicker: "Body Load",
        title: "Training load is high; recovery time is recommended.",
        body: "The bracelet watches accumulated strain and helps the wearer decide when to push or slow down.",
        metric: "High",
        status: "Body load trend",
        meter: "68%",
        effect: "orbit",
        viewIndex: 0,
      },
      {
        label: "Stress",
        kicker: "Stress Rhythm",
        title: "Stress has stayed elevated for 42 minutes.",
        body: "A subtle pulse suggests a short reset without turning health into an anxious dashboard.",
        metric: "42 min",
        status: "Stress rhythm",
        meter: "56%",
        effect: "pulse",
        viewIndex: 2,
      },
    ],
    defaultView: 0,
    defaultDemo: 0,
    user: "Young wellness, gym, travel, high-pressure work",
    functions: "Recovery index, body load, stress rhythm, strain, health trend",
    benefit: "Body recovery",
    color: "#B7C6D4",
    accent: "#F7F3EA",
  },
  loop: {
    category: "Work Secretary Ring",
    name: "AUREL Loop",
    summary: "A smart ring for reminders, micro-vibration alarms, slides, music, and remote selfies.",
    purpose:
      "Loop turns a ring into a discreet work secretary: it can thank-you-remind, micro-vibrate alarms, turn PPT pages, switch music, and trigger remote selfies without reaching for a phone.",
    detailTitle: "A work secretary ring for quiet control.",
    detailBody:
      "Loop is not another health ring. It is a fashion control ring for work and social creation: reminders, micro-vibration alarms, PPT page turn, music control, and remote selfie gestures are hidden inside a polished ceramic band.",
    specs: ["Micro-vibration alarm", "PPT page turn gesture", "Music control ridge", "Remote selfie trigger"],
    price: "$229",
    availability: "Ships in 1-2 weeks",
    optionGroups: [
      {
        label: "Finish",
        options: [
          { label: "Ink / Champagne", finishKey: "signature", swatch: "linear-gradient(135deg, #1E2428 0 48%, #38464D 48% 64%, #D6B47B 64% 100%)", preview: "./assets/loop-signature-whole.webp" },
          { label: "Sand / Espresso", finishKey: "champagne", swatch: "linear-gradient(135deg, #E8D1A7 0 42%, #C49462 42% 66%, #5B4036 66% 100%)", preview: "./assets/loop-champagne-whole.webp" },
          { label: "Cloud / Gunmetal", finishKey: "smoke", swatch: "linear-gradient(135deg, #DBE1DF 0 42%, #8A9A9A 42% 64%, #364044 64% 100%)", preview: "./assets/loop-smoke-whole.webp" },
        ],
      },
      {
        label: "Ring Size",
        options: [
          { label: "US 6", preview: "./assets/loop-signature-whole.webp" },
          { label: "US 7", preview: "./assets/loop-signature-work.webp" },
          { label: "US 8", preview: "./assets/loop-signature-touch.webp" },
        ],
      },
    ],
    defaultOptions: [0, 1],
    accordions: [
      ["Purpose", "Loop is a work secretary ring: reminder, micro-vibration alarm, PPT page turn, music control, and remote selfie in a discreet band."],
      ["Design language", "A signet-inspired ceramic ring with a flush touch ridge, champagne inner edge, and no visible screen or bulky capsule."],
      ["What it does", "Use tap and slide gestures for thank-you reminders, slide control, music switching, camera shutter, and quiet alarms."],
      ["In the box", "AUREL Loop, compact ring charger, sizing kit, travel sleeve, and gesture guide."],
    ],
    render: "./assets/loop-signature-whole.webp",
    renderPosition: "center",
    detailViews: [
      { label: "Whole", src: "@selectedFinish", alt: "AUREL Loop selected work secretary ring finish", position: "center" },
      {
        label: "At Work",
        alt: "AUREL Loop selected finish worn at a laptop",
        position: "center",
        srcByFinish: {
          signature: "./assets/loop-signature-work.webp",
          champagne: "./assets/loop-champagne-work.webp",
          smoke: "./assets/loop-smoke-work.webp",
        },
      },
      {
        label: "Touch Ridge",
        alt: "AUREL Loop selected finish gesture ridge close view",
        position: "center",
        srcByFinish: {
          signature: "./assets/loop-signature-touch.webp",
          champagne: "./assets/loop-champagne-touch.webp",
          smoke: "./assets/loop-smoke-touch.webp",
        },
      },
      {
        label: "Selfie",
        alt: "AUREL Loop selected finish remote selfie gesture",
        position: "center",
        srcByFinish: {
          signature: "./assets/loop-signature-selfie.webp",
          champagne: "./assets/loop-champagne-selfie.webp",
          smoke: "./assets/loop-smoke-selfie.webp",
        },
      },
    ],
    demos: [
      {
        label: "Reminder",
        kicker: "Thank-you Reminder",
        title: "A quiet vibration reminds you before the follow-up.",
        body: "Loop turns small work promises into subtle reminders, so thank-you notes and follow-ups do not depend on memory.",
        metric: "12:30",
        status: "Micro-vibration alarm",
        meter: "62%",
        effect: "haptic",
        viewIndex: 1,
      },
      {
        label: "Slides",
        kicker: "PPT Control",
        title: "Turn slides with a thumb gesture.",
        body: "A small touch ridge controls PPT page turn, music switching, and other work shortcuts without breaking eye contact.",
        metric: "Next",
        status: "PPT page turn ready",
        meter: "78%",
        effect: "orbit",
        viewIndex: 2,
      },
      {
        label: "Selfie",
        kicker: "Remote Capture",
        title: "Tap once to take the shot.",
        body: "Loop can trigger remote selfies or start/stop media from the ring, useful for travel, content, and group shots.",
        metric: "1 tap",
        status: "Remote selfie armed",
        meter: "72%",
        effect: "haptic",
        viewIndex: 3,
      },
    ],
    defaultView: 0,
    defaultDemo: 0,
    user: "Young professionals, presenters, creators",
    functions: "Reminder, micro-vibration alarm, PPT page turn, music control, remote selfie",
    benefit: "Quiet control",
    color: "#202424",
    accent: "#D9C5A3",
  },
  clip: {
    category: "AI Ear Cuff",
    name: "AUREL Clip",
    summary: "An AI ear cuff for translation, meeting notes, calls, music, and voice summaries.",
    purpose:
      "Clip brings AI communication into a fashion ear cuff: real-time translation, meeting notes, answer calls, music playback, and voice summary without the look of earbuds or hearing aids.",
    detailTitle: "An AI ear cuff for voice, translation, and meetings.",
    detailBody:
      "Clip is a clip-on ear accessory for young urban life. It uses pearl ceramic, titanium, acoustic mesh, and a smoke glass inner curve to support translation, meeting notes, answer calls, music playback, and fast voice summaries while staying clearly fashion-led.",
    specs: ["Real-time translation", "Meeting notes and voice summary", "Answer calls", "Music playback"],
    price: "$269",
    availability: "Ships in 2-3 weeks",
    optionGroups: [
      {
        label: "Finish",
        options: [
          { label: "Pearl / Smoke", finishKey: "signature", swatch: "linear-gradient(135deg, #F5F0E6 0 45%, #BAC4C2 45% 66%, #5B6366 66% 100%)", preview: "./assets/clip-signature-whole.webp" },
          { label: "Champagne / Ivory", finishKey: "champagne", swatch: "linear-gradient(135deg, #F3D7A8 0 42%, #C89861 42% 64%, #F9F3E7 64% 100%)", preview: "./assets/clip-champagne-whole.webp" },
          { label: "Mist / Graphite", finishKey: "smoke", swatch: "linear-gradient(135deg, #CDD7D5 0 42%, #829494 42% 64%, #273034 64% 100%)", preview: "./assets/clip-smoke-whole.webp" },
        ],
      },
      {
        label: "Wear",
        options: [
          { label: "Left ear", preview: "./assets/clip-signature-worn.webp" },
          { label: "Right ear", preview: "./assets/clip-signature-worn.webp" },
          { label: "Pair set", preview: "./assets/clip-signature-whole.webp" },
        ],
      },
    ],
    defaultOptions: [0, 0],
    accordions: [
      ["Purpose", "Clip is for AI communication: real-time translation, meeting notes, answer calls, music playback, and voice summary in one ear cuff."],
      ["Design language", "A crescent ear cuff with pearl ceramic, titanium, smoke glass, acoustic mesh, and no in-ear earbud silhouette."],
      ["What it does", "It listens with permission, translates conversations, summarizes meetings, handles calls, and plays music through a compact fashion accessory."],
      ["In the box", "AUREL Clip, pocket charging case, fit sleeves, acoustic cleaning tool, and AI setup guide."],
    ],
    render: "./assets/clip-signature-whole.webp",
    renderPosition: "center",
    detailViews: [
      { label: "Whole", src: "@selectedFinish", alt: "AUREL Clip selected AI ear cuff finish", position: "center" },
      {
        label: "On Ear",
        alt: "AUREL Clip selected finish worn on ear",
        position: "center",
        srcByFinish: {
          signature: "./assets/clip-signature-worn.webp",
          champagne: "./assets/clip-champagne-worn.webp",
          smoke: "./assets/clip-smoke-worn.webp",
        },
      },
      {
        label: "Acoustic",
        alt: "AUREL Clip selected finish acoustic vent close view",
        position: "center",
        srcByFinish: {
          signature: "./assets/clip-signature-acoustic.webp",
          champagne: "./assets/clip-champagne-acoustic.webp",
          smoke: "./assets/clip-smoke-acoustic.webp",
        },
      },
      {
        label: "Call",
        alt: "AUREL Clip selected finish call and translation interaction",
        position: "center",
        srcByFinish: {
          signature: "./assets/clip-signature-call.webp",
          champagne: "./assets/clip-champagne-call.webp",
          smoke: "./assets/clip-smoke-call.webp",
        },
      },
    ],
    demos: [
      {
        label: "Translate",
        kicker: "Real-time Translation",
        title: "A conversation can become bilingual in the moment.",
        body: "Clip handles real-time translation for travel, study, meetings, and cross-language social moments.",
        metric: "2-way",
        status: "Translation active",
        meter: "80%",
        effect: "wave",
        viewIndex: 3,
      },
      {
        label: "Notes",
        kicker: "Meeting Notes",
        title: "Your meeting becomes a clean voice summary.",
        body: "Clip can capture meeting notes, speaker moments, and follow-up items, then turn them into a short voice summary.",
        metric: "8 notes",
        status: "Meeting notes recording",
        meter: "70%",
        effect: "wave",
        viewIndex: 2,
      },
      {
        label: "Calls",
        kicker: "Calls and Music",
        title: "Answer calls and play music without an earbud look.",
        body: "Clip supports answer calls, music playback, and quick voice commands while keeping the silhouette closer to jewelry.",
        metric: "Call",
        status: "Music playback ready",
        meter: "64%",
        effect: "wave",
        viewIndex: 1,
      },
    ],
    defaultView: 0,
    defaultDemo: 0,
    user: "Travel, meetings, calls, music, city life",
    functions: "Real-time translation, meeting notes, answer calls, music playback, voice summary",
    benefit: "AI communication",
    color: "#BFC7C6",
    accent: "#F4EFE4",
  },
};


// Supplied CMF photographs are the single source for every finish and close-up.
const cmfFinishes = [
  { key: 'olive', label: 'Olive Form', colors: ['#3E4439', '#B9AA8B'], clip: ['#CFCABB', '#34363A'] },
  { key: 'oxblood', label: 'Oxblood / Ivory', colors: ['#583A38', '#BCAA87'], clip: ['#E5DAC8', '#BCAA87'] },
  { key: 'blue-hour', label: 'Blue Hour / Oat', colors: ['#7D8F9B', '#C3C0B9'], loop: ['#303E50', '#C3C0B9'], clip: ['#A7B7C0', '#C3C0B9'] },
];
function cmfImage(productKey, finishKey, viewIndex = 0) {
  const index = finishKey === 'olive' ? viewIndex : 0;
  return `./assets/display-${productKey}-${finishKey}-${index}.webp`;
}
for (const [key, product] of Object.entries(products)) {
  product.optionGroups[0].options = cmfFinishes.map(finish => {
    const colors = finish[key] || finish.colors;
    return { label: finish.label, finishKey: finish.key, swatch: 'linear-gradient(135deg, ' + colors[0] + ' 0 65%, ' + colors[1] + ' 65% 100%)', preview: cmfImage(key, finish.key) };
  });
  product.render = product.optionGroups[0].options[0].preview;
  product.defaultOptions[0] = 0;
  product.detailViews = ['Whole', 'Material', 'Inner Curve', 'Detail'].map((label, index) => ({
    label, alt: product.name + ' ' + label.toLowerCase(), position: 'center',
    srcByFinish: Object.fromEntries(cmfFinishes.map(finish => [finish.key, cmfImage(key, finish.key, index)])),
  }));
  product.optionGroups.slice(1).forEach(group => group.options.forEach(option => { option.preview = product.render; }));
}

const prices = {
  device: {
    aura: "$329",
    loop: "$229",
    clip: "$269",
  },
  bundle: {
    aura: "$389",
    loop: "$279",
    clip: "$319",
  },
};

const isStandaloneProductPage = () => document.body?.dataset.page === "product";

function productDetailUrl(productKey) {
  return `./product.html?product=${encodeURIComponent(productKey)}`;
}

function getRouteProductKey() {
  const queryKey = new URLSearchParams(window.location.search).get("product");
  const hashKey = (window.location.hash || "").replace("#product-", "");
  return products[queryKey] ? queryKey : products[hashKey] ? hashKey : "aura";
}

let pointer = { x: 0.58, y: 0.42 };
const selectedOptions = {};
const galleryState = {
  current: 0,
  target: 0,
  dragging: false,
  moved: false,
  startX: 0,
  startTarget: 0,
  raf: 0,
};

function getProductOptionState(productKey) {
  const product = products[productKey];
  if (!product) return [];
  if (!selectedOptions[productKey]) {
    selectedOptions[productKey] = product.optionGroups?.map((_, index) => product.defaultOptions?.[index] || 0) || [];
  }
  return selectedOptions[productKey];
}

function getSelectedOptionLabels(productKey) {
  const product = products[productKey];
  const state = getProductOptionState(productKey);
  return product?.optionGroups?.map((group, index) => group.options[state[index]]?.label).filter(Boolean) || [];
}

function getSelectedFinishOption(productKey) {
  const product = products[productKey];
  const state = getProductOptionState(productKey);
  const finishIndex = product?.optionGroups?.findIndex((group) => group.label === "Finish") ?? -1;
  if (!product || finishIndex < 0) return null;
  return product.optionGroups[finishIndex]?.options?.[state[finishIndex]] || product.optionGroups[finishIndex]?.options?.[0] || null;
}

function getActiveProductKey() {
  return document.querySelector("[data-product-detail-view]")?.dataset.activeProduct || "aura";
}

function getSelectedVariantPreview(productKey) {
  return getSelectedFinishOption(productKey)?.preview || products[productKey]?.render;
}

function getProductDetailViews(productKey) {
  const product = products[productKey];
  const selectedFinish = getSelectedFinishOption(productKey);
  const finishKey = selectedFinish?.finishKey || selectedFinish?.label?.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  if (finishKey !== "olive") {
    return [{
      label: "Whole",
      src: selectedFinish?.preview || product.render,
      alt: `${product.name} ${selectedFinish?.label || "Selected Finish"} product view`,
      position: product.renderPosition || "center",
    }];
  }
  const detailViews = product?.detailViews?.length
    ? product.detailViews
    : [{ label: "Whole", src: "@selectedFinish", alt: `${product?.name || "AUREL product"} selected finish`, position: product?.renderPosition }];

  return detailViews.map((view, index) => {
    const finishLabel = selectedFinish?.label || "Selected Finish";
    if (view.srcByFinish) {
      return {
        ...view,
        src: view.srcByFinish[finishKey] || view.srcByFinish.default || Object.values(view.srcByFinish)[0],
        alt: `${product.name} ${finishLabel} ${view.label} view`,
      };
    }
    if (view.src !== "@selectedFinish") return view;
    return {
      ...view,
      label: index === 0 ? "Whole" : view.label,
      src: selectedFinish?.preview || product.render,
      alt: `${product.name} ${finishLabel} product view`,
    };
  });
}

function fitCanvas(canvas) {
  const rect = canvas.getBoundingClientRect();
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const width = Math.max(1, Math.floor(rect.width * dpr));
  const height = Math.max(1, Math.floor(rect.height * dpr));
  if (canvas.width !== width || canvas.height !== height) {
    canvas.width = width;
    canvas.height = height;
  }
  const ctx = canvas.getContext("2d");
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  return { ctx, width: rect.width, height: rect.height };
}

function roundRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + width, y, x + width, y + height, radius);
  ctx.arcTo(x + width, y + height, x, y + height, radius);
  ctx.arcTo(x, y + height, x, y, radius);
  ctx.arcTo(x, y, x + width, y, radius);
  ctx.closePath();
}

function drawLeafShadows(ctx, width, height, seed = 0) {
  ctx.save();
  ctx.globalAlpha = 0.18;
  ctx.strokeStyle = "#6C775F";
  ctx.fillStyle = "#6C775F";
  ctx.lineWidth = 1.2;
  const branches = 8;
  for (let b = 0; b < branches; b += 1) {
    const baseX = width * (0.08 + b * 0.13) + Math.sin(seed + b) * 18;
    const baseY = height * (0.08 + (b % 3) * 0.08);
    ctx.beginPath();
    ctx.moveTo(baseX, baseY);
    ctx.bezierCurveTo(baseX + 40, baseY + 90, baseX + 12, baseY + 190, baseX + 80, baseY + 300);
    ctx.stroke();
    for (let i = 0; i < 9; i += 1) {
      const t = i / 9;
      const lx = baseX + 18 + Math.sin(seed + i + b) * 16 + t * 70;
      const ly = baseY + 38 + t * 250;
      ctx.beginPath();
      ctx.ellipse(lx, ly, 12, 4.8, 0.7 + t, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  ctx.restore();
}

function drawBangle(ctx, cx, cy, radius, thickness, options = {}) {
  const metal = options.metal || "#C9A66B";
  const ceramic = options.ceramic || "#F2EEE2";
  const rotation = options.rotation || -0.2;
  const openGap = options.openGap || 0.58;

  ctx.save();
  ctx.translate(cx, cy);
  ctx.rotate(rotation);
  ctx.scale(1.34, 0.66);

  ctx.shadowColor = "rgba(23, 23, 23, 0.34)";
  ctx.shadowBlur = 34;
  ctx.shadowOffsetY = 16;

  const gradient = ctx.createLinearGradient(-radius, -radius, radius, radius);
  gradient.addColorStop(0, "#F6E2A4");
  gradient.addColorStop(0.35, metal);
  gradient.addColorStop(0.58, "#8B6B3E");
  gradient.addColorStop(1, "#F3D997");

  ctx.beginPath();
  ctx.arc(0, 0, radius, openGap, Math.PI * 2 - openGap);
  ctx.lineWidth = thickness * 1.34;
  ctx.lineCap = "round";
  ctx.strokeStyle = gradient;
  ctx.stroke();

  ctx.shadowColor = "transparent";
  ctx.beginPath();
  ctx.arc(0, 0, radius - thickness * 0.05, openGap + 0.24, Math.PI * 2 - openGap - 0.24);
  ctx.lineWidth = Math.max(4, thickness * 0.2);
  ctx.strokeStyle = "rgba(255, 255, 255, 0.72)";
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(0, 0, radius + thickness * 0.02, openGap + 1.06, openGap + 1.96);
  ctx.lineWidth = Math.max(7, thickness * 0.5);
  ctx.strokeStyle = ceramic;
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(0, 0, radius - thickness * 0.28, Math.PI * 1.1, Math.PI * 1.55);
  ctx.lineWidth = Math.max(3, thickness * 0.18);
  ctx.strokeStyle = "rgba(80, 67, 46, 0.32)";
  ctx.stroke();

  for (const angle of [Math.PI * 1.18, Math.PI * 1.31, Math.PI * 1.44]) {
    const sx = Math.cos(angle) * (radius - thickness * 0.22);
    const sy = Math.sin(angle) * (radius - thickness * 0.22);
    ctx.beginPath();
    ctx.arc(sx, sy, Math.max(2.2, thickness * 0.08), 0, Math.PI * 2);
    ctx.fillStyle = "rgba(248, 247, 243, 0.82)";
    ctx.fill();
  }

  const endAngleA = openGap;
  const endAngleB = Math.PI * 2 - openGap;
  for (const angle of [endAngleA, endAngleB]) {
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    const cap = ctx.createRadialGradient(x - 5, y - 5, 2, x, y, thickness * 0.85);
    cap.addColorStop(0, "#FFF4CD");
    cap.addColorStop(0.6, metal);
    cap.addColorStop(1, "#80643A");
    ctx.beginPath();
    ctx.arc(x, y, thickness * 0.64, 0, Math.PI * 2);
    ctx.fillStyle = cap;
    ctx.fill();
  }

  ctx.restore();
}

function drawParametricField(ctx, width, height, tint = "#A7B3A1") {
  ctx.save();
  ctx.globalAlpha = 0.32;
  ctx.strokeStyle = tint;
  ctx.lineWidth = 1;
  for (let i = 0; i < 18; i += 1) {
    const y = height * (0.18 + i * 0.032);
    ctx.beginPath();
    ctx.moveTo(width * 0.08, y);
    for (let x = width * 0.08; x <= width * 0.92; x += 26) {
      const wave = Math.sin(x * 0.012 + i * 0.52) * 18 + Math.cos(i * 0.4) * 8;
      ctx.lineTo(x, y + wave);
    }
    ctx.stroke();
  }
  ctx.restore();
}

function drawArchitecturalProduct(canvas, productKey = "aura") {
  if (!canvas) return;
  const { ctx, width, height } = fitCanvas(canvas);
  ctx.clearRect(0, 0, width, height);

  const background = ctx.createLinearGradient(0, 0, width, height);
  background.addColorStop(0, "#F8F7F3");
  background.addColorStop(0.45, productKey === "loop" ? "#9A927F" : "#D8D4CF");
  background.addColorStop(1, productKey === "clip" ? "#B8C6CC" : "#8C8A7C");
  ctx.fillStyle = background;
  ctx.fillRect(0, 0, width, height);

  drawLeafShadows(ctx, width, height, productKey.length * 0.7);
  drawParametricField(ctx, width, height, productKey === "clip" ? "#7F8790" : "#8F8068");

  const cx = width * 0.5;
  const cy = height * 0.52;

  ctx.save();
  ctx.globalAlpha = 0.32;
  ctx.fillStyle = "#171717";
  ctx.beginPath();
  ctx.ellipse(cx + width * 0.04, height * 0.79, width * 0.28, 32, -0.08, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  if (productKey === "aura") {
    drawBangle(ctx, cx, cy, Math.min(width, height) * 0.24, Math.min(width, height) * 0.052, {
      metal: "#D2AE72",
      ceramic: "#F8F7F3",
      rotation: -0.34,
      openGap: 0.52,
    });
    ctx.save();
    ctx.fillStyle = "rgba(248, 247, 243, 0.86)";
    roundRect(ctx, width * 0.18, height * 0.71, width * 0.64, 54, 27);
    ctx.fill();
    ctx.fillStyle = "#596653";
    ctx.font = "600 13px Manrope, sans-serif";
    ctx.fillText("organic parametric shell", width * 0.25, height * 0.745);
    ctx.restore();
  }

  if (productKey === "loop") {
    ctx.save();
    const glow = ctx.createRadialGradient(cx, cy - 18, 8, cx, cy - 18, width * 0.28);
    glow.addColorStop(0, "rgba(216, 197, 163, 0.72)");
    glow.addColorStop(1, "rgba(216, 197, 163, 0)");
    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, width, height);

    const shell = ctx.createLinearGradient(cx - 120, cy - 120, cx + 120, cy + 120);
    shell.addColorStop(0, "#0F1111");
    shell.addColorStop(0.48, "#343A3A");
    shell.addColorStop(1, "#D9C5A3");
    ctx.fillStyle = shell;
    ctx.beginPath();
    ctx.ellipse(cx, cy, Math.min(width, height) * 0.18, Math.min(width, height) * 0.24, -0.18, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.ellipse(cx, cy, Math.min(width, height) * 0.12, Math.min(width, height) * 0.18, -0.18, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalCompositeOperation = "source-over";
    ctx.strokeStyle = "rgba(255,255,255,0.72)";
    ctx.lineWidth = 3;
    roundRect(ctx, cx - 14, cy - Math.min(width, height) * 0.22, 28, 72, 14);
    ctx.stroke();
    ctx.restore();
  }

  if (productKey === "clip") {
    ctx.save();
    const clipGradient = ctx.createLinearGradient(cx - 120, cy - 160, cx + 120, cy + 140);
    clipGradient.addColorStop(0, "#F7F3EA");
    clipGradient.addColorStop(0.56, "#D8D4CF");
    clipGradient.addColorStop(1, "#7F8790");
    ctx.strokeStyle = clipGradient;
    ctx.lineWidth = 46;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.arc(cx, cy, Math.min(width, height) * 0.2, 0.42, Math.PI * 2 - 0.42);
    ctx.stroke();
    ctx.fillStyle = "#1F2424";
    ctx.beginPath();
    ctx.ellipse(cx + 58, cy + 16, 24, 36, -0.24, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "rgba(184, 198, 204, 0.5)";
    ctx.lineWidth = 2;
    for (let i = 0; i < 3; i += 1) {
      ctx.beginPath();
      ctx.arc(cx, cy, Math.min(width, height) * (0.26 + i * 0.05), -0.26, 0.26);
      ctx.stroke();
    }
    ctx.restore();
  }
}

function drawHeroTexture(ctx, width, height, time) {
  const bg = ctx.createLinearGradient(0, 0, width, height);
  bg.addColorStop(0, "#2C2B25");
  bg.addColorStop(0.42, "#706E61");
  bg.addColorStop(1, "#F0E8D7");
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, width, height);

  const light = ctx.createRadialGradient(width * 0.75, height * 0.28, 20, width * 0.75, height * 0.28, width * 0.7);
  light.addColorStop(0, "rgba(255, 238, 198, 0.62)");
  light.addColorStop(0.42, "rgba(167, 179, 161, 0.22)");
  light.addColorStop(1, "rgba(23, 23, 23, 0)");
  ctx.fillStyle = light;
  ctx.fillRect(0, 0, width, height);

  drawLeafShadows(ctx, width, height, time * 0.0003);

  ctx.save();
  ctx.globalAlpha = 0.55;
  ctx.fillStyle = "#EFE7D9";
  roundRect(ctx, width * 0.58, height * 0.56, width * 0.32, height * 0.18, 8);
  ctx.fill();
  ctx.restore();

  ctx.save();
  ctx.globalAlpha = 0.42;
  ctx.strokeStyle = "#F8F7F3";
  ctx.lineWidth = 1;
  for (let i = 0; i < 12; i += 1) {
    ctx.beginPath();
    const y = height * 0.59 + i * 13;
    ctx.moveTo(width * 0.59, y);
    ctx.lineTo(width * 0.88, y + Math.sin(i) * 4);
    ctx.stroke();
  }
  ctx.restore();
}

function initAurelScene() {
  const canvas = document.querySelector("#aurel-scene");
  if (!canvas) return;
  const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  let heroFrame = 0;

  const sceneIsVisible = () => {
    const rect = canvas.getBoundingClientRect();
    return !document.hidden && rect.bottom > 0 && rect.top < window.innerHeight;
  };

  const drawScene = (time = 0) => {
    const { ctx, width, height } = fitCanvas(canvas);
    drawHeroTexture(ctx, width, height, time);

    const cx = width * (0.7 + (pointer.x - 0.5) * 0.04);
    const cy = height * (0.54 + (pointer.y - 0.5) * 0.03);
    drawBangle(ctx, cx, cy, Math.min(width, height) * 0.22, Math.min(width, height) * 0.038, {
      rotation: -0.42 + Math.sin(time * 0.0007) * 0.025,
      metal: "#C9A66B",
      ceramic: "#F3EFE5",
      openGap: 0.62,
    });

    ctx.save();
    ctx.globalAlpha = 0.26;
    ctx.fillStyle = "#171717";
    ctx.beginPath();
    ctx.ellipse(cx + 16, cy + Math.min(width, height) * 0.18, Math.min(width, height) * 0.26, 28, -0.18, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  };

  const queueHeroFrame = () => {
    if (heroFrame || motionQuery.matches || !sceneIsVisible()) return;
    heroFrame = window.setTimeout(() => {
      heroFrame = 0;
      scheduleAnimationFrame(render);
    }, 42);
  };

  const render = (time) => {
    if (!sceneIsVisible()) return;
    drawScene(time);
    queueHeroFrame();
  };

  syncHeroSceneVisibility = () => {
    if (heroFrame && !sceneIsVisible()) {
      window.clearTimeout(heroFrame);
      heroFrame = 0;
    }
    if (!heroFrame && sceneIsVisible()) queueHeroFrame();
  };

  drawScene(0);
  syncHeroSceneVisibility();
  window.addEventListener("resize", syncHeroSceneVisibility);
  document.addEventListener("visibilitychange", syncHeroSceneVisibility);
}

function drawProductScene(productKey = "aura") {
  const canvas = document.querySelector("#product-canvas");
  if (!canvas) return;
  const { ctx, width, height } = fitCanvas(canvas);
  const product = products[productKey];

  const bg = ctx.createLinearGradient(0, 0, width, height);
  bg.addColorStop(0, "#28261F");
  bg.addColorStop(0.54, "#625D52");
  bg.addColorStop(1, productKey === "clip" ? "#B8C6CC" : "#9A927F");
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, width, height);
  drawLeafShadows(ctx, width, height, productKey.length);

  ctx.save();
  ctx.globalAlpha = 0.54;
  ctx.fillStyle = "#F8F7F3";
  roundRect(ctx, width * 0.12, height * 0.64, width * 0.76, height * 0.16, 8);
  ctx.fill();
  ctx.restore();

  if (productKey === "aura") {
    drawBangle(ctx, width * 0.5, height * 0.45, Math.min(width, height) * 0.24, Math.min(width, height) * 0.048, {
      metal: product.color,
      ceramic: product.accent,
      openGap: 0.58,
      rotation: -0.28,
    });
  }

  if (productKey === "loop") {
    ctx.save();
    const cx = width * 0.5;
    const cy = height * 0.47;
    const glow = ctx.createRadialGradient(cx, cy, 20, cx, cy, width * 0.28);
    glow.addColorStop(0, "rgba(216, 197, 163, 0.7)");
    glow.addColorStop(1, "rgba(216, 197, 163, 0)");
    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = product.color;
    ctx.beginPath();
    ctx.ellipse(cx, cy, 86, 112, -0.16, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.ellipse(cx, cy, 52, 76, -0.16, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalCompositeOperation = "source-over";
    ctx.strokeStyle = product.accent;
    ctx.lineWidth = 4;
    roundRect(ctx, cx - 12, cy - 90, 24, 58, 12);
    ctx.stroke();
    ctx.restore();
  }

  if (productKey === "clip") {
    ctx.save();
    const cx = width * 0.5;
    const cy = height * 0.48;
    ctx.strokeStyle = "#E9E6DD";
    ctx.lineWidth = 42;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.arc(cx, cy, Math.min(width, height) * 0.18, 0.35, Math.PI * 2 - 0.35);
    ctx.stroke();
    ctx.strokeStyle = "#B8C6CC";
    ctx.lineWidth = 18;
    ctx.beginPath();
    ctx.arc(cx, cy, Math.min(width, height) * 0.18, 0.6, Math.PI * 1.4);
    ctx.stroke();
    ctx.fillStyle = "#171717";
    ctx.beginPath();
    ctx.roundRect(cx - 28, cy - 18, 56, 36, 18);
    ctx.fill();
    ctx.restore();
  }

  ctx.save();
  ctx.fillStyle = "rgba(248, 247, 243, 0.86)";
  ctx.font = "600 18px Manrope, sans-serif";
  ctx.fillText(product.name, 28, 42);
  ctx.fillStyle = "rgba(248, 247, 243, 0.68)";
  ctx.font = "14px Manrope, sans-serif";
  ctx.fillText(product.category, 28, 66);
  ctx.restore();
}

function drawAuraBangle() {
  const canvas = document.querySelector("#aura-bangle");
  if (!canvas) return;
  const { ctx, width, height } = fitCanvas(canvas);
  ctx.clearRect(0, 0, width, height);
  drawBangle(ctx, width * 0.52, height * 0.52, Math.min(width, height) * 0.25, Math.min(width, height) * 0.044, {
    metal: "#D2AE72",
    ceramic: "#F8F7F3",
    rotation: -0.36,
    openGap: 0.54,
  });
}

function setGalleryIndex(index, updateProductFromGallery = true) {
  const cards = [...document.querySelectorAll("[data-gallery-card]")];
  if (!cards.length) return;
  galleryState.target = Math.max(0, Math.min(index, cards.length - 1));
  const activeIndex = Math.round(galleryState.target);
  cards.forEach((card, cardIndex) => {
    const active = cardIndex === activeIndex;
    card.classList.toggle("is-active", active);
    card.setAttribute("aria-pressed", active ? "true" : "false");
  });
  const activeCard = cards[activeIndex];
  if (updateProductFromGallery && activeCard?.dataset.product) {
    updateProduct(activeCard.dataset.product, false);
  }
  requestGalleryFrame();
}

function syncGalleryToProduct(productKey) {
  const cards = [...document.querySelectorAll("[data-gallery-card]")];
  const index = cards.findIndex((card) => card.dataset.product === productKey);
  if (index >= 0) setGalleryIndex(index, false);
}

function requestGalleryFrame() {
  if (galleryState.raf) return;
  galleryState.raf = scheduleAnimationFrame(renderCircularGallery);
}

function renderCircularGallery() {
  const gallery = document.querySelector("[data-circular-gallery]");
  const cards = [...document.querySelectorAll("[data-gallery-card]")];
  if (!gallery || !cards.length) return;
  galleryState.raf = 0;

  galleryState.current += (galleryState.target - galleryState.current) * 0.08;
  cards.forEach((card, index) => {
    const offset = index - galleryState.current;
    const abs = Math.abs(offset);
    const x = offset * Math.min(280, Math.max(190, gallery.clientWidth * 0.28));
    const y = Math.pow(abs, 1.32) * 18;
    const rotate = offset * -10;
    const scale = Math.max(0.74, 1 - abs * 0.1);
    const opacity = Math.max(0.35, 1 - abs * 0.22);
    card.style.transform = `translate3d(calc(-50% + ${x}px), ${y}px, ${-abs * 60}px) rotateY(${rotate}deg) scale(${scale})`;
    card.style.opacity = opacity.toFixed(2);
    card.style.zIndex = String(100 - Math.round(abs * 10));
  });

  if (galleryState.dragging || Math.abs(galleryState.target - galleryState.current) > 0.01) {
    requestGalleryFrame();
  }
}

function initCircularGallery() {
  const gallery = document.querySelector("[data-circular-gallery]");
  const cards = [...document.querySelectorAll("[data-gallery-card]")];
  if (!gallery || !cards.length) return;

  cards.forEach((card, index) => {
    card.setAttribute("aria-pressed", index === 0 ? "true" : "false");
    card.addEventListener("click", () => {
      if (galleryState.moved) {
        galleryState.moved = false;
        return;
      }
      setGalleryIndex(index, true);
    });
  });

  const step = (delta) => setGalleryIndex(Math.round(galleryState.target + delta));
  document.querySelector("[data-gallery-prev]")?.addEventListener("click", () => step(-1));
  document.querySelector("[data-gallery-next]")?.addEventListener("click", () => step(1));

  gallery.addEventListener("pointerdown", (event) => {
    galleryState.dragging = true;
    galleryState.moved = false;
    galleryState.startX = event.clientX;
    galleryState.startTarget = galleryState.target;
    gallery.setPointerCapture(event.pointerId);
  });

  gallery.addEventListener("pointermove", (event) => {
    if (!galleryState.dragging) return;
    const distance = event.clientX - galleryState.startX;
    if (Math.abs(distance) > 6) galleryState.moved = true;
    galleryState.target = galleryState.startTarget - distance / 240;
    requestGalleryFrame();
  });

  const stopDrag = () => {
    if (!galleryState.dragging) return;
    galleryState.dragging = false;
    setGalleryIndex(Math.round(galleryState.target));
  };
  gallery.addEventListener("pointerup", stopDrag);
  gallery.addEventListener("pointercancel", stopDrag);

  gallery.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      step(1);
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      step(-1);
    }
    if (event.key === "Home") {
      event.preventDefault();
      setGalleryIndex(0);
    }
  });

  setGalleryIndex(0, false);
  renderCircularGallery();
}

function updateProduct(productKey, syncGallery = true) {
  const product = products[productKey];
  if (!product) return;

  document.querySelectorAll("[data-product]").forEach((button) => {
    const active = button.dataset.product === productKey;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-selected", active ? "true" : "false");
  });

  const map = {
    "[data-product-category]": product.category,
    "[data-product-purpose]": product.summary,
    "[data-product-summary]": product.summary,
    "[data-product-user]": product.user,
    "[data-product-functions]": product.functions,
    "[data-product-benefit]": product.benefit,
  };

  for (const [selector, value] of Object.entries(map)) {
    const element = document.querySelector(selector);
    if (element) element.textContent = value;
  }

  const productName = document.querySelector("[data-product-name]");
  if (productName) {
    productName.textContent = product.name;
    productName.setAttribute("href", productDetailUrl(productKey));
    productName.dataset.productDetailLink = productKey;
  }

  const detailLink = document.querySelector("[data-panel-detail-link]");
  if (detailLink) {
    detailLink.setAttribute("href", productDetailUrl(productKey));
    detailLink.dataset.productDetailLink = productKey;
  }

  updateProductRender(productKey);
  if (syncGallery) syncGalleryToProduct(productKey);
}

function updateProductRender(productKey = "aura") {
  const product = products[productKey];
  if (!product) return;

  const render = document.querySelector("[data-product-render]");
  if (render) {
    render.src = product.render;
    render.alt = `${product.name} actual lifestyle product render`;
    render.style.objectPosition = product.renderPosition || "center";
  }

  const visualLink = document.querySelector("[data-product-visual]");
  if (visualLink) {
    visualLink.setAttribute("href", productDetailUrl(productKey));
    visualLink.dataset.productDetailLink = productKey;
    visualLink.setAttribute("aria-label", `Enter ${product.name} product view`);
  }
}

function updatePricing(mode) {
  const selected = prices[mode] || prices.device;
  Object.entries(selected).forEach(([key, value]) => {
    const element = document.querySelector(`[data-price="${key}"]`);
    if (element) element.textContent = value;
  });
  document.querySelectorAll("[data-price-toggle]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.priceToggle === mode);
  });
}

function closeProductDetail(updateHash = true) {
  if (isStandaloneProductPage()) {
    window.location.assign("./index.html#ecosystem");
    return;
  }
  const detailView = document.querySelector("[data-product-detail-view]");
  const sticky = document.querySelector("[data-sticky-purchase]");
  if (!detailView) return;
  detailView.hidden = true;
  detailView.classList.remove("is-open");
  if (sticky) sticky.hidden = true;
  if (updateHash) {
    history.pushState(null, "", "#ecosystem");
  }
}

let scrollWorkQueued = false;
let syncHeaderOnScroll = () => {};
let syncHeroSceneVisibility = () => {};

function scheduleAnimationFrame(callback) {
  const frame = window.requestAnimationFrame || ((next) => window.setTimeout(next, 16));
  return frame(callback);
}

function scheduleScrollWork() {
  if (scrollWorkQueued) return;
  scrollWorkQueued = true;
  scheduleAnimationFrame(() => {
    scrollWorkQueued = false;
    syncHeaderOnScroll();
    syncStickyPurchaseVisibility();
    if (entranceScrollFallback) revealVisibleAnimations(document);
    syncHeroSceneVisibility();
  });
}

function syncStickyPurchaseVisibility() {
  const sticky = document.querySelector("[data-sticky-purchase]");
  const detailView = document.querySelector("[data-product-detail-view]");
  if (!sticky || !detailView || detailView.hidden) {
    if (sticky) sticky.hidden = true;
    return;
  }
  const rect = detailView.getBoundingClientRect();
  const shouldShow = rect.top < -220 && rect.bottom > window.innerHeight * 0.36;
  sticky.hidden = !shouldShow;
}

let entranceObserver;
let entranceMotionQuery;
let entranceScrollFallback = false;
let entranceFallbackHandler;

const entranceAnimationGroups = [
  { selector: "main > section, .product-detail-view", type: "rise" },
  { selector: ".hero-copy > *, .hero-status", type: "hero" },
  { selector: ".hero-render, .aurel-scene, .product-visual, .detail-visual", type: "scale" },
  { selector: ".section-heading", type: "fade" },
  {
    selector: [
      ".intro-grid > *",
      ".values-strip article",
      ".product-tab",
      ".circular-gallery-shell",
      ".gallery-card",
      ".view-link",
      ".function-demo",
      ".purchase-config",
      ".product-accordions details",
      ".lifestyle-image",
      ".language-comparison article",
      ".pricing-card",
      ".experience-grid > *",
      ".roadmap > *",
      ".site-footer > *",
      "[data-detail-thumbs] > *",
      "[data-option-group] > *",
    ].join(", "),
    type: "rise",
  },
  { selector: ".detail-gallery, .aura-media, .split-section > :first-child", type: "slide-left" },
  { selector: ".detail-copy, .aura-copy, .product-panel, .split-section > :last-child, .bag-drawer", type: "slide-right" },
];

function collectEntranceNodes(root, selector) {
  const scope = root || document;
  const nodes = [];
  if (scope.nodeType === Node.ELEMENT_NODE && scope.matches(selector)) {
    nodes.push(scope);
  }
  scope.querySelectorAll?.(selector).forEach((node) => nodes.push(node));
  return nodes;
}

function revealElement(element) {
  element.classList.add("is-visible");
  entranceObserver?.unobserve(element);
}

function registerEntranceNode(element, type, index) {
  if (!(element instanceof HTMLElement)) return;
  if (!element.dataset.animate) element.dataset.animate = type;
  if (element.dataset.animateReady === "true") return;

  element.dataset.animateReady = "true";
  element.style.setProperty("--reveal-delay", `${Math.min(index, 9) * 65}ms`);

  if (entranceObserver) {
    entranceObserver.observe(element);
    return;
  }

  if (!entranceScrollFallback) {
    revealElement(element);
  }
}

function prepareEntranceAnimations(root = document) {
  entranceAnimationGroups.forEach(({ selector, type }) => {
    collectEntranceNodes(root, selector).forEach((element, index) => {
      registerEntranceNode(element, type, index);
    });
  });
}

function revealVisibleAnimations(root = document) {
  collectEntranceNodes(root, "[data-animate]").forEach((element) => {
    if (element.hidden || element.closest("[hidden]")) return;
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.94 && rect.bottom > window.innerHeight * -0.08) {
      revealElement(element);
    }
  });
}

function refreshEntranceAnimations(root = document) {
  prepareEntranceAnimations(root);
  scheduleAnimationFrame(() => revealVisibleAnimations(root));
}

function resetEntranceAnimations(root = document) {
  collectEntranceNodes(root, "[data-animate]").forEach((element) => {
    element.classList.remove("is-visible");
    entranceObserver?.observe(element);
  });
}

function initEntranceAnimations() {
  entranceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  entranceObserver?.disconnect();
  entranceScrollFallback = false;

  if (!("IntersectionObserver" in window)) {
    entranceObserver = null;
    entranceScrollFallback = true;
    if (!entranceFallbackHandler) {
      entranceFallbackHandler = scheduleScrollWork;
      window.addEventListener("scroll", entranceFallbackHandler, { passive: true });
      window.addEventListener("resize", entranceFallbackHandler);
    }
    refreshEntranceAnimations(document);
    return;
  }

  entranceObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) revealElement(entry.target);
    });
  }, {
    rootMargin: "0px 0px -8% 0px",
    threshold: 0.16,
  });

  refreshEntranceAnimations(document);
  entranceMotionQuery.addEventListener?.("change", () => refreshEntranceAnimations(document));
}

function updateDetailView(productKey, viewIndex = 0) {
  const product = products[productKey];
  const detailView = document.querySelector("[data-product-detail-view]");
  if (!product || !detailView) return;

  const views = getProductDetailViews(productKey);
  viewIndex = Math.max(0, Math.min(viewIndex, views.length - 1));
  const activeView = views[viewIndex] || views[0];
  const detailRender = detailView.querySelector("[data-detail-render]");
  const detailVisual = detailView.querySelector(".detail-visual");
  const thumbs = detailView.querySelector("[data-detail-thumbs]");

  if (detailRender) {
    detailRender.classList.remove("is-swapping");
    void detailRender.offsetWidth;
    detailRender.classList.add("is-swapping");
    detailRender.src = activeView.src;
    detailRender.alt = activeView.alt || `${product.name} actual product render`;
    detailRender.style.objectPosition = activeView.position || product.renderPosition || "center";
  }
  if (detailVisual) {
    detailVisual.dataset.detailKey = productKey;
    detailVisual.dataset.activeView = activeView.label?.toLowerCase() || "product";
  }

  if (thumbs) {
    thumbs.hidden = views.length < 2;
    thumbs.style.display = views.length < 2 ? "none" : "";
    thumbs.innerHTML = views.map((view, index) => `
      <button type="button" class="${index === viewIndex ? "is-active" : ""}" data-view-index="${index}" aria-pressed="${index === viewIndex ? "true" : "false"}">
        <img src="${escapeHtml(view.src)}" alt="" loading="lazy" decoding="async" data-thumb-image />
        <span data-thumb-label>${escapeHtml(view.label)}</span>
      </button>
    `).join("");
    refreshEntranceAnimations(thumbs);
  }
}

function updateVariantPreview(productKey) {
  const product = products[productKey];
  const detailView = document.querySelector("[data-product-detail-view]");
  if (!product || !detailView) return;
  updateDetailView(productKey, 0);
}

function updateFunctionDemo(productKey, demoIndex = 0, syncView = true) {
  const product = products[productKey];
  const detailView = document.querySelector("[data-product-detail-view]");
  if (!product || !detailView) return;

  const demos = product.demos || [];
  const demo = demos[demoIndex] || demos[0];
  if (!demo) return;

  const demoKicker = detailView.querySelector("[data-demo-kicker]");
  const demoTitle = detailView.querySelector("[data-demo-title]");
  const demoBody = detailView.querySelector("[data-demo-body]");
  const demoMetric = detailView.querySelector("[data-demo-metric]");
  const demoStatus = detailView.querySelector("[data-demo-status]");
  const demoMeter = detailView.querySelector("[data-demo-meter]");
  const detailVisual = detailView.querySelector(".detail-visual");
  const demoPanel = detailView.querySelector("[data-function-demo]");

  if (demoKicker) demoKicker.textContent = demo.kicker;
  if (demoTitle) demoTitle.textContent = demo.title;
  if (demoBody) demoBody.textContent = demo.body;
  if (demoMetric) demoMetric.textContent = demo.metric;
  if (demoStatus) demoStatus.textContent = demo.status;
  if (demoMeter) {
    const value = Number.parseFloat(demo.meter || "50");
    demoMeter.style.setProperty("--demo-progress", String(Math.max(0, Math.min(value, 100)) / 100));
  }
  if (detailVisual) detailVisual.dataset.demoEffect = demo.effect || "signal";
  if (demoPanel) demoPanel.dataset.demoEffect = demo.effect || "signal";
  if (syncView && Number.isInteger(demo.viewIndex)) updateDetailView(productKey, demo.viewIndex);

  detailView.querySelectorAll("[data-demo-index]").forEach((button) => {
    const index = Number(button.dataset.demoIndex);
    const option = demos[index];
    button.hidden = !option;
    button.textContent = option?.label || "";
    button.classList.toggle("is-active", index === demoIndex);
    button.setAttribute("aria-pressed", index === demoIndex ? "true" : "false");
  });
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function updatePurchaseUI(productKey) {
  const product = products[productKey];
  if (!product) return;

  const optionState = getProductOptionState(productKey);
  const labels = getSelectedOptionLabels(productKey);
  const configText = labels.join(" / ");

  const availability = document.querySelector("[data-detail-availability]");
  const price = document.querySelector("[data-config-price]");
  const sticky = document.querySelector("[data-sticky-purchase]");
  const stickyName = document.querySelector("[data-sticky-name]");
  const stickyConfig = document.querySelector("[data-sticky-config]");
  const stickyPrice = document.querySelector("[data-sticky-price]");

  if (availability) availability.textContent = product.availability || "Available soon";
  if (price) price.textContent = product.price;
  if (stickyName) stickyName.textContent = product.name;
  if (stickyConfig) stickyConfig.textContent = configText;
  if (stickyPrice) stickyPrice.textContent = product.price;
  syncStickyPurchaseVisibility();

  product.optionGroups?.forEach((group, groupIndex) => {
    const groupLabel = document.querySelector(`[data-option-group-label="${groupIndex}"]`);
    const selectedLabel = document.querySelector(`[data-selected-option="${groupIndex}"]`);
    const row = document.querySelector(`[data-option-group="${groupIndex}"]`);
    if (groupLabel) groupLabel.textContent = group.label;
    if (selectedLabel) selectedLabel.textContent = group.options[optionState[groupIndex]]?.label || "";
    if (!row) return;

    row.innerHTML = group.options.map((option, optionIndex) => {
      const swatch = option.swatch
        ? `<span class="option-swatch" style="--swatch: ${option.swatch}"></span>`
        : "";
      const active = optionIndex === optionState[groupIndex] ? " is-active" : "";
      const pressed = optionIndex === optionState[groupIndex] ? "true" : "false";
      return `<button type="button" class="option-button${active}" data-option-button data-option-group-index="${groupIndex}" data-option-index="${optionIndex}" aria-pressed="${pressed}">${swatch}<span>${option.label}</span></button>`;
    }).join("");
  });

  document.querySelectorAll("[data-accordion-title]").forEach((title) => {
    const index = Number(title.dataset.accordionTitle);
    const item = product.accordions?.[index];
    title.textContent = item?.[0] || "";
    title.closest("details").hidden = !item;
  });

  document.querySelectorAll("[data-accordion-body]").forEach((body) => {
    const index = Number(body.dataset.accordionBody);
    const item = product.accordions?.[index];
    body.textContent = item?.[1] || "";
  });
}

function updateBag(productKey) {
  const product = products[productKey];
  if (!product) return;
  const configText = getSelectedOptionLabels(productKey).join(" / ");
  const bagName = document.querySelector("[data-bag-name]");
  const bagConfig = document.querySelector("[data-bag-config]");
  const bagPrice = document.querySelector("[data-bag-price]");
  const bagImage = document.querySelector("[data-bag-image]");
  const bagNote = document.querySelector("[data-bag-note]");

  if (bagName) bagName.textContent = product.name;
  if (bagConfig) bagConfig.textContent = configText;
  if (bagPrice) bagPrice.textContent = product.price;
  if (bagImage) {
    bagImage.src = getSelectedVariantPreview(productKey);
    bagImage.alt = product.name;
  }
  if (bagNote) bagNote.textContent = `${product.availability}. Includes 2-year warranty and 30-day returns.`;
}

function openBag() {
  const productKey = getActiveProductKey();
  updateBag(productKey);
  const overlay = document.querySelector("[data-bag-overlay]");
  const drawer = document.querySelector("[data-bag-drawer]");
  if (overlay) overlay.hidden = false;
  if (drawer) {
    drawer.hidden = false;
    drawer.setAttribute("aria-hidden", "false");
    scheduleAnimationFrame(() => {
      drawer.classList.add("is-open");
      resetEntranceAnimations(drawer);
      refreshEntranceAnimations(drawer);
    });
  }
}

function closeBag() {
  const overlay = document.querySelector("[data-bag-overlay]");
  const drawer = document.querySelector("[data-bag-drawer]");
  if (overlay) overlay.hidden = true;
  if (drawer) {
    drawer.classList.remove("is-open");
    drawer.setAttribute("aria-hidden", "true");
    window.setTimeout(() => {
      if (!drawer.classList.contains("is-open")) drawer.hidden = true;
    }, 220);
  }
}

function scrollProductDetailIntoView(detailView) {
  const prefersReducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
  const behavior = prefersReducedMotion ? "auto" : "smooth";

  scheduleAnimationFrame(() => {
    scheduleAnimationFrame(() => {
      detailView.scrollIntoView({ behavior, block: "start" });

      window.setTimeout(() => {
        const top = detailView.getBoundingClientRect().top;
        if (Math.abs(top) > 120) {
          detailView.scrollIntoView({ behavior: "auto", block: "start" });
        }
      }, prefersReducedMotion ? 80 : 560);
    });
  });
}

function openProductDetail(productKey, shouldScroll = true) {
  const product = products[productKey];
  const detailView = document.querySelector("[data-product-detail-view]");
  if (!product || !detailView) return;

  updateProduct(productKey);
  detailView.dataset.activeProduct = productKey;

  const detailCategory = detailView.querySelector("[data-detail-category]");
  const detailTitle = detailView.querySelector("[data-detail-title]");
  const detailBody = detailView.querySelector("[data-detail-body]");

  if (detailCategory) detailCategory.textContent = `${product.name} Detail`;
  if (isStandaloneProductPage()) document.title = `${product.name} | AUREL`;
  if (detailTitle) detailTitle.textContent = product.detailTitle;
  if (detailBody) detailBody.textContent = product.detailBody;

  detailView.querySelectorAll("[data-detail-spec]").forEach((item) => {
    const index = Number(item.dataset.detailSpec);
    item.textContent = product.specs[index] || "";
    item.hidden = !product.specs[index];
  });

  updateDetailView(productKey, product.defaultView || 0);
  updateFunctionDemo(productKey, product.defaultDemo || 0, false);
  updatePurchaseUI(productKey);

  detailView.hidden = false;
  detailView.classList.add("is-open");
  resetEntranceAnimations(detailView);
  refreshEntranceAnimations(detailView);
  syncStickyPurchaseVisibility();
  if (shouldScroll) {
    scrollProductDetailIntoView(detailView);
  }
}

function syncProductRoute() {
  const hashKey = (window.location.hash || "").replace("#product-", "");
  if (isStandaloneProductPage()) {
    openProductDetail(getRouteProductKey(), false);
    return;
  }
  if (products[hashKey]) {
    window.location.replace(productDetailUrl(hashKey));
    return;
  }
  if (!products[hashKey]) {
    closeProductDetail(false);
    return;
  }
}

function initInteractions() {
  const header = document.querySelector("[data-header]");
  const nav = document.querySelector("[data-nav]");
  const navToggle = document.querySelector("[data-nav-toggle]");

  syncHeaderOnScroll = () => {
    header?.classList.toggle("is-solid", window.scrollY > 40);
  };

  window.addEventListener("scroll", scheduleScrollWork, { passive: true });
  window.addEventListener("resize", scheduleScrollWork);
  syncHeaderOnScroll();
  syncStickyPurchaseVisibility();

  navToggle?.addEventListener("click", () => {
    const open = nav?.classList.toggle("is-open");
    navToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
  });

  nav?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => nav.classList.remove("is-open"));
  });

  document.querySelectorAll("[data-product]").forEach((button) => {
    button.addEventListener("click", () => updateProduct(button.dataset.product));
  });

  document.querySelectorAll("[data-product-detail-link]").forEach((link) => {
    link.addEventListener("click", (event) => {
      const key = link.dataset.productDetailLink || link.getAttribute("href")?.replace("#product-", "");
      if (!products[key]) return;
      event.preventDefault();
      window.location.assign(productDetailUrl(key));
    });
  });

  document.querySelector("[data-detail-back]")?.addEventListener("click", () => {
    closeProductDetail(true);
    document.querySelector("#ecosystem")?.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  document.addEventListener("click", (event) => {
    const viewButton = event.target.closest("[data-view-index]");
    if (viewButton) {
      const detailView = document.querySelector("[data-product-detail-view]");
      const key = detailView?.dataset.activeProduct || "aura";
      updateDetailView(key, Number(viewButton.dataset.viewIndex));
      return;
    }

    const demoButton = event.target.closest("[data-demo-index]");
    if (demoButton) {
      const detailView = document.querySelector("[data-product-detail-view]");
      const key = detailView?.dataset.activeProduct || "aura";
      updateFunctionDemo(key, Number(demoButton.dataset.demoIndex));
      return;
    }

    const optionButton = event.target.closest("[data-option-button]");
    if (optionButton) {
      const key = getActiveProductKey();
      const product = products[key];
      const groupIndex = Number(optionButton.dataset.optionGroupIndex);
      const optionIndex = Number(optionButton.dataset.optionIndex);
      const state = getProductOptionState(key);
      state[groupIndex] = optionIndex;
      updatePurchaseUI(key);
      const group = product?.optionGroups?.[groupIndex];
      if (group?.label === "Finish") updateVariantPreview(key);
      return;
    }

    if (event.target.closest("[data-add-to-bag]")) {
      openBag();
      return;
    }

    if (event.target.closest("[data-close-bag]") || event.target.closest("[data-bag-overlay]")) {
      closeBag();
    }
  });

  document.querySelectorAll("[data-price-toggle]").forEach((button) => {
    button.addEventListener("click", () => updatePricing(button.dataset.priceToggle));
  });

  window.addEventListener("pointermove", (event) => {
    pointer = {
      x: event.clientX / Math.max(window.innerWidth, 1),
      y: event.clientY / Math.max(window.innerHeight, 1),
    };
  }, { passive: true });

  window.addEventListener("resize", () => {
    updateProductRender(document.querySelector(".product-tab.is-active")?.dataset.product || "aura");
    drawAuraBangle();
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeBag();
  });

  window.addEventListener("hashchange", syncProductRoute);
}

document.addEventListener("DOMContentLoaded", () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }
  initEntranceAnimations();
  initInteractions();
  initCircularGallery();
  initAurelScene();
  updateProduct(getRouteProductKey());
  updatePricing("device");
  drawAuraBangle();
  syncProductRoute();
  refreshEntranceAnimations(document);
});
