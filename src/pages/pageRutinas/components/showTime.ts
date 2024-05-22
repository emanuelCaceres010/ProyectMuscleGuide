export function showTime(){
    const muscleList=[
        {id:1, reference:"abs"},
        {id:2, reference:"abs"},
        {id:3, reference:"pectoral"},
        {id:4, reference:"pectoral"},
        {id:5, reference:"antebrazo-anterior"},
        {id:6, reference:"bicep"},
        {id:7, reference:"bicep"},
        {id:8, reference:"bicep"},
        {id:9, reference:"antebrazo-anterior"},
        {id:10, reference:"none"},
        {id:11, reference:"bicep"},
        {id:12, reference:"abs"},
        {id:13, reference:"hombros"},
        {id:14, reference:"hombros"},
        {id:15, reference:"hombros"},
        {id:16, reference:"trapecio"},
        {id:17, reference:"none"},
        {id:18, reference:"pectoral"},
        {id:19, reference:"none"},
        {id:20, reference:"none"},
        {id:21, reference:"none"},
        {id:22, reference:"none"},
        {id:23, reference:"pectoral"},
        {id:24, reference:"none"},
        {id:25, reference:"none"},
        {id:26, reference:"pectoral"},
        {id:27, reference:"pectoral"},
        {id:28, reference:"pectoral"},
        {id:29, reference:"hombros"},
        {id:30, reference:"none"},
        {id:31, reference:"hombros"},
        {id:32, reference:"pectoral"},
        {id:33, reference:"none"},
        {id:34, reference:"bicep"},
        {id:35, reference:"bicep"},
        {id:36, reference:"bicep"},
        {id:37, reference:"bicep"},
        {id:38, reference:"none"},
    ];
    
    let excercisesFinished=localStorage.getItem("ejercicios-hechos");
    for(const muscleItem of muscleList){
        if(excercisesFinished){
            JSON.parse(excercisesFinished).forEach(change=>{
                if(change.nombreDelEjercicio.id == muscleItem.id ){
                    let muscleContainer=document.getElementsByName(muscleItem.reference);
                    
                    
                    const contenedorSVG=document.querySelector(".main-data-monitor");;  
                    const dataCard=document.createElement("div");
                    dataCard.classList.add("data-card");
                    dataCard.style.position="fixed";
                    (muscleContainer as any).forEach(muscle=>{
                        muscle.addEventListener("click", (e)=>{
                            e.preventDefault();
                            dataCard.innerHTML=`
                                <div class="contenedor-boton-cerrar-card">
                                    <button class="boton-cerrar-card">✖</button>
                                </div>
                                <div class="contenedor-tiempo-restante-texto">
                                    <div class="tiempo-restante-texto">Tiempo Restante</div>
                                </div>
                                <div class="contenedor-tiempo-restante">
                                    <div class="tiempo-restante"></div>
                                </div>
                            `;
                            const dataCardButton=dataCard.querySelector(".boton-cerrar-card");
                            if(dataCardButton){
                                dataCardButton.addEventListener("click", (e)=>{
                                    e.preventDefault();
                                    (contenedorSVG as any).removeChild(dataCard);
                                })
                            }
                            
                            const timeElReference= (contenedorSVG as any).querySelector(".tiempo-restante");
                            if(!timeElReference){  
                                (contenedorSVG as any).appendChild(dataCard);
                                (dataCard as any).style.display="none";
                            }else if(dataCard && (dataCard.style.display="none")){
                                dataCard.style.display="block";
                            }

                            function formatTime(milliseconds) {
                                const seconds = Math.floor(milliseconds / 1000);
                                
                                // Calcular horas, minutos y segundos
                                const hours = Math.floor(seconds / 3600);
                                const minutes = Math.floor((seconds % 3600) / 60);
                                const remainingSeconds = seconds % 60;
                                
                                // Crear la cadena de tiempo formateada
                                let formattedTime = '';
                                if (hours > 0) {
                                  formattedTime += `${hours}h `;
                                }
                                if (minutes > 0) {
                                  formattedTime += `${minutes}m `;
                                }
                                formattedTime += `${remainingSeconds}s`;
                                
                                return formattedTime;
                            }
                            
                            function updateCountdown(showTimeEl) {
                                let thirdTime=change.date + 30000;
                                let now=new Date().getTime();
                                let timeLeft=thirdTime - now;
                                if (timeLeft > 0) {
                                    (showTimeEl as any).innerHTML = `${formatTime(timeLeft).toString()}`; // Asignar el tiempo formateado al elemento .tiempo-restante
                                } else {
                                    clearInterval(intervalId); // Detener el contador cuando alcanza cero
                                    (showTimeEl as any).innerHTML = `Músculo recuperado!`;
                                }
                            }

                            const intervalId = setInterval(() => updateCountdown(timeElReference), 1000); // Ejecutar cada segundo
                            
                            updateCountdown(timeElReference); // Actualizar inmediatamente al mostrar el tiempo restante
                            
                        })
                    }) 
                }
            })
        }
    } 
}