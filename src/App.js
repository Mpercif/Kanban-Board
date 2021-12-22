import { useState } from 'react';

import {data} from './Assets/data'
import {DataContext} from './Context/DataContext'
import { TableTask } from './Components/TableTask';

function App() {

  const [tasks, setTasks] = useState(data)

  return (
    <DataContext.Provider value={{tasks, setTasks}}>

      <section className="header">Kanban Board</section>
      <TableTask />

    </DataContext.Provider>

  );
}

export default App;
