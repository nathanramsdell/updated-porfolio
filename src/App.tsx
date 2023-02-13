
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import ShowcasePin from "../components/ShowcasePin/ShowcasePin"
import { heroGsap, showcasePinGsap } from "../lib/helpers/gsapHelpers"


function App() {

  const wrapperRef: any = useRef();

  useEffect(() => {
    const ctx = gsap.context((self) => {
      let main = gsap.timeline()
      main.add(() => heroGsap())
      .add(() => showcasePinGsap(), ">")
        


      
    }, wrapperRef);
    return () => ctx.revert();

  }, []);



  return (
    <div className="main" ref={wrapperRef}>
      <div className="hero">
        <section className="head">
          <div className="h1">
            <h1>
              <span className="head-span"><span>Design.</span></span>
              <span className="head-span"><span>Development.</span></span>
              <span className="head-span"><span>Branding</span></span>
            </h1>
          </div>
          <div className="h2-wrapper">
            <div className="h2-container">
              <div className="h2 home">
                <h6>Who we are</h6>
                <h3>
                  <div>A creative agency with solid expertise </div>
                  <span> in design &amp; web development.</span>
                </h3>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div>
        <ShowcasePin />
      </div>

      <div className="big-div">hi</div>
    </div>



  );
}

export default App