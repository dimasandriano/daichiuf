// Dark Mode 

const toggleDark = document.getElementById('toggleDark');
const toggleLight = document.getElementById('toggleLight');

// Ganti icon di setting sebelumnya
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    toggleLight.classList.remove('hidden');
} else {
    toggleDark.classList.remove('hidden');
}

const toggleDarkMode = document.getElementById('toggleDarkMode');

toggleDarkMode.addEventListener('click', function() {

    // toggle icon di button
    toggleDark.classList.toggle('hidden');
    toggleLight.classList.toggle('hidden');

    // kondisi settingan sebelumnya
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

    // kondisi jika belum ada local storage darkmode
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }
    
});

// Fixed Navbar
window.onscroll = function () {
    const nav = document.querySelector('nav');
    const fixedNav = nav.offsetTop;
    const toTop = document.querySelector('#to-top');
  
    if (window.pageYOffset > fixedNav) {
      nav.classList.add('navbar-fixed');
      nav.classList.remove('absolute');
      console.log('fixed')
      toTop.classList.remove('hidden');
      toTop.classList.add('flex');
    } else {
      nav.classList.remove('navbar-fixed');
      nav.classList.add('absolute');
      console.log('remove fixed')
      toTop.classList.remove('flex');
      toTop.classList.add('hidden');
    }
};


// Typed
const typed = new Typed('#typed', {
    strings: [' Daichi Unite Familia'],
    typeSpeed: 80,
    delaySpeed: 100,
    smartBackspace: false,
    backSpeed: 20,
    backDelay: 1500,
    loop: true,
    showCursor: true,
    cursorChar: '|',
});