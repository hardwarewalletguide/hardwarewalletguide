export const SITE = {
  name: "Hardware Wallet Guide",
  url: "https://hardwarewalletguide.vercel.app",
  description: "Independent guides to hardware wallets, Ledger devices, wallet software, setup, recovery and security.",
  officialLedger: "https://www.ledger.com/",
  officialStart: "https://www.ledger.com/start",
  officialSupport: "https://support.ledger.com/",
};

export const pages = {
  ledger: {
    title: "Ledger: Hardware Wallets, App, Setup & Security Guide",
    description: "Independent Ledger guide covering hardware wallets, Ledger Wallet (formerly Ledger Live), setup, security, recovery and official support resources.",
    eyebrow: "Ledger hub",
    h1: "Ledger hardware wallets: independent guide",
    intro: "Ledger is a major hardware-wallet ecosystem built around signing transactions with a dedicated device. This independent guide explains the product family, the companion software, safe setup practices and where to use official resources.",
    sections: [
      ["What Ledger is", "A Ledger device is designed to keep private-key operations isolated from an everyday computer or phone. The device confirms sensitive actions on its own screen, while companion software helps users view accounts and prepare transactions."],
      ["Ledger Wallet and the older Ledger Live name", "Ledger has renamed its Ledger Live software experience to Ledger Wallet. People still search for Ledger Live, so this guide keeps both names clear and always sends software downloads to Ledger's official website."],
      ["Before you start", "Buy devices from trusted channels, initialize the device yourself, verify every address and transaction on the hardware screen, and never type a recovery phrase into a website, chat, form or unsolicited app."],
    ],
    faq: [
      ["Is this the official Ledger website?", "No. Hardware Wallet Guide is an independent educational site and is not operated by or affiliated with Ledger."],
      ["Where should I download Ledger software?", "Use Ledger's official website or official support pages. This site does not host Ledger installers."],
      ["Should a support agent ask for my recovery phrase?", "No. Treat any request for a recovery phrase or seed words as a serious warning sign."],
    ],
    cta: ["Open official Ledger website", "https://www.ledger.com/"]
  },
  "ledger-live": {
    title: "Ledger Live: What It Is, Ledger Wallet Rename & Safe Use",
    description: "Learn what Ledger Live is, why Ledger now uses the Ledger Wallet name, and how to use official Ledger software safely.",
    eyebrow: "Software guide",
    h1: "Ledger Live: what changed and how to use it safely",
    intro: "Ledger Live is the long-standing name many users know for Ledger's companion application. Ledger now presents the app as Ledger Wallet, but older searches, bookmarks and conversations still use the Ledger Live name.",
    sections: [
      ["What the app does", "The companion app helps users view supported accounts, prepare transactions, manage device apps and access supported services. Critical approvals should still be verified on the hardware device itself."],
      ["Why the name matters", "Search results may contain both Ledger Live and Ledger Wallet wording. The safest approach is to navigate from Ledger's own site rather than trusting a random download ad or third-party installer."],
      ["Safe-use checklist", "Check the domain before downloading, avoid cracked or repackaged installers, compare transaction details on the device screen and keep your recovery phrase offline."],
    ],
    faq: [["Is Ledger Live discontinued?", "Ledger has shifted the public product name to Ledger Wallet, while Ledger Live remains a familiar legacy search term."],["Can I use a third-party download mirror?", "For safety, use Ledger's official download path instead of third-party mirrors."],["Does this site provide the app?", "No. We only explain the software and link to official Ledger resources."]],
    cta: ["Go to official Ledger setup/download", "https://www.ledger.com/start"]
  },
  "ledger-live-download": {
    title: "Ledger Live Download: Use the Official Ledger Wallet Download",
    description: "Looking for Ledger Live download? Use the official Ledger Wallet download path and follow a simple safety checklist before installing.",
    eyebrow: "Download safety",
    h1: "Ledger Live download: use the official source",
    intro: "If you searched for Ledger Live download, the safest destination is Ledger's own download or setup page. Ledger now uses the Ledger Wallet name for the companion app.",
    sections: [
      ["Avoid unofficial installers", "Do not download wallet software from file-sharing sites, sponsored look-alike domains, chat attachments or unknown mirrors. Wallet software is a high-value target for malware distribution."],
      ["Verify where you are", "Before downloading, check that you reached a genuine Ledger-owned domain. If you arrived from an advertisement or message, manually navigate to Ledger's official site instead."],
      ["After installation", "Connect and initialize your device only when you are confident the software source is legitimate. Never enter recovery words into a desktop or web form."],
    ],
    faq: [["Where is the official Ledger Live download?", "Ledger directs users to its official Ledger Wallet setup/download experience."],["Can I download Ledger software here?", "No. Hardware Wallet Guide does not distribute Ledger software."],["What if a download page asks for my seed phrase?", "Leave the page. A download or support page should not require your recovery phrase."]],
    cta: ["Official Ledger download/setup", "https://www.ledger.com/start"]
  },
  "ledger-wallet": {
    title: "Ledger Wallet: App and Hardware Wallet Ecosystem Guide",
    description: "Understand Ledger Wallet, the companion app formerly known as Ledger Live, and how it works with Ledger hardware wallets.",
    eyebrow: "Wallet ecosystem",
    h1: "Ledger Wallet: app and device ecosystem explained",
    intro: "Ledger Wallet is the current name Ledger uses for its companion crypto app. It works alongside supported Ledger hardware devices while keeping final approval of sensitive actions on the device.",
    sections: [["Software vs hardware", "The app is the interface; the hardware device is the signing environment. Keeping those roles separate helps users understand why on-device verification matters."],["Accounts and transactions", "The app can display accounts and prepare actions, but users should confirm recipient addresses, amounts and prompts directly on the hardware screen."],["Official sources", "Use Ledger's official website for current compatibility, downloads and product-specific instructions, because supported features can change over time."]],
    faq: [["Is Ledger Wallet the same as Ledger Live?", "Ledger Wallet is the newer public name for the companion app previously known as Ledger Live."],["Is Ledger Wallet a hardware device?", "No. It is the software experience used with Ledger devices."],["Where can I check compatibility?", "Check Ledger's official product and support pages for current compatibility information."]],
    cta: ["Visit official Ledger Wallet information", "https://www.ledger.com/start"]
  },
  "ledger-app": {
    title: "Ledger App: Companion Software, Device Apps & Safety",
    description: "Independent guide to the Ledger app ecosystem, including the Ledger Wallet companion app, device apps and safe installation practices.",
    eyebrow: "App guide",
    h1: "Ledger app: understand the software before you install",
    intro: "The phrase 'Ledger app' can mean the Ledger Wallet companion application or apps installed on a Ledger device for supported networks. This guide separates those concepts.",
    sections: [["Companion application", "Ledger Wallet is the desktop/mobile interface used to manage supported accounts and interact with Ledger hardware."],["Apps on the device", "Ledger devices can use device-level apps for supported networks and features. Install and manage them only through current Ledger-approved workflows."],["Security habits", "Treat unexpected download links and pop-ups as suspicious, confirm important details on-device and keep recovery information offline."]],
    faq: [["What does 'Ledger app' mean?", "It may refer to the companion wallet software or a network app installed on the device."],["Where should I install Ledger apps from?", "Use Ledger's official software and instructions."],["Does this site install apps?", "No. This site is informational only."]],
    cta: ["Open official Ledger setup", "https://www.ledger.com/start"]
  },
  "ledger-nano-x": {
    title: "Ledger Nano X: Setup, Features & Security Guide",
    description: "Independent Ledger Nano X guide covering safe setup, device verification, companion software and recovery-phrase precautions.",
    eyebrow: "Device guide",
    h1: "Ledger Nano X: setup and security essentials",
    intro: "Ledger Nano X is one of Ledger's established hardware-wallet models. Exact compatibility and product availability can change, so check Ledger's official pages before buying or updating.",
    sections: [["Initialize it yourself", "A new device should be initialized by the owner. Do not use recovery words supplied on a card, email, chat or pre-filled sheet."],["Verify on the device", "Addresses and transaction details should be checked on the Nano X screen before approval."],["Keep recovery data separate", "Store recovery information offline and away from screenshots, cloud notes, browser extensions and support chats."]],
    faq: [["Should a Nano X arrive with a recovery phrase?", "A legitimate setup flow has you generate and record recovery information yourself during initialization."],["Can I use unofficial software?", "For device setup and updates, prefer Ledger's official software and documentation."],["Where can I see current specs?", "Check Ledger's official product pages for current specifications and availability."]],
    cta: ["Check Ledger official products", "https://www.ledger.com/"]
  },
  "ledger-nano-s-plus": {
    title: "Ledger Nano S Plus: Setup & Security Guide",
    description: "Independent Ledger Nano S Plus guide with safe setup steps, software guidance and recovery phrase precautions.",
    eyebrow: "Device guide",
    h1: "Ledger Nano S Plus: safe setup guide",
    intro: "Ledger Nano S Plus is a hardware-wallet model in the Ledger family. Use this guide for security concepts, then verify current specifications and setup instructions directly with Ledger.",
    sections: [["Start from a trusted source", "Use a device obtained through a trusted channel and inspect packaging and device behavior before moving funds."],["Use official setup software", "Navigate to Ledger's official setup/download path yourself rather than relying on third-party links."],["Never digitize the recovery phrase", "Avoid photos, cloud backups and web forms. Recovery words are the master backup for wallet access."]],
    faq: [["Is Nano S Plus still supported?", "Support and availability can change; verify the current status on Ledger's official site."],["Can support recover my seed phrase?", "No legitimate support process should need your recovery phrase."],["Where should I update the device?", "Follow current Ledger official instructions and software."]],
    cta: ["Open official Ledger setup", "https://www.ledger.com/start"]
  },
  "ledger-flex": {
    title: "Ledger Flex: Hardware Wallet Setup & Security Guide",
    description: "Independent Ledger Flex guide covering safe setup, screen verification, official software and recovery precautions.",
    eyebrow: "Device guide",
    h1: "Ledger Flex: independent setup and security guide",
    intro: "Ledger Flex is a touchscreen hardware-wallet product in Ledger's newer device family. Because features and compatibility evolve, use Ledger's official product page for current technical details.",
    sections: [["Use the screen as a trust boundary", "Read and confirm important transaction information on the device rather than trusting only what a computer or phone displays."],["Official software only", "Install companion software and firmware through Ledger's documented channels."],["Recovery phrase hygiene", "Never type recovery words into a website, browser extension or unsolicited app, even if a message claims that verification is required."]],
    faq: [["Does Ledger Flex use a touchscreen?", "Ledger markets Flex as a touchscreen hardware wallet; check the official product page for current specifications."],["Where should I buy it?", "Use Ledger's official store or a trusted channel listed by Ledger."],["Can this guide verify a device?", "No. Follow Ledger's official genuine-check and setup process."]],
    cta: ["See official Ledger products", "https://www.ledger.com/"]
  },
  "ledger-stax": {
    title: "Ledger Stax: Setup, Security & Official Resources",
    description: "Independent Ledger Stax guide covering safe initialization, on-device verification, official software and recovery protection.",
    eyebrow: "Device guide",
    h1: "Ledger Stax: setup and security essentials",
    intro: "Ledger Stax is a premium touchscreen hardware-wallet product. This page focuses on durable security habits rather than reproducing changing specifications.",
    sections: [["Initialize from scratch", "Set up the device yourself and distrust any prewritten recovery words or instructions that ask you to restore an unknown phrase."],["Confirm on-device", "Treat the Stax display as the place to verify sensitive transaction prompts before signing."],["Keep software current", "Use Ledger's current official update guidance rather than downloading firmware or software from third-party repositories."]],
    faq: [["Where can I see current Ledger Stax specs?", "Use Ledger's official product pages for current specifications."],["Should I enter my recovery phrase online?", "No. A recovery phrase should not be entered into a website or support form."],["Does this site sell Ledger Stax?", "No. This is an independent educational guide."]],
    cta: ["Visit official Ledger site", "https://www.ledger.com/"]
  },
  "ledger-setup": {
    title: "Ledger Setup: Safe First-Time Hardware Wallet Checklist",
    description: "A safe Ledger setup checklist: official software, self-initialization, recovery phrase protection and on-device verification.",
    eyebrow: "Setup checklist",
    h1: "Ledger setup: a safer first-time checklist",
    intro: "A secure setup is mostly about controlling the source of the device, the source of the software and the recovery phrase from the first minute.",
    sections: [["1. Start at the official site", "Manually navigate to Ledger's official setup page and follow the current device-specific instructions."],["2. Generate your own recovery backup", "Record recovery words privately during the device's legitimate setup flow. Do not use a phrase supplied by anyone else."],["3. Test before storing significant value", "Learn the receive/send flow, verify addresses on-device and understand recovery procedures before relying on a new setup."]],
    faq: [["Can I set up Ledger from a random YouTube link?", "Use videos for education if you like, but get software and authoritative setup steps from Ledger's official site."],["Should I photograph the seed phrase?", "Avoid digital copies such as photos or cloud notes."],["What if setup asks me to type the seed into a webpage?", "Stop and verify the process using Ledger's official documentation."]],
    cta: ["Start with Ledger official setup", "https://www.ledger.com/start"]
  },
  "ledger-recovery": {
    title: "Ledger Recovery: Recovery Phrase Safety & Restore Basics",
    description: "Learn Ledger recovery basics, how to protect recovery words and how to avoid common seed-phrase phishing traps.",
    eyebrow: "Recovery safety",
    h1: "Ledger recovery: protect the phrase that controls access",
    intro: "Recovery information can restore wallet access, which is why attackers aggressively target it. A recovery phrase should be treated as highly sensitive offline data.",
    sections: [["Know what recovery means", "A recovery phrase can recreate access to wallet keys in a compatible recovery process. Anyone who obtains it may be able to control the associated funds."],["Restore only through a trusted process", "Follow device-specific instructions from Ledger. Do not paste recovery words into websites, forms, browser extensions or support chats."],["Plan storage before you need recovery", "Use a durable offline backup method and consider physical security, fire/water risk and unauthorized access."]],
    faq: [["Can Ledger support restore my phrase for me?", "A legitimate support interaction should not require you to disclose your recovery phrase."],["Is a screenshot safe?", "Screenshots create a digital copy that may be exposed through backups, malware or account compromise."],["What if I already entered the phrase on a website?", "Treat the phrase as compromised and seek current official security guidance immediately."]],
    cta: ["Open official Ledger support", "https://support.ledger.com/"]
  },
  "ledger-security": {
    title: "Ledger Security: Phishing, Seed Phrase & Device Checks",
    description: "Ledger security guide covering phishing, recovery phrase protection, device verification and safe transaction habits.",
    eyebrow: "Security guide",
    h1: "Ledger security: practical habits that matter most",
    intro: "Hardware wallets reduce certain software risks, but users can still be tricked into approving malicious transactions or revealing recovery information.",
    sections: [["Protect the recovery phrase", "Never disclose it to a person, website, support agent, browser extension or app asking for verification."],["Verify what you sign", "Read the hardware screen and understand the transaction before confirming. A compromised computer can display misleading information."],["Be skeptical of urgency", "Messages about account suspension, mandatory migration, emergency validation or surprise airdrops are common phishing themes."]],
    faq: [["Can Ledger remotely freeze my wallet?", "Self-custody wallet access is not normally controlled like a custodial exchange account; distrust messages using account-freeze urgency to extract a recovery phrase."],["Is a hardware wallet immune to scams?", "No. Hardware helps with key isolation, but users can still approve harmful actions or reveal secrets."],["Where do I check official alerts?", "Use Ledger's official website and support channels."]],
    cta: ["Ledger official security/support", "https://support.ledger.com/"]
  },
  "ledger-support": {
    title: "Ledger Support: How to Find Official Help Safely",
    description: "Find Ledger support safely, avoid fake support agents and know what information legitimate support should never request.",
    eyebrow: "Support safety",
    h1: "Ledger support: find official help without exposing your wallet",
    intro: "Crypto support impersonation is common. Start from Ledger's official support domain instead of trusting phone numbers, DMs or sponsored results from unknown parties.",
    sections: [["Navigate directly", "Use Ledger's official support website and verify the domain before opening tickets or following troubleshooting steps."],["Know the red lines", "Do not disclose recovery words, private keys or other secrets that can recreate access to funds."],["Ignore unsolicited helpers", "A person who contacts you first on social media and offers to 'synchronize', 'validate' or 'repair' a wallet should be treated with extreme caution."]],
    faq: [["Does this site provide Ledger support?", "No. We provide educational guidance and links to official Ledger support."],["Should I call a phone number from a random search result?", "Use contact methods published by Ledger itself."],["Can support ask for my recovery phrase?", "Do not share it. Recovery words should remain private."]],
    cta: ["Open official Ledger Support", "https://support.ledger.com/"]
  },
  "is-ledger-safe": {
    title: "Is Ledger Safe? Hardware Wallet Risks & Best Practices",
    description: "Is Ledger safe? Understand what hardware wallets protect, what they cannot prevent and the habits that reduce phishing and recovery risks.",
    eyebrow: "Safety overview",
    h1: "Is Ledger safe? Understand the security model and the human risks",
    intro: "No security product makes every risk disappear. Ledger hardware wallets are designed to isolate sensitive signing operations, while users still need to protect recovery information and verify what they approve.",
    sections: [["What hardware helps with", "A dedicated signing device can reduce exposure of private-key operations to an everyday computer or phone."],["What hardware cannot solve", "A user can still be deceived into revealing a recovery phrase or signing an unwanted transaction."],["The practical answer", "Security depends on device integrity, trustworthy software sources, careful on-device verification and strong recovery-phrase handling."]],
    faq: [["Can a hardware wallet prevent phishing?", "It can reduce some technical risks but cannot stop a user from voluntarily revealing a recovery phrase or approving a malicious request."],["Should I verify addresses on the device?", "Yes. On-device verification is a core safety habit."],["Where can I read current Ledger security guidance?", "Use Ledger's official support and security resources."]],
    cta: ["Read official Ledger support", "https://support.ledger.com/"]
  },
  "ledger-firmware": {
    title: "Ledger Firmware Update: Safe Update Checklist",
    description: "A safe Ledger firmware update checklist: official software, device verification, recovery preparation and phishing precautions.",
    eyebrow: "Update safety",
    h1: "Ledger firmware update: how to reduce update risk",
    intro: "Firmware updates can change device behavior and compatibility. Follow the instructions presented by Ledger's official software and current support documentation.",
    sections: [["Use official tooling", "Do not install firmware files received through email, chat, file-sharing services or unknown websites."],["Prepare your backup", "Before significant maintenance, make sure your legitimate recovery backup is readable and stored securely."],["Read device prompts", "Follow the device-specific update process and verify that unexpected requests do not ask you to reveal recovery words."]],
    faq: [["Where should I get Ledger firmware?", "Use the update mechanism and instructions provided through Ledger's official software and support resources."],["Will a real update ask me to enter my seed on a website?", "Treat such a request as suspicious and verify with official documentation."],["Should I update immediately from a DM link?", "No. Navigate independently to Ledger's official resources."]],
    cta: ["Official Ledger Support", "https://support.ledger.com/"]
  },
  "ledger-live-update": {
    title: "Ledger Live Update: Updating Ledger Wallet Safely",
    description: "How to handle a Ledger Live or Ledger Wallet update safely and avoid fake update prompts and malicious installers.",
    eyebrow: "Software update",
    h1: "Ledger Live update: avoid fake update prompts",
    intro: "Whether a message says Ledger Live or Ledger Wallet, the safest update process starts with verifying the software source and avoiding unsolicited download links.",
    sections: [["Check the source", "Open Ledger's official site or use the legitimate app's documented update flow rather than clicking an unexpected email or browser pop-up."],["Beware of seed requests", "A software update should not require you to type recovery words into a web page for verification."],["Re-check after updating", "Confirm that the application opens normally, recognizes the device through expected workflows and does not present unusual recovery requests."]],
    faq: [["Why do I see Ledger Live and Ledger Wallet names?", "Ledger has transitioned the companion app branding from Ledger Live to Ledger Wallet."],["Can I use an update mirror?", "Prefer the official Ledger source."],["What is the biggest red flag?", "Any update flow that asks for your recovery phrase outside the legitimate device recovery process."]],
    cta: ["Official Ledger setup/download", "https://www.ledger.com/start"]
  },
  "hardware-wallets": {
    title: "Hardware Wallets: Independent Security & Setup Guide",
    description: "Independent guide to hardware wallets: what they do, how to compare them and how to protect recovery information.",
    eyebrow: "Category guide",
    h1: "Hardware wallets: how to evaluate security beyond the brand name",
    intro: "A hardware wallet is a dedicated signing device intended to keep sensitive key operations separate from an everyday computer or phone. Choosing one involves more than comparing price or appearance.",
    sections: [["Security model", "Understand where keys are generated, where transaction details are displayed and what must be trusted during signing."],["Recovery design", "The recovery method is just as important as the device. Plan how you will store, test and protect backups."],["Software ecosystem", "Compare supported platforms, update practices and official support resources. Never rely on unofficial installers for wallet software."]],
    faq: [["Is a hardware wallet always safer than software?", "It can reduce certain key-exposure risks, but safe use still depends on recovery handling and careful transaction approval."],["What should I compare first?", "Security model, recovery process, device verification, supported assets and the vendor's update/support practices."],["Will this site cover other brands?", "Yes. Hardware Wallet Guide is designed as an independent multi-brand educational resource."]],
    cta: ["Explore the Ledger hub", "/ledger/"]
  },
};

export const navPages = [
  ["Ledger", "/ledger/"],
  ["Ledger Live", "/ledger-live/"],
  ["Download", "/ledger-live-download/"],
  ["Setup", "/ledger-setup/"],
  ["Security", "/ledger-security/"],
  ["Support", "/ledger-support/"],
];
