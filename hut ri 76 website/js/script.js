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

const proklamasi = document.querySelector('.card-content p')
// const kolapsible = document.querySelectorAll('.collapsible li')
// console.log(document.querySelector(".collapsible").style.width);
proklamasi.style.width = '100%';



const mediaQuery = window.matchMedia('(min-width: 1024px)')

function handleTabletChange(e) {
  // Check if the media query is true
    if (e.matches) {
    // Then log the following message to the console
    proklamasi.innerHTML = 'Proklamasi Kemerdekaan Indonesia dilaksanakan pada hari Jumat, 17 Agustus 1945 tahun Masehi, atau tanggal 17 Agustus 2605 menurut tahun Jepang, yang dibacakan oleh Soekarno dengan didampingi oleh Drs. Mohammad Hatta'
    }else{
        proklamasi.innerHTML = 'Proklamasi Kemerdekaan Indonesia dilaksanakan pada hari Jumat, 17 Agustus 1945 tahun Masehi'
    }
}

// Register event listener
mediaQuery.addListener(handleTabletChange)

// Initial check
handleTabletChange(mediaQuery)
