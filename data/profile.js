const profileData = {
  title: "Resume",
  name: "James Whyte",
  sub_title: "Software Engineer",
  logoURL: "assets/images/dp.jpg",
  about: {
    intro: `Software Engineer with 3+ years of experience in frontend and full-stack development. Specializing in backend development using Python (flask, django, fastapi), Java (spring), Javascript (node.js. express.js). Accomplished front-end development with JavaScript/TypeScript, CSS3, HTML5, ReactJS, React-Native, and Angular. Proven leader in delivering high-performance, UI and seamless UX. Effective mentor and collaborator dedicated to continuous learning and innovation.`,
    contact: {
      email: "jhwhyte2@gmail.com",
      phone: "202-560-7422",
      address: "McLean, VA",
    },
  },
  links: [
    {
      title: "LinkedIn",
      src: "https://www.linkedin.com/in/james-whyte",
      iconClass: "fa-brands fa-linkedin-in",
    },
    {
      title: "Github",
      src: "https://github.com/jhwhyte2",
      iconClass: "fa-brands fa-github",
    },
  ],
  skills: [
    {
      title: "Languages",
      value: "Python, Java, Typscript, JavaScript, C++, HTML5, CSS3",
    },
    {
      title: "Frameworks/Libraries",
      value: "Flask, Django, FastAPI, Spring, ReactJS, React-Native, NodeJS-Express, NextJS, Angular",
    },
    {
      title: "Others",
      value: "Git, Jenkins, AWS, Azure, Google cloud",
    },
  ],
experiences: [
  {
    organization: "FI Consulting",
    title: "Software Developer/Data Engineer",
    date: "Aug 2022 - Present",
    details: [
      `Utilized <strong>Python</strong>, <strong>Azure Cloud</strong>, <strong>Shell</strong>, and <strong>JavaScript</strong> for the back-end and front-end of a multi-billion-dollar federal funds application that processes, tracks, and monitors loan transactions for all U.S. jurisdictions.`,
      `Applied <strong>graph databases</strong>, <strong>retrieval augmented generation</strong>, and <strong>LLMs</strong> for an internal information tool, allowing employees to easily search for documents, create summaries, and ask questions. Built using <strong>Java</strong>, <strong>TypeScript</strong>, <strong>EC2</strong>, and <strong>Docker</strong>.`,
      `Developed an application for a credit union using <strong>vector databases</strong>, <strong>AWS Cloud</strong>, and <strong>NLP</strong> to provide better insights into financial data: member relationships, fraud detection, money transfers, and referral/sponsorships.`
    ],
  },
  {
    organization: "GoDaddy",
    title: "Software Developer/Cloud Engineer",
    date: "Oct 2020 – Aug 2022",
    details: [
      `Worked on the design, development, and backend implementation of GoDaddy's revenue <strong>REST API</strong>, a system handling millions of users. Languages used: <strong>Python</strong>, <strong>Java</strong>, <strong>SQL</strong>, and <strong>Shell</strong>.`,
      `Exercised extensive use of <strong>Amazon Web Services</strong>, such as <strong>AWS Lambda</strong>, <strong>AWS API Gateway</strong>, <strong>AWS CloudFormation</strong>, <strong>AWS DynamoDB</strong>, <strong>AWS EC2</strong>, and <strong>AWS SQS</strong>.`,
      `Created a rigorous test suite including unit testing, integration testing, e2e testing, regression testing, functional testing, and user-acceptance testing.`,
      `Created <strong>AWS CloudFormation</strong> templates for automating and testing multiple environments.`
    ],
  },
  {
    organization: "ASRC Federal",
    title: "GIS Technician",
    date: "Jan 2019 – Oct 2020",
    details: [
      `Modeled high-end linear features using <strong>QGIS/ArcGIS</strong> to match participant changes, increasing automation and efficiency levels by 30%.`,
      `Identified errors in GIS data using <strong>Python</strong> and <strong>PostgreSQL</strong> databases to determine suitability.`,
      `Handled <strong>GIS data manipulation</strong>, maintenance, analysis, and extraction duties.`
    ],
  }
],
  education: [
    {
      alma: "University of Maryland - College Park",
      duration: "2014 - 2018",
      std: "B.Science. (Geographic Information/Computer Science)",
    }
  ],
};