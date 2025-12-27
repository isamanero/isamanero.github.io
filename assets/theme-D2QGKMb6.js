(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&t(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function t(e){if(e.ep)return;e.ep=!0;const a=s(e);fetch(e.href,a)}})();const m=[{id:1,title:"Proyectos durante mi formación DATA ANALYTICS",description:`
<p>
Durante mi formación como Analista de Datos en ADALAB, realicé 5 proyectos grupales
para adquirir competencias y habilidades con diferentes herramientas.
</p>

<p>
Los proyectos desarrollados fueron:
</p>

<p>
1️⃣
<a href="https://github.com/isamanero/MyPortfolio/blob/main/Data_Analytics/Proyectos%20durante%20mi%20formaci%C3%B3n%20DATA%20ANALYTICS/Proyecto%20de%20juegos%20cl%C3%A1sicos%20con%20Python/Juegos_clasicos.ipynb"
   target="_blank" rel="noopener noreferrer">
Proyecto de juegos clásicos con Python
</a>
</p>

<p>
2️⃣
<a href="https://github.com/isamanero/MyPortfolio/tree/main/Data_Analytics/Proyectos%20durante%20mi%20formaci%C3%B3n%20DATA%20ANALYTICS/Proyecto%20Evoluci%C3%B3n%20de%20la%20m%C3%BAsica%20durante%20la%20pandemia%202020"
   target="_blank" rel="noopener noreferrer">
Evolución de la música durante la pandemia (2020)
</a>
</p>

<p>
3️⃣
<a href="https://github.com/isamanero/MyPortfolio/tree/main/Data_Analytics/Proyectos%20durante%20mi%20formaci%C3%B3n%20DATA%20ANALYTICS/Bienestar%20y%20Retenci%C3%B3n%20del%20Talento%20en%20ABC%20Corporation"
   target="_blank" rel="noopener noreferrer">
Bienestar y Retención del Talento en ABC Corporation
</a>
</p>

<p>
4️⃣
<a href="https://github.com/isamanero/MyPortfolio/tree/main/Data_Analytics/Proyectos%20durante%20mi%20formaci%C3%B3n%20DATA%20ANALYTICS/Dulce%20Paradoja%20(con%20Tableau)"
   target="_blank" rel="noopener noreferrer">
Dulce Paradoja (Tableau)
</a>
</p>
`,image:"img/projects/adalab.jpg",imageAlt:"Software ADALAB",repoUrl:"https://github.com/isamanero/MyPortfolio/tree/main/Data_Analytics/Proyectos%20durante%20mi%20formaci%C3%B3n%20DATA%20ANALYTICS",date:"2025-05-06",tags:["Python","SQL","Tableau","Github","Metodología AGILE","PowerBI"]},{id:2,title:"Proyectos durante mi formación ESPECIALISTA GIS",description:`
<p>
Durante mi formación en Especialista en SIG Aplicados a la Gestión Ambiental con QGIS en el
Instituto Superior de Medioambiente, realicé dos proyectos en las dos principales fases de la formación.
</p>

<p>
A su vez, me impulsaron para crear mis proyectos personales, formarme de forma autodidacta
en diferentes herramientas y seguir avanzando con certificados complementarios en el sector GIS.
</p>

<p>Los dos proyectos que realicé son:</p>

<p>
1️⃣
<a href="https://github.com/isamanero/MyPortfolio/blob/main/QGIS/ProyectoQGIS_Modulo1.pdf"
   target="_blank">
Proyecto 1: Clasificación de itinerarios según desnivel y creación de mapas para impresión
</a>
</p>

<p>
2️⃣
<a href="https://github.com/isamanero/MyPortfolio/blob/main/QGIS/Caso_pr%C3%A1ctico_final_IsabelMa%C3%B1ero.pdf"
   target="_blank">
Proyecto 2: Evaluación de la Cobertura Nival y Usos del Suelo en los Alpes Suizos con Landsat 8
(Enero y Mayo 2014)
</a>
</p>
`,image:"img/projects/qgis.png",imageAlt:"QGIS",demoUrl:"",repoUrl:"https://github.com/isamanero/MyPortfolio/tree/main/Data_Analytics/Contaminaci%C3%B3n_por_micropl%C3%A1sticos",date:"2024-08-01",tags:["QGIS"]},{id:3,title:"Evolución del Uso del Suelo en Tierra de Barros (Badajoz, 2000-2024)",description:"<p>Motivada por mi formación en el Instituto Superior del Medio Ambiente y un workshop de QGIS en Udemy, realicé este proyecto personal para analizar cambios en el uso del suelo (2000-2024) en 100 ha de Tierra de Barros, Badajoz. </p><p>Se utilizaron imágenes Landsat 7 y 8, procesadas en QGIS con el plugin SCP y clasificación supervisada en cuatro categorías: infraestructuras, vegetación, cultivos y áreas con escasa cobertura.</p><p>Se incluyó revisión manual para mejorar precisión y se añadió el Embalse de Villalba de los Barros por su relevancia paisajística. </p><p>El proyecto permitió familiarizarme con SIG, análisis espacial y elaboración de mapas, con posibilidad de ampliar la serie temporal usando Landsat 4-5.</p>",image:"img/projects/Villafranca.jpg",imageAlt:"Uso suelo",demoUrl:"",repoUrl:"https://github.com/isamanero/MyPortfolio/blob/main/QGIS/An%C3%A1lisis_temporal_usos_del%20suelo.pdf",date:"2025-04-19",tags:["QGIS"]},{id:4,title:"Incendio de Jarilla 2025: Cálculo del dNBR y Mapas Temáticos con Sentinel-2",description:"<p>Este proyecto se inicia con análisis exploratorio durante incendio forestal de Jarilla, y continúa utilizando imágenes Sentinel-2 obtenidas desde Copernicus Browser para calcular el NBR y el dNBR con QGIS y el Semi-Automatic Classification Plugin.</p><p>El dNBR permite cuantificar el impacto sobre la vegetación, identificando zonas con daños leves, moderados o severos, y proporciona información clave para la restauración ecológica y la gestión del riesgo de incendios futuros. </p><p>El mapa resultante muestra el área afectada con un renderizado de colores optimizado para facilitar su visualización; puedes ver el mapa completo haciendo clic en la imagen.</p><p>Además, se incluye un PDF explicativo con el detalle del análisis disponible en el enlace proporcionado.</p>",image:"img/projects/jarilla.jpeg",imageAlt:"",demoUrl:"",repoUrl:"https://github.com/isamanero/MyPortfolio/blob/main/QGIS/Incendio_Jarilla_QGIS.pdf",date:"2025-09-01",tags:["QGIS","USGS EarthExplorer","Copernicus Browser"]},{id:5,title:"Lotería de Navidad: Un análisis rápido",description:"<p>Mini proyecto con Power BI para análisis exploratorio de datos de la Lotería de Navidad.Creación de un dashboard rápido e interactivo para visualizar patrones y presentar insights de forma clara.</p>",image:"img/projects/loteria.png",imageAlt:"",demoUrl:"",repoUrl:"https://github.com/isamanero/MyPortfolio/blob/main/QGIS/Informe_Jarilla_Sentinel.pdf",date:"2025-12-21",tags:["Python","PowerBI","Dashboard"]},{id:6,title:"Faros de España",description:"<p>Tutorial rápido de Mashford Mahute sobre cómo crear un mapa en QGIS utilizando Japón como ejemplo. Incluye todos los pasos para obtener y preparar los datos (límites de Japón y faros), configurar la simbología de capas con efectos de resplandor en los faros, y diseñar un layout profesional con fondo oscuro, título, escala y etiquetas de atribución. También explica cómo exportar el mapa en PNG o PDF con alta resolución para un resultado visual atractivo. </p> Para hacerlo más creativo y personal, añadí ilustraciones que realzan la visualización y aportan un estilo único al mapa. .</p>",image:"img/projects/faros.jpg",imageAlt:"faros",demoUrl:"",repoUrl:"",date:"2025-12-21",tags:["QGIS","QuickOSM"]},{id:7,title:"River Map of Great Britain and Irleand",description:"<p>Tutorial rápido de Mashford Mahute en Linkedin sobre cómo crear un mapa en QGIS como este. Incluye todos los pasos desde la descarga de los datos de ríos de HydroSHEDS, la carga y recorte en QGIS, hasta la configuración de la simbología clasificada con degradado de colores azules según el orden de los ríos. También explica cómo preparar la composición final del mapa con fondo negro y otros elementos cartográficos para un resultado profesional.</p>",image:"img/projects/rios.jpg",imageAlt:"faros",demoUrl:"",repoUrl:"",date:"2025-12-21",tags:["QGIS","QuickOSM","Hydrosheds"]},{id:8,title:"Castillos de Badajoz",description:"<p>El objetivo de este proyecto fue crear un mapa con un estilo visual inspirado en la cartografía antigua, pero construido a partir de datos geoespaciales actuales y técnicas modernas de análisis en QGIS. El área de estudio seleccionada fue la provincia de Badajoz, poniendo especial atención a la distribución altitudinal de castillos para explorar posibles patrones estratégicos de ubicación.</p> El informe de la elaboración del mismo lo podéis ver en el siguiente enlace:</p>",image:"img/projects/castillos.jpg",imageAlt:"faros",demoUrl:"",repoUrl:"https://github.com/isamanero/MyPortfolio/blob/main/QGIS/Badajoz_Castillos.pdf",date:"2025-12-21",tags:["QGIS","QuickOSM","QGIS Hub Explorer"]},{id:9,title:"Contaminación microplásticos",description:"<p>Este proyecto comenzó como una iniciativa personal de análisis de microplásticos, con informes centrados en limpieza y resultados.</p><p>Posteriormente evolucionó como trabajo final en el Bootcamp de Adalab junto a mi compañera B. Mijancos, incorporando análisis geoespacial con QGIS, Geopandas y Shapely.</p><p>Se trabajó con dos conjuntos de datos: uno sobre muestreo de microplásticos (ubicación, método, cantidad, fecha) y otro sobre estado de arrecifes (pH, temperatura, blanqueamiento, especies observadas).</p><p>Las fuentes principales fueron NOAA y Kaggle. El análisis incluyó la distribución de microplásticos en los océanos y su relación con la salud coralina, evaluando diversidad marina, blanqueamiento y factores ambientales.</p><p>El repositorio contiene EDAs en Jupyter, informes iniciales, bases de datos procesadas y un dashboard en Power BI con resultados interactivos. </p><p>Es un proyecto en desarrollo, con potencial para ampliar el análisis sobre sostenibilidad y conservación marina.</p><p>Autoras: Beatriz Mijancos y yo</p>",image:"img/projects/micro.png",imageAlt:"faros",demoUrl:"",repoUrl:"https://github.com/isamanero/MyPortfolio/tree/main/Data_Analytics/Contaminaci%C3%B3n_por_micropl%C3%A1sticos",date:"2025-12-21",tags:["Python","PowerBI"]}],n=document.documentElement,l=()=>localStorage.getItem("theme"),c=()=>l()||"dark",d=o=>{n.setAttribute("data-theme",o)},p=o=>{localStorage.setItem("theme",o)},u=()=>{const o=c();return d(o),p(o),o};export{d as a,u as i,m as p,p as s};
