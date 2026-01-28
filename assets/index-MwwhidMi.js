import{i as w,a as v,s as x,p as b}from"./theme-DR8G8R8v.js";const o=document.getElementById("themeToggle"),E=w();o&&(o.textContent=E==="light"?"🌛":"🌞",o.addEventListener("click",()=>{const t=document.documentElement.getAttribute("data-theme")==="light"?"🌛":"light";v(t),x(t),o.textContent=t==="light"?"🌛":"🌞"}));document.getElementById("year").textContent=new Date().getFullYear();const M=document.getElementById("projectsGrid"),$=e=>[...e].sort((t,s)=>new Date(s.date)-new Date(t.date)),k=e=>{M.innerHTML=e.map(t=>{const s=t.demoUrl&&t.demoUrl!=="#"?`<a class="btn" href="${t.demoUrl}" target="_blank" rel="noreferrer">Ver Demo</a>`:"",y=t.repoUrl&&t.repoUrl!=="#"?`<a class="btn" href="${t.repoUrl}" target="_blank" rel="noreferrer">Ver en GitHub</a>`:"";return`
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
            ${t.tags.map(p=>`<span class="pill">${p}</span>`).join("")}
          </div>

          <h3>${t.title}</h3>

          <div class="links">
            ${s}
            ${y}
          </div>

        </article>
      `}).join("")},T=$(b);k(T);const l=document.getElementById("menuToggle"),d=document.getElementById("mainNav");l.addEventListener("click",()=>{const e=d.classList.toggle("open");l.setAttribute("aria-expanded",e)});d.querySelectorAll("a").forEach(e=>{e.addEventListener("click",()=>{d.classList.remove("open"),l.setAttribute("aria-expanded","false")})});const c=document.getElementById("snow"),n=c.getContext("2d");let a,i,r=[];function g(){a=c.width=window.innerWidth,i=c.height=window.innerHeight}window.addEventListener("resize",g);g();function B(){r=[];const e=Math.floor(a/10);for(let t=0;t<e;t++)r.push({x:Math.random()*a,y:Math.random()*i,r:Math.random()*3+1,d:Math.random()+1})}function D(){n.clearRect(0,0,a,i),n.fillStyle="rgba(255, 255, 255, 0.8)",n.beginPath();for(let e of r)n.moveTo(e.x,e.y),n.arc(e.x,e.y,e.r,0,Math.PI*2);n.fill(),I()}function I(){for(let e of r)e.y+=Math.pow(e.d,2)+.5,e.x+=Math.sin(e.y*.01),e.y>i&&(e.y=-10,e.x=Math.random()*a)}function u(){D(),requestAnimationFrame(u)}const f=new Date,m=f.getMonth(),h=f.getDate();(m===11&&h>=1||m===0&&h<=7)&&(B(),u());
