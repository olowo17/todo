import {useState} from 'react'
import './App.css'
import Todo from './components/models/Todo'
import Todos from './components/Todos'
import DisplayTodo from './components/DisplayTodo'

function App() {
    const [todo, setTodo] = useState < Todo[] > ([])
    const addTodoHandler = (addTodo : string) => {
        const newTodo = new Todo(addTodo)

        setTodo((prev) => {
            return prev.concat(newTodo)

        })


    }

    const deleteHandler = (id : string) => {
        setTodo((prev) => prev.filter(todo => todo.id !== id))

    }


    return (
        <div className="App justify-center font-mono">
            <h1 className='bg-teal-500 text-center text-2xl text-white'>Hello world</h1>
            <main className='justify-center w-1/2 m-auto'>

                <Todos onAddNewTodo={addTodoHandler}/>
                <DisplayTodo todos={todo}
                    onDeleteTodo={deleteHandler}/>
            </main>
        </div>
    )
}

export default App
