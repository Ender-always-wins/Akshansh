const options = {
  root: document.querySelector(".content-div"),
  rootMargin: "0px",
  scrollMargin: "0px",
  threshold: 0.01,
};
console.log("dom loaded")
let headingsListItemArray = []

const headings = document.querySelectorAll("h1,h2,h3,h4,h5,h6")
for (let i in Array.from({length:headings.length}, (_,i)=>i)){
    let heading = headings[i].textContent
    if (heading.length>20){
        heading = heading.slice(0,20)
    }
    let headingListItemContainer = document.createElement("li")
    let headingListItem = document.createElement("a")
    headingListItem.classList.add("tocContent")
    headingListItem.textContent = heading
    headingListItem.href = "#"+headings[i].id
    headingListItemContainer.append(headingListItem)
    headingsListItemArray.push(headingListItemContainer)

}

const observer = new IntersectionObserver(func, options);
let sections = document.getElementsByClassName("hi");
for (i in Array.from({length:headings.length}, (_,i)=>i)){observer.observe(sections[i])};

let headingsOnScreen = [];
let headingElementsArray = [...headings]

function func(elements, observer){
    elements.forEach(
        element => {
            var heading = element.target.children[0];
            if (headingsOnScreen.includes(heading) && !element.isIntersecting){
            headingsOnScreen = headingsOnScreen.filter(elem => elem !== heading)
            }
            else if (element.isIntersecting){
                let index = headingElementsArray.indexOf(heading)
                let firstIndex = headingElementsArray.indexOf(headingsOnScreen[0])
                if (index < firstIndex){
                    headingsOnScreen.unshift(heading)
                }
                else{
                    headingsOnScreen.push(heading)
                }
            }
        }
    )
    let headingIndex = headingElementsArray.indexOf(headingsOnScreen[0]);
    document.getElementById('toc').replaceChildren()
    let toc = document.getElementById("toc")
    for (let i of [-2,-1,0,1,2]){
        if (headingsListItemArray[headingIndex+i] !== undefined){
            toc.append(headingsListItemArray[headingIndex+i])
        }
    }
}

console.log(headingsOnScreen)