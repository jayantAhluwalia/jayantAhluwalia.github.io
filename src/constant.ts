export default interface FloatingTextType {
  introText: string;
  afterText: string;
  isHello?: boolean;
  speed: "fast" | "med" | "slow";
  route: "/about" | "/work" | "/contact" | "/";
  isHomeLink?: boolean
}

export const aboutPageContent: string[] = [
  "I am a skilled software developer with a diverse background, proficient in multiple programming languages, including Python, TypeScript, JavaScript, Golang, and Ruby. My expertise extends to popular frameworks like Angular, Flask, Django, React, Redux, and Material UI. As a full-stack and frontend developer, I have successfully contributed to various projects, conquering complex challenges and delivering outstanding results. I excel in decoupling functionalities into microservices, optimizing codebases, and transforming UI designs to create seamless user experiences. With a proactive approach and strong problem-solving abilities, I actively collaborate with cross-functional teams while staying up-to-date with the latest industry practices.",

  "As a passionate software developer, I am devoted to crafting clean and efficient code that fosters collaboration within teams. I prioritize code readability, maintainability, and scalability, adhering to best practices. Committed to optimization and innovation, I strive to deliver high-quality solutions that positively impact users' lives. Continuously learning and adapting to emerging technologies, I fuel my dedication to excellence in the ever-evolving tech landscape.",

  "With a strong belief in collaborative power, I thrive on engaging cross-functional teams to build exceptional products. My interpersonal skills and effective communication ensure diverse perspectives for innovative, user-centric solutions. Committed to excellence, I embrace challenges, inspire others, and leave a lasting impact through my code, contributing to a better digital world.",
];
