async function populateCard(type) {
   const response = await fetch(`https://akshansh-api.onrender.com?type=${type}`);
   const data = await response.text();
   const json = JSON.parse(data);
   const cardContent =document.getElementById("cards-content");
   for (const card in json){
      const cardDiv = document.createElement("a");
      cardDiv.classList.add("body");
      cardDiv.style.maxWidth = "400px";
      cardDiv.style.marginLeft = "0px";
      cardDiv.style.marginBottom = "20px";
      cardDiv.style.height="280px";
      cardDiv.style.flex = "1"
      cardDiv.style.flexDirection = "column"
      if (window.innerWidth < 1000){
      cardDiv.style.marginRight = "0px";}
      else{cardDiv.style.marginRight = "50px";}
      cardDiv.href = `/Akshansh/content/index.html?type=${type}&name=${card}`;
      cardDiv.style.textDecoration = "none";
      cardDiv.style.color = document.documentElement.style.getPropertyValue("--textColor");
      if (json[card].length > 200) {
         json[card] = json[card].substring(0, 200) + "...";
      }
      const cardDesc = document.createElement("p");
      cardDesc.innerHTML = `${json[card]}`;
      cardDiv.appendChild(cardDesc);
      cardContent.appendChild(cardDiv);
   }
}