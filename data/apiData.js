import {
  FaReact,
  FaAngular,
  FaVuejs,
  FaNodeJs,
  FaPython,
  FaJava,
} from "react-icons/fa";
import { SiDjango, SiMongodb } from "react-icons/si";
import { FcRemoveImage } from "react-icons/fc";

export const apiData = [
  // {
  //   Count: 15,
  //   title: "React",
  // },
  // {
  //   Count: 10,
  //   title: "Angular",
  // },
  // {
  //   Count: 5,
  //   title: "Vue.j",
  // },
  // {
  //   Count: 20,
  //   title: "Node",
  // },
  // {
  //   Count: 25,
  //   title: "Python",
  // },
  // {
  //   Count: 5,
  //   title: "Django",
  // },
  // {
  //   Count: 15,
  //   title: "Mongodb",
  // },
  // {
  //   Count: 25,
  //   title: "Ja",
  // },
  {
    title: "reactjs",
    Count: 20,
  },
  {
    title: "nodejs",
    Count: 20,
  },
  {
    title: "angularjs",
    Count: 10,
  },
];
const newDAtaArray = [];

apiData.map((item) => {
  if (item.title.toLowerCase().trim().includes("react")) {
    newDAtaArray.push({
      icon: <FaReact style={{ color: "#61DBFB" }} />,
      Count: item.Count,
      title: item.title,
    });
  } else if (item.title.toLowerCase().trim().includes("angular")) {
    newDAtaArray.push({
      icon: <FaAngular style={{ color: "#dd1b16" }} />,
      Count: item.Count,
      title: item.title,
    });
  } else if (item.title.toLowerCase().trim().includes("vue")) {
    newDAtaArray.push({
      icon: <FaVuejs style={{ color: "#42b883" }} />,
      Count: item.Count,
      title: item.title,
    });
  } else if (item.title.toLowerCase().trim().includes("python")) {
    newDAtaArray.push({
      icon: <FaPython style={{ color: "#FFD43B" }} />,
      Count: item.Count,
      title: item.title,
    });
  } else if (item.title.toLowerCase().trim().includes("django")) {
    newDAtaArray.push({
      icon: <SiDjango style={{ color: "#092e20" }} />,
      Count: item.Count,
      title: item.title,
    });
  } else if (item.title.toLowerCase().trim().includes("node")) {
    newDAtaArray.push({
      icon: <FaNodeJs style={{ color: "#3c873a" }} />,
      Count: item.Count,
      title: item.title,
    });
  } else if (item.title.toLowerCase().trim().includes("mongo")) {
    newDAtaArray.push({
      icon: <SiMongodb style={{ color: "#4DB33D" }} />,
      Count: item.Count,
      title: item.title,
    });
  } else if (item.title.toLowerCase().trim().includes("java")) {
    newDAtaArray.push({
      icon: <FaJava style={{ color: "#5382a1" }} />,
      Count: item.Count,
      title: item.title,
    });
  } else {
    newDAtaArray.push({
      icon: <FcRemoveImage style={{ color: "red" }} />,
      Count: item.Count,
      title: item.title,
    });
  }
});
export default newDAtaArray;
