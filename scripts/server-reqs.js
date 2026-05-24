async function populateCard(type) {
   const response = await fetch(`https://akshansh-api.onrender.com/${type}`);
   const data = await response.text();
   const json = JSON.parse(data);
   console.log(data);
   const cardContent =document.getElementById("cards-content");
   for (const card in json){
      const cardDiv = document.createElement("a");
      cardDiv.classList.add("card");
      cardDiv.href = `/Akshansh/${type}/index.html?${type}=${card}`;
      cardDiv.style.textDecoration = "none";
      cardDiv.style.color = "black";
      const cardName = document.createElement("h2");
      cardName.textContent = card;
      if (json[card].length > 200) {
         json[card] = json[card].substring(0, 200) + "...";
      }
      const cardDesc = document.createElement("p");
      cardDesc.innerHTML = `${json[card].replace(`<h1 class = "cards-header"> ${card} </h1>`, "")}`;
      cardDiv.appendChild(cardName);
      cardDiv.appendChild(cardDesc);
      cardContent.appendChild(cardDiv);
   }
}
