async function projects() {
   const response = await fetch("https://akshansh-api.onrender.com/projects");
   const data = await response.text();
   const json = JSON.parse(data);
   console.log(data);
   const projectContent =document.getElementById("projects-content");
   for (const project in json){
      const projectDiv = document.createElement("a");
      projectDiv.classList.add("project");
      projectDiv.href = `Akshansh/projects/${project}.html`;
      projectDiv.style.textDecoration = "none";
      projectDiv.style.color = "black";
      const projectName = document.createElement("h2");
      projectName.textContent = project;
      if (json[project].length > 100) {
         json[project] = json[project].substring(0, 100) + "...";
      }
      const projectDesc = document.createElement("p");
      projectDesc.innerHTML = `${json[project].replace(`<h1> ${project} </h1>`, "")}`;
      projectDiv.appendChild(projectName);
      projectDiv.appendChild(projectDesc);
      projectContent.appendChild(projectDiv);
   }
}


projects();