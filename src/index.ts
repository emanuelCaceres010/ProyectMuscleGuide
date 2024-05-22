import { initRouter } from './router';
import { state } from './state';



function main(){
    const root=document.querySelector(".root");
    initRouter(root as any);
}
main();