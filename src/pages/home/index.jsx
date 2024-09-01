import styles from "./home.module.css";
import MainProfile from "../../components/MainProfile"
import AboutMe from "../../components/AboutMe"
import Skills from "../../components/Skills";

export default function Home() {
    return (
        <div>
            <MainProfile />
            <AboutMe />
            <Skills />
        </div>
    )
}