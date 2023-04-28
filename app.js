// gsap.registerPlugin(scrollTrigger, scrollToPlugin)

let mm = gsap.matchMedia();
const downContainer = document.querySelector(".down-container");

mm.add("(min-width: 769px)", ()=>{
    const navDesktop = gsap.timeline({paused:true});
    gsap.set(".menu-vertical", {clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)"})
    navDesktop.to(".menu-vertical", {clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", duration: 0.2})
    .to(".arrow", {rotate: 90, duration:0.2}, "<")
    downContainer.addEventListener("mouseenter", ()=>{
        navDesktop.play();
    })
    downContainer.addEventListener("mouseleave", ()=>{
        navDesktop.reverse({duration: 0});
    })
})

const toggler = document.querySelector(".bars");
const navbarContainer = document.querySelector(".navbar-container")
const serviceButton = document.querySelector(".service-button");
const teamButton = document.querySelector(".team-button");



mm.add("(max-width: 769px)", ()=>{
    const menuTl = gsap.timeline({paused: true});

    menuTl.to(".navbar-container", {display: "flex", opacity:1, duration: 0})
    .to(".navbar-bg", {opacity: 1, duration: 0.6})
    .from(".navbar-list-links", {y:"100%", opacity:0, stagger: 0.3})

    let menu = 1;
    
    const animationFunciton = ()=>{

        toggler.classList.toggle("open")
    
        if(menu == 1){
            menuTl.play();
            menu = 0;
        }else{
            menuTl.reverse();
            menu = 1;
        }
    }
    const serviceButtonFunction = ()=>{
        toggler.classList.toggle("open")
        menu = 1;
        menuTl.reverse();
    }
    serviceButton.addEventListener("click", serviceButtonFunction)
    

    const teamButtonFunction = ()=>{
        toggler.classList.toggle("open")
        menu = 1;
        menuTl.reverse();
    }
    teamButton.addEventListener("click", teamButtonFunction)
    
    toggler.addEventListener("click", animationFunciton)

    return ()=>{
    toggler.removeEventListener("click", animationFunciton)}


})




mm.add("(max-width: 768px)", ()=>{
  
    const downContainerMobile = document.querySelector(".service-button");
    const navMobile = gsap.timeline({paused:true});
    gsap.set(".menu-vertical", {clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)"})
    navMobile.to(".menu-vertical", {clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", duration: 0.2})
    .to(".arrow", {rotate: 90, duration:0.2}, "<")
    downContainerMobile.addEventListener("mouseenter", ()=>{
        navMobile.play();
    })
    downContainerMobile.addEventListener("mouseleave", ()=>{
        navMobile.reverse({duration: 0});
    })

})

const titleText = document.querySelectorAll(".title-text")
const prueba = gsap.timeline({delay: 1});
prueba.set(".bg1, .bg2, .bg3, .bg4", {clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"})
.to(".bg1, .bg2, .bg3, .bg4", {clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)", duration: 1, stagger: 0.3})
.from(".onda", {scale:0, opacity: 0})
.from(".header-container", {y:"-10", opacity:0}, "-=0.5")
.from(".main-title-container", {y:"50", opacity: 0}, "-=0.5")
.from(".second-title-container", {y:"50", opacity: 0}, "-=0.2")
.from(".stairs-big-container", {y:"50", opacity: 0}, "-=0.2")


gsap.to(".stairs-list", {y:-108, yoyo:true, repeat:-1, ease:"none", duration:6})





//////////////////////////////////////////////////////////////////////////
/////////////////////////// SECTION SLIDE ///////////////////////////////////
//////////////////////////////////////////////////////////////////////////


mm.add("(min-width: 769px)", ()=>{

    const servicesSlide = gsap.utils.toArray(".services-slide");
    servicesSlide.forEach((slide, i) =>{
        const servicesSlideTimeline = gsap.timeline({
            scrollTrigger:{
                // markers: true,
                trigger: ".section-slide-container-row",
                scrub: true,
                start: ()=> "top -" + (window.innerHeight*i),
                end: ()=> "+=" + window.innerHeight*1.3
            }
        }).from(slide, {x: -200, opacity: 0, })
        .to(slide, {x: -200, opacity: 0}, "<+1")
        // .to(".integrations", {x: -200, opacity: 0} )
    })


    const diagramaSlide = gsap.utils.toArray(".diagrama-slide");
    diagramaSlide.forEach((diagrama, i) =>{
        const diagramaSlideTimeline = gsap.timeline({
            scrollTrigger:{
                // markers: true,
                trigger: ".section-slide-container-row",
                scrub: true,
                start: ()=> "top -" + (window.innerHeight*i),
                end: ()=> "+=" + window.innerHeight*1.3
            }
        }).from(diagrama, {y: 200, opacity: 0, })
        .to(diagrama, {y: -200, opacity: 0}, "<+1")
        // .to(".maurin", {y: -200, opacity: 0})
    
    })
    ScrollTrigger.create({
        trigger: ".section-slide",
        // markers: true,
        scrub: true,
        pin: true,
        start: "top top",
        // end: "+=1300",
        end: () => "+=" + ((servicesSlide.length) * window.innerHeight),
    })
})


mm.add("(max-width: 768px)", ()=>{

    const servicesSlide = gsap.utils.toArray(".services-slide");
    servicesSlide.forEach((slide, i) =>{
        const servicesSlideTimeline = gsap.timeline({
            scrollTrigger:{
                // markers: true,
                trigger: ".section-slide-container-row",
                scrub: true,
                start: ()=> "-100 -" + (window.innerHeight*i),
                end: ()=> "+=" + window.innerHeight
                // end: "+=2500"
            }
        }).from(slide, {scale: 0, opacity: 0, stagger: 2, ease: "none"})
        .to(".automation", {scale: 0, opacity: 0}, "<+1")
        .to(".integrations", {scale: 0, opacity: 0} )
    })


    const diagramaSlide = gsap.utils.toArray(".diagrama-slide");
    diagramaSlide.forEach((diagrama, i) =>{
        const diagramaSlideTimeline = gsap.timeline({
            scrollTrigger:{
                // markers: true,
                trigger: ".section-slide-container-row",
                scrub: true,
                start: ()=> "-100 -" + (window.innerHeight*i),
                end: ()=> "+=" + window.innerHeight
                // end: "+=2500"

            }
        }).from(diagrama, {scale: 0, opacity: 0, stagger: 2, ease: "none"})
        .to(".coroleu", {scale: 0, opacity: 0}, "<+1")
        .to(".maurin", {scale: 0, opacity: 0})
    
    })
    ScrollTrigger.create({
        trigger: ".section-slide",
        // markers: true,
        scrub: true,
        pin: true,
        start: "top top",
        end: () => "+=" + ((servicesSlide.length) * window.innerHeight),
    })
})




///////////////////////////////////////



const cardContainerAnimate = document.querySelectorAll(".card-animate")

cardContainerAnimate.forEach((item) =>{
    const cardAnimation = gsap.timeline({paused:true}, {default: {duration: 0.2, ease:"none"}});

    cardAnimation.to(item.querySelector(".card-cont"), {opacity: 1})
    .to(item.querySelector(".content"), {y:-25}, "<")
    .from(item.querySelector(".see-more-button"), {opacity: 0, y: 5}, "<")
    
    
    item.addEventListener("mouseenter", ()=>{
        cardAnimation.play()
    });
    
    item.addEventListener("mouseleave", ()=>{
        cardAnimation.reverse()
    })
})
//////////////////////////////////////////////////////////////////////////
/////////////////////////// SECTION 4 ///////////////////////////////////
////////////////////////////////////////////////////////////////////////




mm.add("(min-width: 769px)", ()=>{
    let horizontalSections = gsap.utils.toArray(".horizontal-scroll .horizontal-brand");
    const horizontalScrollContainer = document.querySelector(".horizontal-scroll-container");
    
    const horizontalScroll = gsap.to(horizontalSections, {
        xPercent: -100 * (horizontalSections.length - 1),
        ease: "none",
        scrollTrigger: {
            start: "top top",
            // markers: true,
            trigger: ".horizontal-scroll",
            pin: true,
            scrub: 0.5,
            snap: {
                snapTo: 1 / (horizontalSections.length - 1),
                inertia: false,
                duration: {min: 0, max: 0.1}
            },
            // markers: true,
            end: `+=${horizontalScrollContainer.offsetWidth - innerWidth}`
        }
    })
})



//////////////////////////////////////////////////////////////////////////
/////////////////////////// SECTION 3 ///////////////////////////////////
////////////////////////////////////////////////////////////////////////



const infinitWordsScroll = gsap.to(".infinit-words", {
    xPercent: -100, duration: 6, ease:"none",
    scrollTrigger:{
        trigger: ".infinit-words-container",
        scrub: 0.5,
        start: "top, bottom",
        // markers: true,
        end: "+=4000"
    }
})

const infinitWordsScroll2 = gsap.to(".infinit-words2", {
    xPercent: 100, duration: 6, ease:"none",
    scrollTrigger:{
        trigger: ".infinit-words-container2",
        scrub: 0.5,
        start: "top, bottom",
        // markers: true,
        end: "+=7000"
    }
})




//////////////////////////////////////////////////////////////////////////
/////////////////////////// SECTION 5 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////////


mm.add("(min-width: 768px)", ()=>{

    const verticalBgAnimation = gsap.timeline({defaults:{duration:0.6}, scrollTrigger:{
        trigger: ".section5",
        // markers: true,
        start: "top top",
        end: "+=1000",
        scrub: true,
        pin: true,
       
        onLeave: function (self) {
            let start = self.start;
            self.scroll(self.start);
            self.disable();
            self.animation.progress(1);
            ScrollTrigger.refresh();
            window.scrollTo(0, start);
        },
            onUpdate: self => {
                if(self.progress > 0.80) {
                teamCards.play();
                } else {
                teamCards.reverse();
                }
            }
    }});
    verticalBgAnimation.set(".vertical1, .vertical2, .vertical3, .vertical4, .vertical5, .vertical6, .vertical7", {clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"})
    .to(".vertical1", {clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)"})
    .to(".vertical2", {clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)"}, "-=0.3")
    .to(".vertical3", {clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)"}, "-=0.3")
    .to(".vertical4", {clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)"}, "-=0.3")
    .to(".vertical5", {clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)"}, "-=0.3")
    .to(".vertical6", {clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)"}, "-=0.3")
    .to(".vertical7", {clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)"}, "-=0.3")
    
    
    
    const teamCards = gsap.timeline({
        scrollTrigger:{
            trigger: ".section5",
            // markers:true,
            start: "top top",
        }
    }).from(".team-title", {x:"-50%", opacity: 0})
    .from(".team-col-container", {opacity:0, y: 10, scale:0, stagger: 0.1, duration:1})
})


mm.add("(max-width: 767px)", ()=>{

    const teamCardsMobile = gsap.timeline({
        scrollTrigger:{
            trigger: ".brand1",
            start: "bottom 40%",
        }
    }).from(".team-title", {x:"-50%", opacity: 0})
    .from(".team-col-container", {opacity:0, y: 10, scale:0, stagger: 0.1, duration:1}, "-=0.2")
})



//////////////////////////////////////////////////////////////////////////
/////////////////////////// SECTION 6 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////////


const statisticsTimeline = gsap.timeline({
    scrollTrigger:{
        trigger: ".statistics-container",
        start: "top 70%",
        // markers: true,
        // onEnter: self => {console.log("hola")}
    }
}).from(".row-statistics", {opacity: 0, scale: 0, duration: 1})
.from(".statistics-info-container", {opacity: 0, scale: 0, duration: 1}, "<")
.to(".likes", {duration: 1, innerText: 106, snap:{innerText: 5}, ease: "linear" }, "-=0.8")
.to(".views", {duration: 1, innerText: 1.5, snap:{innerText: 0.1}, ease: "linear" }, "-=0.8")
.to(".followers", {duration: 1, innerText: 102, snap:{innerText: 5}, ease: "linear" }, "-=0.8")
.to(".revenues", {duration: 1, innerText: 1.2, snap:{innerText: 0.1}, ease: "linear" }, "-=0.8")









