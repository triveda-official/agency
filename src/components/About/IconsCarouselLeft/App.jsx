import { Banner } from "./Banner";
import "./styles.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaDatabase,
} from "react-icons/fa";
import { SiFigma, SiExpress } from "react-icons/si";

const images = [
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  SiExpress,
  FaDatabase,
  FaGithub,
  SiFigma,
].map((image) => ({
  id: crypto.randomUUID(),
  image,
}));

export default function App() {
  return (
    <div className="App">
      <Banner images={images} speed={5000} />
    </div>
  );
}
