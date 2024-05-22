import {state} from "../../state";

export function initPageLogin(params?){
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = "index.4d8db93c.css";
    document.head.appendChild(link);

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
                    Bienvenid@
                    <div class="estrellas-2" ></div>
                </div>
                <div class="contenedor-indicaciones">Por favor, completa los campos para iniciar sesión.</div>
                <div class="contenedor-email">Email</div>  
                <div class="contenedor-input-email">
                    <input name="input-email" type="email" class="input-email">
                </div>
                <div class="contenedor-contraseña">Contraseña</div>  
                <div class="contenedor-input-contaseña">
                    <input name="input-contraseña" type="password" class="input-contraseña">
                </div>
                <div class="contenedor-boton-crear">
                    <button class="crear">Iniciar sesión</button>
                </div>
            </form>
        </section>
        <div class="contenedor-pregunta-signup">
            <div class="contenedor-secundario-signup">   
                ¿Aún no tienes una cuenta?
                <button class="boton-signup">Haz click aquí</button>
            </div>    
        </div>
    </div>
    `;

    const form=(container as any).querySelector(".contenedor-login");
    form?.addEventListener("submit", async (e:any)=>{
        e.preventDefault();
        const inputPassword=(form as any).querySelector(".input-contraseña");
        const inputEmail=(form as any).querySelector(".input-email");
        try {
            // Esperar a que la promesa se resuelva
            await state.logIn(inputEmail.value, inputPassword.value);
            
            // Una vez que se ha iniciado sesión correctamente, redirigir a la página principal
            params.goTo("/main");
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
        }
    });
   
    const botonLogin=document.querySelector(".boton-signup");
    botonLogin?.addEventListener("click",(e:any)=>{
        e.preventDefault();
        params.goTo("/signup");
    });

    return container;
}