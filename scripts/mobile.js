function fixNav(page){
    if (window.innerWidth < 1000){
        if (page === "index"){document.getElementById("index").style.display = "block";}
        if (page === "academics"){document.getElementById("academics").style.display = "block";}
        if (page === "projects"){document.getElementById("projects").style.display = "block";}
        if (page === "blog"){document.getElementById("blog").style.display = "block";}
        if (page === "writeups"){document.getElementById("writeups").style.display = "block";}
        if (page === "contact"){document.getElementById("contact").style.display = "block";}
    }
}
function showMore(page){
    document.getElementsByClassName("top")[0].style.display="block"
    for (element of document.getElementsByClassName("top-buttons")){
        element.style.display="block"
    }
    document.getElementById("menu").textContent = "-"
    document.getElementById("menu").setAttribute("onclick", `showLess("${page}")`)
}

function showLess(page){
    document.getElementsByClassName("top")[0].style.display="flex"
    for (element of document.getElementsByClassName("top-buttons")){
        element.style.display="none"
    }
    document.getElementById(page).style.display= "block"
    document.getElementById("menu").textContent = "+"
    document.getElementById("menu").setAttribute("onclick", `showMore("${page}")`)
    document.getElementById("menu").style.display="block"
}