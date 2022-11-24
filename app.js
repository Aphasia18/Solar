let stars = 1600;
let size = {
    min: 1,
    max: 4
}

document.write("<a class='star'></a>".repeat(stars));

for (i = 0; i < document.getElementsByClassName('star').length; i++){
    document.getElementsByClassName('star')[i].style.top = Math.random() * 100 + 'vh'
    document.getElementsByClassName('star')[i].style.left = Math.random() * 100 + 'vw'
    document.getElementsByClassName('star')[i].style.width = 
        (Math.random() * (size.max - size.min) + size.min) / 10 + 'vmin';
    document.getElementsByClassName('star')[i].style.height = 
        document.getElementsByClassName('star')[i].style.width;
}

const planetContainer = document.getElementById("container");

window.onmousemove = e => {
  const mouseX = e.clientX / 6,
        mouseY = e.clientY / 12;
  
  const xDecimal = mouseX / window.innerWidth,
        yDecimal = mouseY / window.innerHeight;
  
  const maxX = planetContainer.offsetWidth - window.innerWidth,
        maxY = planetContainer.offsetHeight - window.innerHeight;
  
  const panX = maxX * xDecimal * -1,
        panY = maxY * yDecimal * -1;
  
  planetContainer.animate({
    transform: `translate(${panX}px, ${panY}px)`
  }, {
    duration: 4000,
    fill: "forwards",
    easing: "ease"
  })
}