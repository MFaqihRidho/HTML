// const dropdown = document.querySelector('.dropdown-content')
const droptrigger = document.querySelector('.dropdown-trigger')
M.Dropdown.init(droptrigger,{
    coverTrigger:false,
    constrainWidth:false
});

const slider = document.querySelectorAll('.slider');
M.Slider.init(slider,{
    indicators:false,
    height:400,
    interval:3000
});

const collapsible = document.querySelector('.collapsible')
M.Collapsible.init(collapsible);

const select = document.querySelectorAll('select');
M.FormSelect.init(select);


const scroll = document.querySelectorAll(".scrollspy");
M.ScrollSpy.init(scroll,{
    scrollOffset: 50
});

const sideNav = document.querySelectorAll('.sidenav');
M.Sidenav.init(sideNav);
