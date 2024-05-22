import {state} from "../../state";
import { initPageMonitor } from "../pageMonitor";
import { muscleDamageChanger } from "./components/muscleDamageChanger";
import { showTime } from "./components/showTime";

export async function initPageRutinas(params?){
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = "index.da4dfa51.css";
    document.head.appendChild(link);  

    async function renderMainPage() {
        try {
            const container = document.querySelector(".root");
            (container as any).innerHTML = `
                <section class="main">
                    <header class="header">
                        <div class="contenedor-logo">
                            <div class="img-logo"></div>
                        </div>
                        <div class="contenedor-menu">
                            <button class="boton-menu"></button>
                        </div>
                    </header>
                    <section class="main-data">
                        <div class="contenedor-fecha">
                            <div class="fecha"></div>
                        </div>
                        <div class="contenedor-buscador">
                            <div class="contenedor-primario">
                                <div class="contenedor-secundario">
                                    <div class="label-buscador"></div>
                                    <input type="search" class="input-buscador" placeholder="Buscar..."/>
                                </div>   
                            </div>  
                            <div class="searchResults">
                            
                            </div>  
                        </div>
                        <div class="contenedor-ejercicios-main"></div>
                        <div class="contenedor-agregar-ejercicio-indicaciones">
                            <div class="indicaciones-agregar-ejercicio">Aqui puedes agregar tus ejercicios del día</div>
                        </div>
                        
                        
                    </section>
                    <div class="separador-de-base"></div>
                    <div class="contenedor-botones">
                        <button class="boton-home"></button>
                        <button class="boton-estadisticas"></button>
                        <button class="boton-tiempo-recuperacion"></button>
                    </div>
                    <section class="main-data-monitor"></section>
                </section>
            `;
            if(sessionStorage.getItem("saved-date")){
                const fecha=sessionStorage.getItem("saved-date");
                const dateElement=document.querySelector(".fecha");
                (dateElement as any).innerHTML=fecha;
                //console.log("tengo fecha");
            }else{
                const fecha = await state.getDate();
                const fechaTipada=fecha.lastDate.charAt(0).toUpperCase() + fecha.lastDate.slice(1);
                sessionStorage.setItem("saved-date", fechaTipada);
                //console.log("se guardó la fecha");
                const dateElement=document.querySelector(".fecha");
                (dateElement as any).innerHTML=fechaTipada;
            }
        } catch (error) {
            console.error('Error al renderizar la página principal:', error);
        }
    }
    
    // Llama a la función para renderizar la página principal
    await renderMainPage();

    async function setupSearch() {
        const searchInput = document.querySelector('.input-buscador');
        const searchResults = document.querySelector('.searchResults');
    
        (searchInput as any).addEventListener('input', (e) => {
            const res = e.target.value.toLowerCase(); // Obtener el valor del input en minúsculas
            console.log(res);
            (searchResults as any).innerHTML = ''; // Limpiar los resultados anteriores
            
            // Verificar si la búsqueda está vacía
            if (res.trim() === '') {
                return; // Si la búsqueda está vacía, salir de la función sin mostrar resultados
            }

            // Realizar la búsqueda y mostrar los resultados
            const results = Search(res);

           
            const imgs=[    
                {id:26, path:"press-banca.svg"},
                {id:27, path:"none"},
                {id:28, path:"none"},
                {id:29, path:"none"},
                {id:30, path:"none"},
                {id:31, path:"none"},
                {id:32, path:"none"},
            ]
               
            
            
            results.forEach(result => {
                const resultButton = document.createElement('div'); // Crear un elemento de botón
                resultButton.innerHTML = `
                    <div class="result-image">
                        <div class="excercise-image"></div>
                    </div>
                    <div class="result-data">
                        <div class="result-title">${result.nombre}</div>
                        <div class="result-description">músculos que afecta</div>
                    </div>
                `

                let imgEl = (resultButton as any).firstChild.nextElementSibling.firstChild.nextSibling;
                for(const img of imgs) {
                    if(img.id == result.id) {
                        imgEl.style.backgroundImage=`url(${img.path})`;
                    }
                }

                resultButton.classList.add('result'); // Agregar la clase 'result' al botón
                (searchResults as any).appendChild(resultButton); // Agregar el botón al contenedor de resultados
                
                const containerIndicaciones= document.querySelector('.contenedor-agregar-ejercicio-indicaciones');
                const mainTextEl=document.querySelector(".indicaciones-agregar-ejercicio")
                const mainExcercises=document.querySelector(".contenedor-ejercicios-main")

                // Agregar un event listener al botón
                resultButton.addEventListener('click', (e) => {
                    e.stopPropagation(); // Evitar la propagación del evento al contenedor principal para que no colapse el buscador
                    // Aquí puedes ejecutar la lógica deseada cuando se haga clic en el botón
                    console.log(`Se hizo clic en el ejercicio: ${result}`);
                    (containerIndicaciones as any).style.display="none";
                    (mainExcercises as any).style.display="flex";
                    const newExcerciseContainer=document.createElement("div");
                    newExcerciseContainer.classList.add("ejercicios-main-container");
                    const newExcercise=document.createElement("button");
                    newExcercise.classList.add("ejercicios-main");
                    newExcercise.innerHTML=result.nombre;
                    (newExcerciseContainer as any).appendChild(newExcercise);
                    (mainExcercises as any).appendChild(newExcerciseContainer);

                    newExcercise.addEventListener("click", () => {
                        const exerciseExpandable=document.createElement("div");
                        const series=["1ra Serie","2da Serie","3ra Serie","4ta Serie","5ta Serie","6ta Serie","7ma Serie","8va Serie"];
                        exerciseExpandable.classList.add("ejercicio-expandable");
                        exerciseExpandable.innerHTML=`
                            <div class="contenedor-serie">${series[0]}</div>
                            <div class="contenedor-datos-de-serie">
                                <div class="contenedor-input-repeticiones">
                                    <div class="repeticiones-texto">Repeticiones</div>
                                    <input type="number" class="input-repeticiones" placeholder="Repeticiones"/>
                                </div>
                                <div class="contenedor-input-peso">
                                    <div class="peso-texto">Peso</div>
                                    <input type="number" class="input-peso" placeholder="Peso"/>
                                </div>
                            </div>
                            <div class="contenedor-boton-siguiente-serie">
                                <button class="boton-siguiente-serie">Siguiente serie</button>
                            </div>
                            <div class="contenedor-boton-ejercicio-terminado">
                                <button class="boton-ejercicio-terminado">Terminar ejercicio</button>
                            </div>
                        `;
                        if(!newExcerciseContainer.children[1]){
                            newExcerciseContainer.appendChild(exerciseExpandable);
                        }
                        
                        function cambiarSerie(series:string[]){
                            let index=1;
                            
                            return function() {
                                if (index < series.length) {
                                    return series[index++];
                                } else {
                                    return null; // Si ya se han devuelto todos los elementos del array
                                }
                            };
                            
                        }

                        //guardar las repeticiones y pesos en el localStorage
                        const nombreDelEjercicio=result;
                        const numeroDeSerie=newExcerciseContainer.querySelector(".contenedor-serie")?.textContent;
                        const inputRepes=newExcerciseContainer.querySelector(".input-repeticiones");
                        const inputPeso=newExcerciseContainer.querySelector(".input-peso");
                        function guardarDataEjercicios(nombreDelEjercicio, numeroDeSerie, inputRepes, inputPeso) {
                            let newDate=new Date();
                            const newData = {
                                nombreDelEjercicio: nombreDelEjercicio,
                                serie: numeroDeSerie,
                                repeticiones: inputRepes.value,
                                peso: inputPeso.value,
                                date:newDate.getTime(),
                            };
                        
                            let dataToSet = JSON.parse(localStorage.getItem("ejercicios-hechos") as any) || [];
                            dataToSet.push(newData);
                            localStorage.setItem("ejercicios-hechos", JSON.stringify(dataToSet));
                            inputRepes.value = '';
                            inputPeso.value = '';
                        }

                        const getNextSerie=cambiarSerie(series);
                        const buttonNextSerie=newExcerciseContainer.querySelector(".boton-siguiente-serie");
                        buttonNextSerie?.addEventListener("click", () =>{
                
                            //mostrar siguiente serie
                            const siguienteSerie = getNextSerie();
                            const textoSeries=newExcerciseContainer.querySelector(".contenedor-serie");
                            if (siguienteSerie !== null) {
                                (textoSeries as any).textContent = siguienteSerie;
                                if ((textoSeries as any).textContent == series[3]){
                                    buttonNextSerie.textContent="Agregar serie extra";
                                    (buttonNextSerie as any).style.backgroundColor="white"
                                }
                            }

                            guardarDataEjercicios(nombreDelEjercicio,numeroDeSerie,inputRepes,inputPeso);
                        })
                        
                        const buttonExcerciseFinished=newExcerciseContainer.querySelector('.boton-ejercicio-terminado');
                        buttonExcerciseFinished?.addEventListener("click",()=>{
                            exerciseExpandable.style.display="none";
                            newExcercise.style.backgroundColor="rgb(107, 247, 107)"
                            newExcercise.style.borderBottomColor="green";
                            newExcercise.style.borderLeftColor="green";
                            guardarDataEjercicios(nombreDelEjercicio,numeroDeSerie,inputRepes,inputPeso);
                            state.guardarDatosEnBD();
                        })
                    });

                    
                });
            });
        });
    
        // Función de búsqueda
        function Search(query:string) {
            const data = localStorage.getItem('saved-excercises');
            const exercises = JSON.parse(data as any); // Parsear la cadena JSON a objeto JavaScript
            let exerciseList:{nombre:string,id?:number}[] = [];

            // Iterar sobre los nombres de los ejercicios y verificar si coinciden con la consulta
                for (const exercise in exercises.gymData) {
                    if (exercise.toLowerCase().includes(query)) {
                        const id = exercises.gymData[exercise].id;
                        const exerciseObj = {
                            nombre: exercise.charAt(0).toUpperCase() + exercise.slice(1),
                            id:id,
                        };
                        exerciseList.push(exerciseObj as never);
                    }
                }
            console.log(exerciseList);
            return exerciseList;
        }
        
        const divBuscador=document.querySelector('.contenedor-buscador');
        // Event listener para cerrar el buscador al hacer clic fuera de él
        document.addEventListener('click', (e) => {
        // Verificar si el clic ocurrió fuera del área del input de búsqueda y los resultados de búsqueda
            if ((e.target as any)!= divBuscador) {
                // Cerrar el buscador aquí
                (searchResults as any).innerHTML = ''; // Limpiar los resultados de búsqueda
                (searchInput as any).value = ''; // Limpiar el valor del input de búsqueda
            }
        });
    }
    await setupSearch(); 

    async function watchDateChange(){
        try{
            // Función para obtener la hora actual en formato de 24 horas (HH:MM)
            function getCurrentTime() {
                const now = new Date();
                const hours = now.getHours().toString().padStart(2, '0');
                const minutes = now.getMinutes().toString().padStart(2, '0');
                return `${hours}:${minutes}`;
            }

            // Función para verificar si es medianoche (00:00)
            function isMidnight() {
                return getCurrentTime() === '00:00';
            }

            // Función para actualizar el contenido del elemento
            async function updateContent() {
                const contenedorFecha = document.querySelector('.fecha');
                const containerIndicaciones= document.querySelector('.contenedor-agregar-ejercicio-indicaciones');
                
                const mainExcercises=document.querySelector(".contenedor-ejercicios-main");
                const children = (mainExcercises as any).children; // Obtén todos los hijos del contenedor
                // Itera sobre cada hijo
                for (let i = 0; i < children.length; i++) {
                    const child = children[i];
                    const computedStyle = window.getComputedStyle(child); // Obtiene los estilos computados del hijo

                    // Verifica si el color de fondo ha sido cambiado 
                    if (computedStyle.backgroundColor !== 'rgb(246, 244, 244)') {
                        (mainExcercises as any).removeChild(child); // Remueve el hijo del contenedor
                    }
                }
                //si no hay ejercicios pendientes en main, devuelve las indicaciones básicas
                if((mainExcercises as any).chilren==null) {
                    //colapsa el div contenedor de ejercicios
                    (mainExcercises as any).style.display = 'none';
                    //cambia el display "none" a flex del contenedor de indicaciones básicas
                    (containerIndicaciones as any).style.display="flex";
                };
                
                
                //actualiza la fecha
                const fecha = await state.getDate();
                const fechaTipada=fecha.lastDate.charAt(0).toUpperCase() + fecha.lastDate.slice(1);
                sessionStorage.setItem('saved-date', fechaTipada);
                (contenedorFecha as any).textContent = fechaTipada;
            }

            // Función para comprobar y actualizar el contenido si es medianoche
            function checkAndUpdateContent() {
                if (isMidnight()) {
                    updateContent();
                }
            }

            // Verificar y actualizar el contenido cada minuto
            setInterval(checkAndUpdateContent, 1000);
            //console.log("se ha cambiado la fecha correctamente")
        }catch (error) {
            console.error('Error al cambiar la fecha:', error);
        }
    }
    await watchDateChange();

    // Función para manejar el clic en el botón de monitoreo de músculos
    function handleMonitorMusculosClick() {
        const containerMainDataMonitor = document.querySelector(".main-data-monitor");
        const containerMainDataRutina = document.querySelector(".main-data");

        // Ocultar la página de rutinas y mostrar la página de monitoreo de músculos
        (containerMainDataRutina as any).style.display = "none";
        (containerMainDataMonitor as any).style.display = "block";
        initPageMonitor(containerMainDataMonitor);
        setInterval(muscleDamageChanger, 1000);
        showTime();
        
    }

    // Función para manejar el clic en el botón de volver a la página de rutinas
    function handleHomeClick() {
        const containerMainDataMonitor = document.querySelector(".main-data-monitor");
        const containerMainDataRutina = document.querySelector(".main-data");

        // Ocultar la página de monitoreo de músculos y mostrar la página de rutinas
        (containerMainDataMonitor as any).innerHTML = '';
        (containerMainDataMonitor as any).style.display = "none";
        (containerMainDataRutina as any).style.display = "block";
    }

    //boton para ir a la page de monitoreo de los músculos
    const botonMonitorMusculos=document.querySelector(".boton-tiempo-recuperacion");
    botonMonitorMusculos?.addEventListener('click', (e)=>{ 
        e.preventDefault();
        handleMonitorMusculosClick();
    }); 

    //boton para volver a la page rutinas
    const botonHome=document.querySelector(".boton-home");
    botonHome?.addEventListener('click', (e)=>{ 
        e.preventDefault();
        handleHomeClick();
    }); 
}