/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Suni Nguyen",
  title: "Hi, I'm Sony",
  subTitle: emoji(
    "Senior Android Developer with 9+ years of experience building high-quality mobile applications using Kotlin, Java, Jetpack Compose, Clean Architecture, and other modern Android tools and frameworks. "
  ),
  resumeLink:
    "https://drive.google.com/file/d/1APGzIPz2b1vXQkTZTFDq30jA965iNAyZ/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ninguyen94",
  linkedin: "https://www.linkedin.com/in/suni-nguyen/",
  gmail: "nguyensuni1194@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "PASSIONATE ANDROID DEVELOPER EXPLORING CLEAN ARCHITECTURE AND MODERN UI TOOLKITS",
  skills: [
    emoji(
      "⚡ Build robust and scalable Android applications using Kotlin and Jetpack libraries"
    ),
    emoji(
      "⚡ Design clean architecture with modular codebases to improve maintainability and testing"
    ),
    emoji(
      "⚡ Implement modern UI with Jetpack Compose and follow best practices in Android development"
    ),
    emoji(
      "⚡ Integrate third-party services like Firebase, RESTful APIs, and push notifications"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [

  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "FPT University",
      logo: require("./assets/images/fpt.png"),
      subHeader: "Bachelor of Information Technology",
      duration: "September 2012 - December 2016",
      desc: "Software Engineering",
      descBullets: [
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Android Development (Kotlin / Java / Jetpack)",
      progressPercentage: "90%"
    },
    {
      Stack: "Architecture & Design Patterns (MVVM, MVI, Clean Architecture)",
      progressPercentage: "80%"
    },
    {
      Stack: "Backend & Cloud Services (Firebase / AWS)",
      progressPercentage: "75%"
    },
    {
      Stack: "Testing (JUnit / Espresso / Mockito / Robolectric)",
      progressPercentage: "80%"
    },
    {
      Stack: "DevOps & CI/CD (GitHub Actions / Jenkins / Bitrise)",
      progressPercentage: "70%"
    },
    {
      Stack: "Databases (Room / SQLite / Firebase / Realm)",
      progressPercentage: "80%"
    },
    {
      Stack: "Web & Scripting (JavaScript / Python)",
      progressPercentage: "40%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Android Developer",
      company: "PlayNext Lab Inc.",
      companylogo: require("./assets/images/playnext.png"),
      date: "March 2018 – June 2025",
      desc: "",
      descBullets: [
        "Led the development of core features for large-scale Android apps such as J.Score, My Sony, and Elgana, impacting thousands of end-users.",
        "Refactored legacy codebases into Clean Architecture across 3 major projects, increasing unit test coverage from 25% to 85% and reducing crash rates by 40%.",
        "Implemented a camera-based eKYC verification flow, enhancing security and regulatory compliance for a financial application.",
        "Developed and optimized BLE beacon scanning and background processing, resulting in a 3x increase in user engagement with location-based promotions.",
        "Integrated WebSocket communication for real-time messaging and task updates with custom protocols.",
        "Participated in quarterly security audits and implemented critical features such as certificate pinning and device attestation, helping achieve ISO/IEC 27001 compliance.",
        "Collaborated closely with Japanese product managers and QA teams to ensure compliance with financial, legal, and quality standards.",
        "Mentored junior developers, contributed to architectural decisions, and streamlined onboarding through modularization."
      ]
    },
    {
      role: "Android Developer",
      company: "FPT Software",
      companylogo: require("./assets/images/fsoft.png"),
      date: "June 2015 - March 2017",
      desc: "",
      descBullets: [
        "Contributed to the development of Smart TV and voice assistant apps for international B2C clients, enhancing cross-platform user experiences.",
        "Collaborated within fast-paced agile teams, following professional development workflows, Git practices, and maintaining clear technical documentation.",
        "Improved UX through UI refinements and accessibility enhancements, while resolving high-priority bugs under tight release schedules to ensure timely delivery."
      ]}
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Companies Where I Contributed to Building Their Technology",
  projects: [
    {
      image: require("./assets/images/elgana.png"),
      projectName: "Elgana – NTT Group (Enterprise Messaging App)",
      projectDesc: "Contributed to the development of Elgana, an enterprise-grade messaging app by NTT Group with 1M+ downloads, focusing on performance optimization and secure communication features such as WebSocket integration and encrypted local storage.",
      footerLink: [
        {
          name: "App in Play Store",
          url: "https://play.google.com/store/apps/details?id=jp.co.ntt.neomeit.elgana&hl=en_US"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/mysony.webp"),
      projectName: "My Sony – Sony Corporation",
      projectDesc: "Developed key features for the My Sony app, enhancing customer engagement through personalized content, promotional offers, and support tools. Helped refactor core modules using Clean Architecture.",
      footerLink: [
        {
          name: "App in Play Store",
          url: "https://play.google.com/store/apps/details?id=jp.co.sony.swish&hl==en_US"
        }
      ]
    },
    {
      image: require("./assets/images/jscore.png"),
      projectName: "J.Score – AI Credit Scoring & Loan App",
      projectDesc: "Played a major role in building the J.Score app, an AI-powered credit scoring and personal loan service by SoftBank & Mizuho. Implemented eKYC flows, improved app security with device attestation and certificate pinning, and contributed to regulatory compliance.",
      footerLink: [
        {
          name: "App in Play Store",
          url: "https://play.google.com/store/apps/details?id=jp.co.jscore.android.app&hl=en_US"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Honors And Awards 🏆 "),
  subtitle:
    "Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "MVP of the Year – 2023",
      subtitle:
        "Recognized as the Most Valuable Performer for exceptional contributions and impact across multiple Android projects at PlayNext Lab Inc.",
      image: require("./assets/images/playnext.png"),
      imageAlt: "logo",
      footerLink: [
      ]
    },
    {
      title: "Full 4-Year University Scholarship",
      subtitle:
        "Awarded for outstanding academic performance throughout high school; top-tier merit-based scholarship granted to nationally ranked students.",
      image: require("./assets/images/scholarship.png"),
      imageAlt: "logo",
      footerLink: [
      ]
    },

    {
      title: "INTEL ISEF Vietnam 2012",
      subtitle: "First Prize in National Contest about science for high school student",
      image: require("./assets/images/intel.png"),
      imageAlt: "PWA Logo",
      footerLink: [
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "My Inbox is open for all.",
  number: "+1-530-570-0282",
  email_address: "nguyensuni1194@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
