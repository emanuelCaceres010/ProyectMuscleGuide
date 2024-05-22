import {state} from "../../state";

export function initPageSignUp(params?){
    function addStyleSheet(href) {
        const existingLinks = document.head.querySelectorAll('link[rel="stylesheet"]');
        existingLinks.forEach(link => {
            (link.parentNode as any).removeChild(link);
        });
        const newLink = document.createElement('link');
        newLink.rel = 'stylesheet';
        newLink.href = href;
        document.head.appendChild(newLink);
    }
    addStyleSheet("index.e6c466dd.css");

    const container=document.querySelector(".root");
    (container as any).innerHTML=`
    <div class="container-principal">
        <header class="header">
            <div class="contenedor-logo">
                <div class="img-logo"></div>
            </div>
            <div class="contenedor-menu">
                <button class="boton-menu"></button>
            </div>
        </header>
        <section class="inicio">
            <form class="contenedor-login">
                <div class="contenedor-saludo">
                    <div class="estrellas-1"></div>
                    Bienvenidx
                    <div class="estrellas-2" ></div>
                </div>
                <div class="contenedor-indicaciones">Por favor, crea tu usuario para comenzar.</div>
                <div class="contenedor-email">Email</div>  
                <div class="contenedor-input-email">
                    <input name="input-email" type="text" class="input-email">
                </div>
                <div class="contenedor-nombre">Nombre de usuario</div>
                <div class="contenedor-input-nombre-de-usuario">
                    <input name="input-nombre" type="text" class="input-nombre-de-usuario">
                </div>
                <div class="contenedor-contraseña">Contraseña</div>  
                <div class="contenedor-input-contaseña">
                    <input name="input-contraseña" type="password" class="input-contraseña">
                </div>
                <div class="contenedor-boton-crear">
                    <button class="crear">Crear</button>
                </div>
            </form>
        </section>
        <div class="contenedor-pregunta-login">
            <div class="contenedor-secundario-login">   
                ¿Ya tienes una cuenta?
                <button class="boton-login">Haz click aquí</button>
            </div>    
        </div>
    </div>
    `;

    const form=(container as any).querySelector(".contenedor-login");
    form?.addEventListener("submit",async (e:any)=>{
        e.preventDefault();
        const inputNombre=(form as any).querySelector(".input-nombre-de-usuario");
        const inputPassword=(form as any).querySelector(".input-contraseña");
        const inputEmail=(form as any).querySelector(".input-email");
        try{
            await state.crearUsuarios(inputEmail.value, inputNombre.value, inputPassword.value);
            console.log(state.data.usuarios);
            params.goTo("/main");
        }catch(error){
            console.error('Error al iniciar sesión:', error);
        }
        
        
    });
    const botonLogin=document.querySelector(".boton-login");
    botonLogin?.addEventListener("click",(e:any)=>{
        e.preventDefault();
        params.goTo("/login");
    });

    return container;
}