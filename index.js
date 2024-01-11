// la fonction qui permet de faire apparaitre les element du site
const ratio = .1
const options = {
    root: null,
    rootMargin: "0px",
    threshold: ratio
}
  
const handleIntersect = function (entries, observer) { //ici c'est la fonction qui detectera quand l'element est invsisble et le faire apparaitre
    entries.forEach(function (entry){
        if(entry.intersectionRatio > ratio) {
            entry.target.classList.add('reveal-visible')
            observer.unobserver(entry.target)
        } 
    })
}



const observer = new IntersectionObserver(handleIntersect, options)
document.querySelectorAll('[class*="reveal-"]').forEach(function (r) {
    observer.observe(r)
})
//l'api d'observeur d'intersection qui indique les element ayant la classe reveal qui vont apparaitre


//ici c'est l'animation de la souris
let cursor = document.querySelector(".cursor");
let cursor2 = document.querySelector(".cursor2");
document.addEventListener("mousemove",function(e){
  cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;"
})

