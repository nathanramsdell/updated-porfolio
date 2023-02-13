import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)
export function showcasePinGsap() {

    const showcasePinSection = gsap.utils.toArray<HTMLElement>(".showcase-pin")

    showcasePinSection.forEach(section => {

        let scrollTl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: "top top",
                end: () => "+=" + (section.offsetHeight - (section.offsetHeight / 5)),
                scrub: true,
                pin: ".showcase-images",
                anticipatePin: 1,
            },
            defaults: { ease: "none" }
        });
        // animate the container one way...

        scrollTl.fromTo(section.querySelector(".showcase-image.first"), { yPercent: 0, y: 0 }, { yPercent: 0 })
        gsap.utils.toArray<HTMLElement>(".showcase-image:not(.first):not(.last)").forEach((image, idx) => {
            if (idx == 0) {
                scrollTl.fromTo(image, { yPercent: 100, y: 0, }, { yPercent: 0 }, 0)
            } else {

                scrollTl.fromTo(image, { yPercent: 100, y: 0 }, { yPercent: 0 }, ">")
            }
        })
        scrollTl.fromTo(section.querySelector(".showcase-image.last"), { yPercent: 100, y: 0 }, { yPercent: 0 }, ">")


    });
}

export function heroGsap() {
   
    let section = gsap.utils.toArray<HTMLElement>(".head")
    section.forEach(section => {
        let tl = gsap.timeline({
      

            scrollTrigger: {
                trigger: ".head",
                start: "top top",
                end: () => "+=" + (section.offsetHeight),
                scrub: true,
                pin: true,
                anticipatePin: 1,
            },
            defaults: { ease: "none" }
        })
       
        
        
        tl.fromTo(".hero .h1", {opacity: 1, y: 0}, {opacity: 0, y: -90})
        tl.fromTo(".hero .h2-container", {opacity: 0}, {opacity: 1} )
        tl.fromTo(".hero .h2-container", {marginTop: 90}, {marginTop: 0}, "<25%" )
    })
   
    

}
