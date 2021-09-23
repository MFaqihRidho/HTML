const jumbo = document.querySelector('.img-jumbo')
const thumb = document.querySelectorAll('.thumb')
const circle = document.querySelector('.circle')
const indomie = document.querySelector('.header span b')
const button = document.querySelector('.buy-button')
const textNavbar = document.querySelectorAll('.navbar-text li a')

textNavbar.forEach(function(e){
    e.addEventListener('mouseenter', function(){
        e.style.color = '#DA251D'
        e.addEventListener('mouseleave', function(){
            e.style.color = 'black'
        })
    })
})

thumb[1].addEventListener('click', function(){
    jumbo.setAttribute('src','img/mi kuah.png')
    circle.style.background = '#F8C300'
    indomie.style.color = '#F8C300'
    button.style.background = '#F8C300'
    button.style.borderColor = '#F8C300'
    textNavbar.forEach(function(e){
        e.addEventListener('mouseenter', function(){
            e.style.color = '#F8C300'
            e.addEventListener('mouseleave', function(){
                e.style.color = 'black'
            })
        })
    })
})
thumb[0].addEventListener('click', function(){
    jumbo.setAttribute('src','img/mi goreng.png')
    circle.style.background = '#DA251D'
    indomie.style.color = '#DA251D'
    button.style.background = '#DA251D'
    button.style.borderColor = '#DA251D'
    textNavbar.forEach(function(e){
        e.addEventListener('mouseenter', function(){
            e.style.color = '#DA251D'
            e.addEventListener('mouseleave', function(){
                e.style.color = 'black'
            })
        })
    })
})












