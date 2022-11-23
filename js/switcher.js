/****toggle style******* */
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", ()  =>{
    document.querySelector(".style-swither").classList.toggle("open");
})
//hideStyle
window.addEventListener("scroll", () => {
    if(    document.querySelector(".style-swither").classList.contains("open"));
    {
        document.querySelector(".style-swither").classList.remove("open");
    } 
})
/////////theme colors/////////////
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color)
{
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }
        else
        {
            style.setAttribute("disabled","true");
        }
    })
}

/////////////////night mode & dark mode///////////////////

const dayNight = document.querySelector(".day-night")
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");

})
Window.addEventListener("load", () => {
    if(document.body.classList.contains("dark"))
    {
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    else
    {
        dayNight.querySelector("i").classList.add("fa-moon");

    }
})


  function sendMail() {
    var params = {
      nam: document.getElementById("nam").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
  
    const serviceID = "service_ddj49di";
    const templateID = "template_twslccd";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("nam").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  
  }