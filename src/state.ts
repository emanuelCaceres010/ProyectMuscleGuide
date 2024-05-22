const state={
    data:{
        usuarios:[]   
    },
    listeners:[],
    init(){
        const localData=localStorage.getItem("saved-state");
        this.setState(JSON.parse(localData as any));
    },
    getState(){
        return this.data;
    },
    getUser(){
        const data=this.getState();
        return data;
    },
    crearUsuarios(email:string, nombre:string, password:string):Promise<any>{
        const cs=this.getState();
        cs.usuarios.push({nombre:nombre, password:password});
        this.setState(cs)
        const dataToPost={email:email, nombre:nombre, password:password};
        return fetch("http://localhost:3000/signup",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(dataToPost)
        }).then(response => response.json())
        .then(data => {
            console.log(data);
            localStorage.setItem('saved-id', JSON.stringify(data.id));
            localStorage.setItem('saved-state', JSON.stringify(data));
        })
        .catch(error => console.error('Error:', error));
    },
    logIn(email:string, password:string): Promise<any> {
        return fetch(`http://localhost:3000/users?email=${email}&password=${password}`)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Error al obtener los datos del usuario');
            }
        })
        .then(data => {
            // Guardar los datos del usuario en el estado y en el localStorage
            this.setState(data);
            localStorage.setItem('saved-id', JSON.stringify(data.id));
            localStorage.setItem('saved-state', JSON.stringify(data));
            return data;
        })
        .catch(error => {
            console.error('Error:', error);
            throw error; // Re-lanzar el error para que pueda ser manejado externamente
        });
    },
    async getDate() {
        try {
            await state.setDate();
    
            let userId = localStorage.getItem('saved-id');
            userId = (userId as any).replace(/^"|"$/g, '');
            const response = await fetch("http://localhost:3000/users/" + userId+"/dates");
    
            if (!response.ok) {
                throw new Error("Failed to fetch date from user's dates array");
            }
    
            const data = await response.json();
            console.log(data);
            return data;
        } catch (error) {
            // Maneja cualquier error ocurrido durante las llamadas a los endpoints
            console.error("Error:", error);
            throw error; // Lanza el error para que pueda ser manejado externamente
        }
    },
    async setDate() {
        let userId = localStorage.getItem('saved-id');
        userId = (userId as any).replace(/^"|"$/g, '');
        try {
            const response = await fetch(`http://localhost:3000/users/${userId}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                }
            });
    
            if (!response.ok) {
                throw new Error("Failed to fetch date from user's dates array");
            }
    
            // Espera a que se complete la solicitud y devuelve los datos
            return response.json();
        } catch (error) {
            // Maneja cualquier error ocurrido durante las llamadas a los endpoints
            console.error("Error:", error);
            throw error; // Lanza el error para que pueda ser manejado externamente
        }
    },
    getExcercises(): Promise<any> {
        return fetch(`http://localhost:3000/ejercicios/hQTmFcZCqFBBkrvyvERG`)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Error al obtener los datos');
            }
        })
        .then(data => {
            // Guardar los datos del usuario en el estado y en el localStorage
            localStorage.setItem('saved-excercises', JSON.stringify(data));
            return data;
        })
        .catch(error => {
            console.error('Error:', error);
            throw error; // Re-lanzar el error para que pueda ser manejado externamente
        });
    },
    async guardarDatosEnBD() {
        let userId =localStorage.getItem('saved-id');
        userId = (userId as any).replace(/^"|"$/g, '');
        const data=localStorage.getItem('ejercicios-hechos');
        try {
            const response = await fetch("http://localhost:3000/users/"+userId+"/dates", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: data,
            });
    
            if (!response.ok) {
                const errorMessage = await response.text();
                throw new Error(`Error al agregar ejercicio: ${errorMessage}`);
            }
    
            const responseData = await response.json();
            console.log(responseData.message);
        } catch (error) {
            console.error('Error al realizar la petición:', error);
        }
    },
    addTasks(id, title){
        const currentState=state.getState();
        currentState.tasks.push({id, title, completed:false});
        this.setState(currentState);
    },
    changeItemState(id, value){
        const currentState=state.getState();
        currentState.tasks.find((t)=>t.id==id).completed=value;
        this.setState(currentState);
    },
    setState(newState){
        this.data=newState;
        for (const cb of this.listeners) {
            cb(newState);
        }
        localStorage.setItem('saved-state', JSON.stringify(newState));
    },
    suscribe(callback:(any)=>any){
        this.listeners.push(callback);
    },
};

export{state};
