import{i as s,p as l}from"./theme-CESJJlNV.js";s();const n=document.getElementById("projectDetail");document.getElementById("year").textContent=new Date().getFullYear();const d=()=>{const o=new URLSearchParams(window.location.search),r=Number(o.get("id"));if(Number.isNaN(r)){n.innerHTML="<p>Proyecto no válido</p>";return}const e=l.find(t=>t.id===r);if(!e)n.innerHTML="<p>Proyecto no encontrado</p>";else{document.title=e.title;const t=e.demoUrl?`<a class="btn" href="${e.demoUrl}" target="_blank">Ver Demo</a>`:"",a=e.repoUrl?`<a class="btn" href="${e.repoUrl}" target="_blank">Ver en GitHub</a>`:"",c=e.description?`<div class="project-section">
            <h3>Descripción</h3>
            <div>${e.description}</div>
        </div>`:"<br />";n.innerHTML=`
      <article class="card">
        <div class="project-header">
          <h1>${e.title}</h1>

          <div class="project-meta">
            ${e.tags.map(i=>`<span class="pill">${i}</span>`).join(" ")}
            <span class="pill">${new Date(e.date).getFullYear()}</span>
          </div><br />
        </div>

        <div class="project-cover">
          <img src="${e.image}" alt="${e.title}">
        </div>

        <div class="project-content">
          ${c}

          <div class="project-actions">
            ${t}
            ${t&&a?"&nbsp;&nbsp;":""}
            ${a}
          </div>
        </div>
      </article>
    `}};d();
