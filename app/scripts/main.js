document.addEventListener('mousemove',function(e){

    this.querySelectorAll('.layer').forEach(layer=>{
        const depth = layer.getAttribute('data-depth')

        const x = (window.innerWidth - e.pageX*depth)/100
        const y = (window.innerHeight - e.pageY*depth)/100

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    })

});

const menuIcon = document.getElementById('menu-icon');
const barsIcon = document.getElementById('bars-icon');
const nav = document.getElementById('nav');
menuIcon.addEventListener('click',function(){
    nav.classList.add('hide');
    menuIcon.classList.add('hide');
    barsIcon.classList.remove('hide');
})

barsIcon.addEventListener('click',function(){
    nav.classList.remove('hide');
    menuIcon.classList.remove('hide');
    barsIcon.classList.add('hide');
})


var hero = gsap.timeline({defaults:{duration:1.5}});
hero.from(".hero__animation",{opacity:0, y:40, stagger:.3})

var dropdown = gsap.timeline({defaults:{duration:1.8,delay:1}});
dropdown.from(".dropdown-animation",{opacity:0,y:-10})

var about = gsap.timeline({defaults:{duration:1.2}})
about.from(".about-animation",{y:5,repeat:-1,yoyo:true});