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
      company: "Lookiero Outfittery Group",
      title: "Data Engineer",
      dateRange: "2022 - Present",
      bullets: [
        "Built and maintained Databricks as the company’s analytics and data lake platform, managing infrastructure using Infrastructure as Code (IaC) tools",
        "Developed and maintained batch and streaming pipelines to support the data needs of internal teams and stakeholders",
        "Helped customer segmentation and clothing ranking engines using proprietary algorithms and third-party AI tools to improve customer cohort categorization and personalized recommendations",
        "Design and development of internal usage tools for supplier ordering and tracing, as well as user management, RBAC, and auditing of the platform",
      ],
    },
    {
      company: "VERSIA",
      title: "Data Engineer",
      dateRange: "2020 - 2022",
      bullets: [
        "Designed and implemented data architectures for real-time analytics and large-scale data processing across industries, including retail and steel processing",
        "Implemented data lineage, governance, Kerberized clusters, and role-based access control to ensure secure and compliant data management with Hortonworks platforms",
      ],
    },
    {
      company: "IPF - Ingeniería del Poliuretano Flexible",
      title: "Data Science and Engineering",
      dateRange: "2016 - 2020",
      bullets: [
        "Designed and implemented data pipelines to collect and process industrial sensor data, including temperature, dimensions, and environmental conditions, for downstream analysis in factories located around the world",
        "Prepared industrial datasets for machine learning model application, regression analysis, and other advanced analytical applications",
        "Developed tailored software solutions to monitor and track data from polyurethane (PU) foam handling systems",
      ],
    },
    {
      company: "IK4-Ikerlan",
      title: "Data Engineering intern",
      dateRange: "2015",
      bullets: [
        "During my stay at IK4 Ikerlan, I developed my Master’s thesis. I also did general backend tasks for maintaining Big Data architectures based on the SMACK (Spark, Mesos, Akka, Cassandra, Kafka) stack",
      ],
    },
    {
      company: "DONOSTI CF KOMUNITY S.L.",
      title: "Full stack web developer intern",
      dateRange: "2014",
      bullets: [
        "The internship consisted on a 300 hour program. My main tasks were software design and implementation of a private social network the community had using the LAMP (Linux, Apache, MySQL, PHP) stack",
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
