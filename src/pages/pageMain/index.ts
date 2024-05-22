import {state} from "../../state";

export function initPageMain(params?){
    //const data=state.getState();
    //const Nombre=data.usuarios[0].name;
    const data=JSON.parse(localStorage.getItem('saved-state')as any);
    
    function capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    const nombreDeUsuario=capitalizeFirstLetter((data as any).userData.nombre);
    console.log(nombreDeUsuario)

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = "index.da4dfa51.css";
    document.head.appendChild(link);

    const container=document.querySelector(".root");
    (container as any).innerHTML=`
    <section class="main">
        <header class="header">
            <div class="contenedor-logo">
                <div class="img-logo"></div>
            </div>
            <div class="contenedor-menu">
                <button class="boton-menu"></button>
            </div>
        </header>
        <div class="main-content">
            <div class="contenedor-saludo-inicial">Hola ${nombreDeUsuario} 🖐️</div>
            <div class="contenedor-primario-indicaciones">
                <div class="contenedor-indicaciones">Puedes empezar a crear tu rutina haciendo click en el botón aquí abajo</div>
            </div>
            <div class="contenedor-boton">
                <button class="boton">Crear rutina</button>
            </div>
        </div>
    </section>
    `;
    //console.log(Nombre);
    const buttonCrearRutina=(container as any).querySelector(".boton");
    buttonCrearRutina?.addEventListener("click",(e:any)=>{
        e.preventDefault();
        state.setDate();
        state.getExcercises();
        params.goTo("/rutinas");
      
        
        
    });

    return container;
}