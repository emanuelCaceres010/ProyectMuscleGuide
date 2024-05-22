import {initPageSignUp} from "./pages/pageSignUp";
import { initPageMain } from "./pages/pageMain";
import { initPageRutinas } from "./pages/pageRutinas";
import { initPageLogin } from "./pages/pageLogin";
import { initPageMonitor } from "./pages/pageMonitor";

const routes=[
    {
        path:/\/signup/,
        component:initPageSignUp,
    },
    {
        path:/\/main/,
        component:initPageMain,
    },
    {
        path:/\/rutinas/,
        component:initPageRutinas,
    },
    {
        path:/\/login/,
        component:initPageLogin,
    },
    {
        path:/\/muscle-monitor/,
        component:initPageMonitor,
    }

];

export function initRouter(container:Element){
    function goTo(path){
        history.pushState({},"",path)
        handleRoute(path)
    }
    
    function handleRoute(route){
        console.log("el handleRoute recibió una nueva ruta:"+route);
        for(const r of routes){
            if (r.path.test(route)){
                const el=r.component({goTo:goTo})
                //container.appendChild(el as any);
            }
        }  
    }

    handleRoute(location.pathname);
}