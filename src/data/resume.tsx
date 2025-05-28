import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Matias Aratano",
  initials: "MA",
  url: "https://matiasaratano.vercel.app",
  location: "Villa Gesell, Argentina",
  locationLink: "https://www.google.com/maps/place/villagesell",
  description:
    "Full-Stack Developer and Systems Analyst with experience in web and mobile app development.",
  summary:
    "Skilled in modern JavaScript frameworks (React, Node.js, React Native) and cloud-based backends (Firebase, Supabase). Passionate about building clean, scalable applications. Strong analytical skills, fast learner, and enthusiastic about AI integration in real-world solutions. Looking to join a dynamic team and contribute to impactful projects.",
  avatarUrl: "/me.jpeg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "React Native",
    "Java",
    "Firebase",
    "Supabase",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "matiasaratano@gmail.com",
    tel: "+5491124027007",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/matiasaratano",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/matias-aratano/",
        icon: Icons.linkedin,

        navbar: true,
      },
      
      email: {
        name: "Send Email",
        url: "matiasaratano@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "MA Design",
      href: "https://bienalvg.web.app/",
      badges: [],
      location: "Remote",
      title: "Founder",
      logoUrl: "/ma.png",
      start: "Aug 2024",
      end: "now",
      description:
        "Currently working on a project to handle event registrations and admin panels. Migrating it to Next.js, Supabase and Tailwind. Includes real-time database updates and authentication. (https://bienalvg.web.app/) ",
    },
    {
      company: "Freelancer",
      badges: [],
      href: "https://matiasaratano.github.io",
      location: "Remote and in person",
      title: "Frontend Developer",
      logoUrl: "/freelancer.svg",
      start: "May 2022",
      end: "now",
      description:
        "Delivered responsive and mobile-first websites and landing pages for small businesses using HTML, CSS, Javascript and Bootstrap. Improved page load times and SEO rankings through optimization techniques. Maintained and debugged websites, ensuring reliability and performance.",
     } ,
     {
      company: "BDT Global",
      href: "https://www.bdtglobal.com/",
      badges: [],
      location: "Buenos Aires, Argentina",
      title: "Software Developer",
      logoUrl: "/bdtlogo.png",
      start: "January 2024",
      end: "Aug 2024",
      description:
        "Developed mobile and web app for attendance tracking using React and React Native. Built a secure backend with Node.js and Firebase, improving scalability and performance. Designed and implemented RESTful APIs for seamless frontend-backend integration. Collaborated with designers and product managers in an Agile environment.",
    },
    
  ],
  education: [
    {
      school: "Ort University",
      href: "https://www.ort.edu.ar/",
      degree: "Associate's Degree in Computer Science",
      logoUrl: "/ort.png",
      start: "2022",
      end: "2024",
    },
    {
      school: "Coderhouse and Egg Academy",
      href: "https://www.coderhouse.com/",
      degree: "Web Development Bootcamp",
      logoUrl: "/coder.png",
      start: "2021",
      end: "2022",
    },

  ],
  projects: [
    {
      title: "Laberinto Gesell",
      href: "https://www.laberintogesell.com/",
      dates: "Jan 2023 - Feb 2023",
      active: true,
      description:
        "Laberinto Gesell website, a family apartment complex in Argentina. I developed a landing page using the best SEO techniques and integrated Google Analytics, including a contact form to receive inquiries via web using PHP",
      technologies: [
        "HTML",
        "CSS",
        "Bootstrap",
        "Javascript",
        "PHP",
        "Github",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.laberintogesell.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        
        "/labe.mp4",
    },
    {
      title: "Departamentos Norte",
      href: "https://www.departamentosnorte.com.ar",
      dates: "June 2024",
      active: true,
      description:
        "Designed and developed Departamentos Norte website, a family apartment complex in Villa Gesell, Argentina. Includes a contact form to receive inquiries via web",
      technologies: [
        "HTML",
        "CSS",
        "Javascript",
        "Firebase",
        "Tally Forms",
        "Bootstrap",
        "Github",
       
      ],
      links: [
        {
          type: "Website",
          href: "https://www.departamentosnorte.com.ar",
          icon: <Icons.globe className="size-3" />,
        },
        
      ],
      image: "",
      video: "norte.mp4",
    },
    {
      title: "En esta tierra",
      href: "https://matiasaratano.github.io/enestatierra/",
      dates: "April 2023",
      active: true,
      description:
        "One of my first projects involved creating a landing page for a tourist complex, focusing on clear information display and user-friendly design.",
      technologies: [
       "HTML",
        "CSS",
        "Bootstrap",
        "Javascript",
        "Github",
      ],
      links: [
        {
          type: "Website",
          href: "https://matiasaratano.github.io/enestatierra/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/matiasaratano/enestatierra",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "tierra.mp4",
    },
    {
      title: "Renata Nemeth",
      href: "https://matiasaratano.github.io/Renata/",
      dates: "April 2023",
      active: true,
      description:
        "I migrated a website originally built with WordPress for a client in New Zealand to a fully coded version, improving performance, SEO, and maintainability.",
      technologies: [
        "HTML",
        "CSS",
        "Bootstrap",
        "Javascript",
        "PHP",
        "Github",
      ],
      links: [
        {
          type: "Website",
          href: "https://matiasaratano.github.io/Renata/",
          icon: <Icons.globe className="size-3" />,
        },{
          type: "Source",
          href: "https://github.com/matiasaratano/Renata",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "renata.mp4",
    },
    {
      title: "BDT Global backoffice and mobile app",
      href: "https://github.com/matiasaratano/Proyecto_Final-BackOffice",
      dates: "April 2023",
      active: true,
      description:
        "Developed a mobile app to manage office spaces and employee attendance, along with a backoffice for system administration.",
      technologies: [
        "React",
        "React Native",
        "Firebase",
        "HTML",
        "CSS",
        "Javascript",
        "API REST",
        "Node js",
        "Express js",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/matiasaratano/Proyecto_Final-BackOffice",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/bdt2.png",
      video:
        "",
    },
    {
      title: "Flicke Flight",
      href: "https://github.com/matiasaratano/flickeflight-BE4",
      dates: "April 2023",
      active: true,
      description:
        "Developed the layout and routing for a flight search app using Kotlin as part of a university project.",
      technologies: [
        "Kotlin",
        
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/matiasaratano/flickeflight-BE4",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/kotlin.png",
      video:
        "",
    },
  ],
  
  
  
  
  
  
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "ETH Waterloo",
      dates: "October 13th - 15th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
    {
      title: "Hack The North",
      dates: "September 15th - 17th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a virtual reality application allowing users to see themselves in third person.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017",
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/RTSPClient",
        },
      ],
    },
    {
      title: "Hack The 6ix",
      dates: "August 26th - 27th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShareShip/ShareShip",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
    {
      title: "Stupid Hack Toronto",
      dates: "July 23rd, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/nsagirlfriend/nsagirlfriend",
        },
      ],
    },
    {
      title: "Global AI Hackathon - Toronto",
      dates: "June 23rd - 25th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/TinySamosas/",
        },
      ],
    },
    {
      title: "McGill AI for Social Innovation Hackathon",
      dates: "June 17th - 18th, 2017",
      location: "Montreal, Quebec",
      description:
        "Developed realtime facial microexpression analyzer using AI",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
      links: [],
    },
    {
      title: "Open Source Circular Economy Days Hackathon",
      dates: "June 10th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/genecis",
        },
      ],
    },
    {
      title: "Make School's Student App Competition 2017",
      dates: "May 19th - 21st, 2017",
      location: "International",
      description: "Improved PocketDoc and submitted to online competition",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Medium Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "HackMining",
      dates: "May 12th - 14th, 2017",
      location: "Toronto, Ontario",
      description: "Developed neural network to optimize a mining process",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
      links: [],
    },
    {
      title: "Waterloo Equithon",
      dates: "May 5th - 7th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "SpaceApps Waterloo",
      dates: "April 28th - 30th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/earthwatch",
        },
      ],
    },
    {
      title: "MHacks 9",
      dates: "March 24th - 26th, 2017",
      location: "Ann Arbor, Michigan",
      description:
        "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/threejs-planes",
        },
      ],
    },
    {
      title: "StartHacks I",
      dates: "March 4th - 5th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-ionic",
        },
        {
          title: "Source (Server)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-rails",
        },
      ],
    },
    {
      title: "QHacks II",
      dates: "February 3rd - 5th, 2017",
      location: "Kingston, Ontario",
      description:
        "Developed a mobile game which enables city-wide manhunt with random lobbies",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/human-huntr-react-native",
        },
        {
          title: "Source (API)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/human-huntr-rails",
        },
      ],
    },
    {
      title: "Terrible Hacks V",
      dates: "November 26th, 2016",
      location: "Waterloo, Ontario",
      description:
        "Developed a mock of Windows 11 with interesting notifications and functionality",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
        },
      ],
    },
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
} as const;
