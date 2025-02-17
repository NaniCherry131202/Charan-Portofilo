import html from "../assets/skills/html.png";
import css from "../assets/skills/css.png";
import react from "../assets/skills/react.png";
import node from "../assets/skills/node.png";
 import mongo from "../assets/skills/mongodb.png";
import bootstrap  from "../assets/skills/bootstrap.png";
import javascript from "../assets/skills/javascript.png";
import materialUI from "../assets/skills/materialUI.png";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/Last Project.png"

export const skills = [
  {
    title: "HTML",
    imageSrc: html,
  },
  {
    title: "CSS",
    imageSrc: css,
  },
  {
    title: "Bootstrap",
    imageSrc: bootstrap,
  },
  {
    title: "JavaScript",
    imageSrc: javascript,
  },
  {
    title: "React",
    imageSrc: react,
  },
  {
    title: "Material UI",
    imageSrc: materialUI,
  },
  {
     title: "Node",
   imageSrc: node,
  },
  {
    title: "MongoDB",
    imageSrc: mongo,
   },
];

export const projects = [
  {
    title: "Image Search Application",
    subtitle: " Javascript Project ",
    imageSrc: project1,
    description:"An Image Search Application with user authentication, favorite image storage, and a gallery section, built using HTML, CSS, JavaScript, and Bootstrap.",
    skills: ["HTML", "CSS", "Bootstrap","Javascript"],
    demo: "https://nanicherry131202.github.io/Image-Search-Application/",
    source: "https://github.com/NaniCherry131202/Image-Search-Application",
  },
  {
    title: "Real-Time Chat Application",
    subtitle: " MERN STACK Project ",
    imageSrc: project2,
    description:
      "A real-time chat application with JWT authentication, built using the MERN stack and Socket.io for seamless communication.",
    skills: ["React","Node.js","Express","MongoDB","Socket.io"],
    demo: "https://final-chat-bot-d6gd.onrender.com",
    source: "https://github.com/NaniCherry131202/Final-Chat-Bot",
  },
  {
    title: "Quiz Application",
    subtitle: '" MERN STACK Website "',
    imageSrc: project3,
    description:
      "A MERN stack-based quiz application with JWT authentication and a Tailwind CSS frontend for a smooth user experience.",
    skills: ["React.js","Node.js","Express","MongoDB","Socket.io"],
    demo: "https://quiz-application-etji.onrender.com",
    source: "https://github.com/NaniCherry131202/QUIZ-APPLICATION",
  },
];
