export const siteConfig = {
  name: "Guillermo Lapuente",
  title: "Data Engineer @ Lookiero Outfittery Group",
  description: "Portfolio website of Guillermo Lapuente",
  accentColor: "#34bdc4",
  social: {
    email: "glapuentevalea@gmail.com",
    linkedin: "https://www.linkedin.com/in/guillermo-lapuente-valea-23629812a/",
    github: "https://github.com/glapuente",
  },
  aboutMe:
    "I'm a Basque Data Engineer who lives by music, loves traveling and spends most of his time building scalable data pipelines. I'm currently working from home but in the past I've traveled the world in industrial sites deploying data capturing systems or in offices building awesome stuff.",
  skills: ["Python", "PySpark", "Databricks", "Terraform"],
  projects: [
    {
      name: "Multi-cloud analytics platform",
      description:
        "This was the final project of my Master's thesis in which I deployed several services in different cloud providers as a proof of concept for analyzing press data in a distributed manner. The infrastructure was managed using DevOps tooling.",
      link: "https://github.com/glapuente/TFM",
      skills: ["Spark", "Cassandra", "Mesos", "Kafka"],
    },
    {
      name: "Multi-objective algorithms for the optimization of a sequence of generator matrices in topological quantum computing",
      description:
        "Project for my Bachelor thesis. It consisted of researching the state of the art for topological quantum computing and implementing a multi-objective optimization approach to try the best sequence of generator matrices for a given problem.",
      link: "https://addi.ehu.es/bitstream/handle/10810/15879/G.Lapuente-PFG.pdf?sequence=1&isAllowed=y",
      skills: ["Python", "Numpy", "Pandas", "Quantum Computing", "LaTeX"],
    },
  ],
  experience: [
    {
      company: "Tech Company",
      title: "Senior Software Engineer",
      dateRange: "Jan 2022 - Present",
      bullets: [
        "Led development of microservices architecture serving 1M+ users",
        "Reduced API response times by 40% through optimization",
        "Mentored team of 5 junior developers",
      ],
    },
    {
      company: "Startup Inc",
      title: "Full Stack Developer",
      dateRange: "Jun 2020 - Dec 2021",
      bullets: [
        "Built and launched MVP product from scratch using React and Node.js",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
        "Collaborated with product team to define technical requirements",
      ],
    },
    {
      company: "CrossFit Donostia",
      title: "Software development internship",
      dateRange: "May 2014 - July 2014",
      bullets: [
        "Developed responsive web applications for 20+ clients",
        "Improved site performance scores by 35% on average",
        "Introduced modern JavaScript frameworks to legacy codebases",
      ],
    },
  ],
  education: [
    {
      school: "Euskal Herriko Unibertsitatea, Spain",
      degree: "Master in Advanced Computer Systems",
      dateRange: "2015 - 2016",
      achievements: [
        "Specialization in distributed and web systems",
        "Got an internship in Ikerlan while doing my Master's thesis",
      ],
    },
    {
      school: "University of Oulu, Finland",
      degree: "Information Processing Science, Computer Science",
      dateRange: "2014",
      achievements: [
        "Erasmus+ exchange program for one semester",
      ],
    },
    {
      school: "Euskal Herriko Unibertsitatea, Spain",
      degree: "Bachelor of Applied Science (B.A.Sc.), Computer Engineering",
      dateRange: "2011 - 2015",
      achievements: [
        "Specialization in software engineering",
        "Worked for a 300h internship in CrossFit Donostia as a web developer",
        "Finished with thesis graded as 9.0 and published in the university repository",
      ],
    },
  ],
};
