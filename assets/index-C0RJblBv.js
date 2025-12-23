import{i,a as d,s as c,p as m}from"./theme-NUh3DMth.js";const n=document.getElementById("themeToggle"),g=i();n&&(n.textContent=g==="light"?"🌙":"☀️",n.addEventListener("click",()=>{const e=document.documentElement.getAttribute("data-theme")==="light"?"dark":"light";d(e),c(e),n.textContent=e==="light"?"🌙":"☀️"}));document.getElementById("year").textContent=new Date().getFullYear();const u=document.getElementById("projectsGrid"),h=t=>[...t].sort((e,a)=>new Date(a.date)-new Date(e.date)),p=t=>{u.innerHTML=t.map(e=>{const a=e.demoUrl&&e.demoUrl!=="#"?`<a class="btn" href="${e.demoUrl}" target="_blank" rel="noreferrer">Ver Demo</a>`:"",l=e.repoUrl&&e.repoUrl!=="#"?`<a class="btn" href="${e.repoUrl}" target="_blank" rel="noreferrer">Ver Repositorio</a>`:"";return`
        <article class="card project" data-id="${e.id}">
          
          <a href="project.html?id=${e.id}"
             rel="noreferrer"
             class="project-thumb"
             aria-label="Ver proyecto ${e.title}">
            <img 
              src="${e.image}" 
              alt="${e.imageAlt}"
              loading="lazy"
            />
          </a>

          <div class="meta">
            ${e.tags.map(o=>`<span class="pill">${o}</span>`).join("")}
          </div>

          <h3>${e.title}</h3>

          <div class="links">
            ${a}
            ${l}
          </div>

        </article>
      `}).join("")},$=h(m);p($);const r=document.getElementById("menuToggle"),s=document.getElementById("mainNav");r.addEventListener("click",()=>{const t=s.classList.toggle("open");r.setAttribute("aria-expanded",t)});s.querySelectorAll("a").forEach(t=>{t.addEventListener("click",()=>{s.classList.remove("open"),r.setAttribute("aria-expanded","false")})});
