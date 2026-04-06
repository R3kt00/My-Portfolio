import type { User } from "@/features/profile/types/user";

export const USER: User = {
  firstName: "Leo",
  lastName: "Salo",
  displayName: "Leo Salo",
  username: "R3kt",
  gender: "male",
  pronouns: "he/him",
  bio: "Creating with code, Small details matter.",
  timeZone: "Europe/Helsinki",
  flipSentences: [
    "Fullstack Web Developer",
    "Java Devloper",
    "Configurator",
    "Discord bot Developer",
  ],
  address: "Tampere City, Finland",
  phoneNumber: "+358452158310", // E.164 format, base64 encoded (https://t.io.vn/
  secondPhoneNumber: "+358452158310",
  // base64-string-converter)
  email: "Q29udGFjdEByM2t0LnRlY2g=", // base64 encoded
  website: "https://r3kt.tech",
  jobTitle: "Junior Developer",
  jobs: [
    {
      title: "Founder & Head of Operations",
      company: "soon!",
      website: "soon!",
    },
    {
      title: "Soon!",
      company: "Soon!",
      website: "Soon!",
    },
  ],
  about: `
- **Fullstack Developer** with **4+ years of experience**, started coding at age 14; known for clean architecture and attention to detail.
- Expertise in **MERN stack**, **Next.js**, **NestJS**, **React Native**, **Electron**, and **3D technologies**; building scalable web, mobile, desktop, and immersive 3D applications.
- Now at **18 years old**, what some view as a limitation, I see as my greatest advantage—starting early gave me the freedom to learn, experiment and build a strong foundation combining practical experience with theoretical knowledge.
- Creator of [ShopFlow](/products/shopflow): modern SaaS shop management system
  - Built with **PERN stack** (PostgreSQL, Express, React, Node.js) and **Prisma ORM**
  - Invoice management (purchases, sales, expenses), inventory tracking and payment status monitoring
  - Real-time dashboard with financial insights and automated low-stock alerts
- **Passionate** about exploring new technologies and turning ideas into reality through polished, production-ready projects. Currently exploring **System Design** and aiming to venture into **AI**.
- **Mission:** Creating software that delivers exceptional user experiences while constantly adapting to stay at the forefront of technology.
`,
  avatar: "/images/me.jpg",
  ogImage: "/images/og-image-light.png",
  namePronunciationUrl: "/audio/abdulrehman.mp3",
  keywords: [
    "abdul rehman",
    "abdulrehmanwaseem",
    "abdul rehman waseem",
    "fullstack developer",
    "mern stack developer",
    "react developer",
    "nextjs developer",
    "react native developer",
    "three.js developer",
    "3d web developer",
    "electron developer",
    "desktop app developer",
    "mobile app developer",
    "nodejs developer",
    "nestjs developer",
  ],
  dateCreated: "2025-10-12", // YYYY-MM-DD
};
