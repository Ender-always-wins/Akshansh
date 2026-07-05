let button = document.getElementsByClassName('theme-button')[0];

if (sessionStorage.getItem('theme') === null){
    console.log('hello')
    sessionStorage.setItem("theme", "light")
    console.log(sessionStorage.getItem("theme"))
}

if (sessionStorage.getItem('theme') === 'dark'){
    button.children[0].classList.toggle('fa-sun-o');
    button.children[0].classList.toggle('fa-moon-o');
    let elem = document.documentElement;
    elem.style.setProperty("--backgroundColor", '#1e1e1e');
    elem.style.setProperty("--textColor", '#f5f5f5');
    elem.style.setProperty("--buttonColor", '#222222');
    elem.style.setProperty("--buttonHoverColor", '#1e1e1e');
    elem.style.setProperty("--shadowColor", 'rgba(255,255,255,0.3)');
    elem.style.setProperty("--buttonTextColor", '#f5f5f5');
    elem.style.setProperty("--textBackgroundColor", 'rgba(0,0,0,0.6)');
    elem.style.setProperty("--navShadowColor", 'rgba(255,255,255,0.9)');
}

button.addEventListener('click', function() {
    sessionStorage.setItem('theme', sessionStorage.getItem('theme') === 'light' ? 'dark' : 'light');
    console.log(sessionStorage.getItem('theme'));
    button.children[0].classList.toggle('fa-sun-o');
    button.children[0].classList.toggle('fa-moon-o');
    let elem = document.documentElement;
    elem.style.setProperty("--backgroundColor", sessionStorage.getItem('theme') === 'light' ? '#f2f0ef' : '#1e1e1e');
    elem.style.setProperty("--textColor", sessionStorage.getItem('theme') === 'light' ? '#000000' : '#f5f5f5');
    elem.style.setProperty("--buttonColor", sessionStorage.getItem('theme') === 'light' ? '#4d3e42' : '#222222');
    elem.style.setProperty("--buttonHoverColor", sessionStorage.getItem('theme') === 'light' ? '#453839' : '#1e1e1e');
    elem.style.setProperty("--shadowColor", sessionStorage.getItem('theme') === 'light' ? 'rgba(0,0,0,0.3)' : 'rgba(255,255,255,0.3)');
    elem.style.setProperty("--buttonTextColor", sessionStorage.getItem('theme') === 'light' ? '#000000' : '#f5f5f5');
    elem.style.setProperty("--textBackgroundColor", sessionStorage.getItem('theme') === 'light' ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.6)');
    elem.style.setProperty("--navShadowColor", sessionStorage.getItem('theme') === 'light' ? 'rgba(0,0,0,0.9)' : 'rgba(255,255,255,0.9)');
}
)