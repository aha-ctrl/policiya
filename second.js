const pageX = document.querySelector(".pageX")
const pageY = document.querySelector(".pageY")
const clientX = document.querySelector(".clientX")
const clientY = document.querySelector(".clientY")
const cuby = document.querySelector(".cuby")
const cubx = document.querySelector(".cubx")

const mouseHandler = (event) => {
    pageX.innerHTML = `<b>pageX: <b> ${event.pageX} \n`
    pageY.innerHTML = `<b>pageY: <b> ${event.pageY} \n`
    clientX.innerHTML = `<b>clientX: <b> ${event.clientX} \n`
    clientY.innerHTML = `<b>clientY: <b> ${event.clientY} \n`

    cuby.style.left = event.pageX  

    cubx.style.top = event.pageY 

}


window.addEventListener("mousemove",mouseHandler)