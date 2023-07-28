export default interface FloatingTextType {
  introText: string;
  afterText: string;
  isHello?: boolean;
  speed: "fast" | "med" | "slow";
  route?: "/about" | "/work" | "/contact" | "/";
  isHomeLink?: boolean;
}

export const aboutPageContent: string[] = [
  "I am a skilled software developer with a diverse background, proficient in multiple programming languages, including Python, TypeScript, JavaScript, Golang, and Ruby. My expertise extends to popular frameworks like Angular, Flask, Django, React, Redux, and Material UI. As a full-stack and frontend developer, I have successfully contributed to various projects, conquering complex challenges and delivering outstanding results. I excel in decoupling functionalities into microservices, optimizing codebases, and transforming UI designs to create seamless user experiences. With a proactive approach and strong problem-solving abilities, I actively collaborate with cross-functional teams while staying up-to-date with the latest industry practices.",

  "As a passionate software developer, I am devoted to crafting clean and efficient code that fosters collaboration within teams. I prioritize code readability, maintainability, and scalability, adhering to best practices. Committed to optimization and innovation, I strive to deliver high-quality solutions that positively impact users' lives. Continuously learning and adapting to emerging technologies, I fuel my dedication to excellence in the ever-evolving tech landscape.",

  "With a strong belief in collaborative power, I thrive on engaging cross-functional teams to build exceptional products. My interpersonal skills and effective communication ensure diverse perspectives for innovative, user-centric solutions. Committed to excellence, I embrace challenges, inspire others, and leave a lasting impact through my code, contributing to a better digital world.",
];

export interface workDetail {
  title: string;
  projectName: string;
  keyPoints: string[];
}

export const workContent: workDetail[] = [
  {
    title: "BITCS | Frontend Engineer",
    projectName: "Trinity Agtech",
    keyPoints: [
      `
      Served as a senior frontend developer, spearheading the migration of the UI module from a .NET monolith to React, resulting in a significant enhancement of the user experience`,
      `Optimized existing codebase by refactoring and implementing best practices, leading to improved code quality and maintainability.`,
      `Demonstrated strong problem-solving skills by resolving bugs and addressing issues, ensuring a seamless user experience and high product quality.`,
      `Led the complete revamp of the homepage UI into an interactive and customizable page, utilizing React, Redux, and Material UI to deliver a visually appealing and engaging user interface.`,
    ],
  },
  {
    title: "BITCS | Full Stack Developer",
    projectName: "GoCaribou",
    keyPoints: [
      `Thrived as a full-stack developer, leveraging expertise in Golang.`,
      `Led the decoupling of complex functionalities from a monolithic architecture, transforming them into efficient microservices using Golang and TypeScript.`,
      `Collaborated closely with teams such as Analytics and DevOps, ensuring seamless integration and effective communication in order to reduce downtime and enhance overall system performance.`,
      `Demonstrated proactive project management skills through daily standups, sprint planning, and the creation of monitoring dashboards using ELK, contributing to streamlined development processes and improved team coordination.`,
    ],
  },
  {
    title: "BITCS | SDE Intern",
    projectName: "Codesra, Changa",
    keyPoints: [
      `Commenced career as a software developer intern, gaining hands-on experience with TypeScript, React, Next.js, Redux, and React Native.`,
      `Collaborated in resolving UI issues, actively participating in daily scrums, and contributing to the addition of new features and pages.`,
      `Demonstrated adaptability and a proactive approach while working in a dynamic team environment, honing skills in front-end development and problem-solving.
      `,
      `Acquired valuable knowledge in software development methodologies and successfully contributed to the overall growth of the team during the internship period.`,
    ],
  },
  {
    title: "OmniPresent Robottech | SDE Intern",
    projectName: "CHMS(survellience system), Drone monitoring system",
    keyPoints: [
      `Successfully contributed as a software developer intern at Omnipresent Robot Tech, utilizing Python, TypeScript, and frameworks such as Angular, Flask, and Django.`,
      `Demonstrated proficiency in maintaining and enhancing the existing product, resolving bugs, and implementing new client features.`,
      `Played a key role in optimizing the user experience by revamping the product's UI, resulting in improved efficiency and enhanced user satisfaction.`,
      `Actively collaborated with a dynamic team to deliver high-quality solutions, gaining valuable experience in software development and contributing to the company's success.`,
    ],
  },
];
