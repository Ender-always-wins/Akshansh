async function populateCard(type) {
   const response = await fetch(`https://akshansh-api.onrender.com?type=${type}`);
   const data = await response.text();
   const json = JSON.parse(data);
   console.log(data);
   const cardContent =document.getElementById("cards-content");
   for (const card in json){
      const cardDiv = document.createElement("a");
      cardDiv.classList.add("card");
      cardDiv.href = `/Akshansh/content/index.html?type=${type}&name=${card}`;
      cardDiv.style.textDecoration = "none";
      cardDiv.style.color = "black";
      if (json[card].length > 200) {
         json[card] = json[card].substring(0, 200) + "...";
      }
      const cardDesc = document.createElement("p");
      cardDesc.innerHTML = `${json[card]}`;
      cardDiv.appendChild(cardDesc);
      cardContent.appendChild(cardDiv);
   }
}