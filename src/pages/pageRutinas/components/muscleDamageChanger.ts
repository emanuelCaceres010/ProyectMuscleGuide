export function muscleDamageChanger(){
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
    const excercisesFinished=localStorage.getItem("ejercicios-hechos");
    for(const muscle of muscleList){
        if(excercisesFinished){
            JSON.parse(excercisesFinished).forEach(change=>{
                if(change.nombreDelEjercicio.id == muscle.id ){
                    let muscleContainer=document.getElementsByName(muscle.reference);
                    let now=new Date().getTime();
                    let firstTime=change.date + 10000;
                    let midTime=change.date + 10000;
                    let thirdTime=change.date + 20000;
                    
                    if( now < firstTime ){
                        (muscleContainer as any).forEach(muscle=>{
                            (muscle as any).style.fill="rgb(248, 87, 87)";
                        })  
                    }else if( now >= firstTime && now <thirdTime ){
                        (muscleContainer as any).forEach(muscle=>{
                            (muscle as any).style.fill="rgb(253, 248, 105)";
                        })
                    }else if( now >= thirdTime && now < thirdTime+10000){
                        (muscleContainer as any).forEach(muscle=>{
                            (muscle as any).style.fill="rgb(108, 253, 105)";
                        })
                    }else{
                        (muscleContainer as any).forEach(muscle=>{
                            (muscle as any).style.fill="rgb(251, 251, 251)";
                        })
                    }         
                }
            })
        }
    }   
};
