var typed = new Typed('.type', {
    strings: ["Web designer", "UI Designer", "Front-end Developer"],
    typeSpeed: 100,
    BackSpeed:60,
    loop:true
  });

// Gap Animation Area start

const tl = gsap.timeline({defaults:{duration:0.75, ease: Power2.easeOut}})

tl.fromTo(".aside",{x:"-100%"},{x:0})
tl.fromTo(CSSRulePlugin.getRule(".aside .logo a::after"),1,{
  cssRule:{
    right:"80px",
    borderTop:"5px solid #ec1839",
    borderRight:"5px solid #ec1839"
  }}
  ,
  {cssRule:{
    right:"2px",

  }})

  tl.fromTo(CSSRulePlugin.getRule(".aside .logo a::before"),1,{
    cssRule:{
      left:"80px",
      borderBottom:"5px solid #ec1839",
      borderLeft:"5px solid #ec1839"
    }}
    ,
    {cssRule:{
      left:"2px",
  
    }},"<")
  tl.fromTo("#logo-text",{scale:0},{scale:1},"<15%")
