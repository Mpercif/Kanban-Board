import React, { useContext } from 'react'
import { DataContext } from '../Context/DataContext'
import { TableList } from './TableList'

export const TableTask = () => {

    const {tasks} = useContext(DataContext)

    return (
        <div className='container'>
            {
                tasks.map(item=> <TableList key={item.title} data={item} /> )
            }
        </div>
    )
}
