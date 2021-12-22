import { data } from "../Assets/data";

export const moverTasks = (taskClick, direction, inicio)=>{

    const nuevoArreglo = [...data]

    const filtro =  nuevoArreglo.map(v =>{
        if(v.title === inicio){
            v.tasks = v.tasks.filter(item => item !== taskClick)
        }

        return v
    })
    

    for (let i = 0; i < filtro.length; i++) {
        
        if(filtro[i].title === inicio){
            if(direction === 'right'){
                filtro[i+1].tasks = [...filtro[i+1].tasks, taskClick]
            }else{
                filtro[i-1].tasks = [...filtro[i-1].tasks, taskClick]

            }
        }
    }

   return filtro;
}
