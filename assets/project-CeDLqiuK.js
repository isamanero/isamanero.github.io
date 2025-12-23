import{i as c,p as s}from"./theme-NUh3DMth.js";c();const r=document.getElementById("projectDetail");document.getElementById("year").textContent=new Date().getFullYear();const l=()=>{const a=new URLSearchParams(window.location.search),o=Number(a.get("id"));if(Number.isNaN(o)){r.innerHTML="<p>Proyecto no válido</p>";return}const e=s.find(t=>t.id===o);if(!e)r.innerHTML="<p>Proyecto no encontrado</p>";else{document.title=e.title;const t=e.demoUrl?`<a class="btn" href="${e.demoUrl}" target="_blank">Ver Demo</a>`:"",n=e.repoUrl?`<a class="btn" href="${e.repoUrl}" target="_blank">Ver Repositorio</a>`:"";r.innerHTML=`
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
          <div class="project-section">
            <h3>Descripción</h3>
            <div>${e.description}</div>
          </div>

          <div class="project-actions">
            ${t}
            ${t&&n?"&nbsp;&nbsp;":""}
            ${n}
        </div>
        </div>
      </article>
    `}};l();
