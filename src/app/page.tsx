import Header from "@/Components/Header";
import About from "@/Components/pages/About";
import Contact from "@/Components/pages/Contact";
import Main from "@/Components/pages/Main";
import Projects from "@/Components/pages/Project";



export default function Home() {
  return (
    <>
    <Header />
    <div className="max-w-[1600px] mx-auto overflow-hidden" style={{
      maxWidth:"1600px",/*  */
      margin:"0 auto",
      overflow:"hiiden"
    }} >
    <Main />
    <Projects />
    <About />
    <Contact />
  </div>
  <footer className="ending">
      Powerd
     </footer>
      

        </>
  );
}
