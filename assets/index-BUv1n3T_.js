import{i as f,a as y,s as p,p as v}from"./theme-PUn9hKCf.js";const r=document.getElementById("themeToggle"),w=f();r&&(r.textContent=w==="light"?"🌛":"🌞",r.addEventListener("click",()=>{const t=document.documentElement.getAttribute("data-theme")==="light"?"🌛":"light";y(t),p(t),r.textContent=t==="light"?"🌛":"🌞"}));document.getElementById("year").textContent=new Date().getFullYear();const x=document.getElementById("projectsGrid"),b=e=>[...e].sort((t,l)=>new Date(l.date)-new Date(t.date)),E=e=>{x.innerHTML=e.map(t=>{const l=t.demoUrl&&t.demoUrl!=="#"?`<a class="btn" href="${t.demoUrl}" target="_blank" rel="noreferrer">Ver Demo</a>`:"",g=t.repoUrl&&t.repoUrl!=="#"?`<a class="btn" href="${t.repoUrl}" target="_blank" rel="noreferrer">Ver en GitHub</a>`:"";return`
        <article class="card project" data-id="${t.id}">
          
          <a href="project.html?id=${t.id}"
             rel="noreferrer"
             class="project-thumb"
             aria-label="Ver proyecto ${t.title}">
            <img 
              src="${t.image}" 
              alt="${t.imageAlt}"
              loading="lazy"
            />
          </a>

          <div class="meta">
            ${t.tags.map(u=>`<span class="pill">${u}</span>`).join("")}
          </div>

          <h3>${t.title}</h3>

          <div class="links">
            ${l}
            ${g}
          </div>

        </article>
      `}).join("")},$=b(v);E($);const s=document.getElementById("menuToggle"),d=document.getElementById("mainNav");s.addEventListener("click",()=>{const e=d.classList.toggle("open");s.setAttribute("aria-expanded",e)});d.querySelectorAll("a").forEach(e=>{e.addEventListener("click",()=>{d.classList.remove("open"),s.setAttribute("aria-expanded","false")})});const c=document.getElementById("snow"),n=c.getContext("2d");let a,i,o=[];function m(){a=c.width=window.innerWidth,i=c.height=window.innerHeight}window.addEventListener("resize",m);m();function M(){o=[];const e=Math.floor(a/10);for(let t=0;t<e;t++)o.push({x:Math.random()*a,y:Math.random()*i,r:Math.random()*3+1,d:Math.random()+1})}M();function k(){n.clearRect(0,0,a,i),n.fillStyle="rgba(255, 255, 255, 0.8)",n.beginPath();for(let e of o)n.moveTo(e.x,e.y),n.arc(e.x,e.y,e.r,0,Math.PI*2);n.fill(),T()}function T(){for(let e of o)e.y+=Math.pow(e.d,2)+.5,e.x+=Math.sin(e.y*.01),e.y>i&&(e.y=-10,e.x=Math.random()*a)}function h(){k(),requestAnimationFrame(h)}h();
