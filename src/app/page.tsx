import Header from "@/Components/Header";
import About from "@/Components/pages/About";
import Contact from "@/Components/pages/Contact";
import Main from "@/Components/pages/Main";
import Projects from "@/Components/pages/Project";
import {Fragment} from "react";


export default function Home() {
  return (<Fragment>
    <Header />
    <Main />
    <Projects />
    <About />
    <Contact />
  </Fragment>);
}
