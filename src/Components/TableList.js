import React, { useContext } from 'react'
import { DataContext } from '../Context/DataContext';
import { moverTasks } from '../helpers/moverTasks';

export const TableList = ({data}) => {

    const {title, tasks} = data; 
    
    const {setTasks} = useContext(DataContext)

    const moverDato = (e)=>{
        const direction = e.target.dataset.id;
        const task = e.target.parentElement.dataset.name;
        const datos =  moverTasks(task, direction, title)
        setTasks(datos)
    }

    return (
           
        <div className="taskList">
            <div className='taskList__title'>
                <h2 >{title}</h2>
            </div>
            <div className='taskContainer'>
                <ul className='taskContainer__list'>
                    {
                        tasks.map(task =>
                            <li  key={task} className='taskContainer__item'>{task}
                                <span className='arrows' data-name={task}>
                                    <button                                                  
                                        className={`arrow bx bx-left-arrow-alt ${(title === 'Backlog'?'arrows--disabled':'arrows--active')  }  `}
                                        data-id='left'
                                        onClick={moverDato}
                                        disabled={(title === 'Backlog')?true:false}
                                    ></button>
                                    <button 
                                        className={`arrow bx bx-right-arrow-alt ${(title === 'Done'?'arrows--disabled':'arrows--active')  }`}
                                        data-id='right'
                                        onClick={moverDato}
                                        disabled={(title === 'Done')?true:false}
                                    ></button>
                                </span> 
                            </li>                                      
                        )
                    }
                </ul>
            </div>
        </div>
    )
}
