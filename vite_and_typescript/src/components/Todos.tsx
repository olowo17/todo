import React from 'react'
import {useRef} from 'react'

const Todos: React.FC < {
    onAddNewTodo: (text : string) => void
} > = (props) => {
    const newTodoInput = useRef < HTMLInputElement > (null)

    const HandleSubmit = (e : React.FormEvent) => {
        e.preventDefault()

        const enteredText = newTodoInput.current !.value

        if (enteredText ?. trim().length === 0) {
            return
        }

        props.onAddNewTodo(enteredText)

        newTodoInput.current !.value = ''


    }


    return (
        <form onSubmit={HandleSubmit}
            className=' w-full max-w-sm '>
            <h1 className='text-2xl font-mono text-center'>New Todo</h1>
            <div className='border-b border-teal-500 py-2'>

                <input className="text-xl bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none " id='course-input' placeholder='todo name'
                    ref={newTodoInput}/></div>
            <button type='submit' className='bg-teal-500 p-2  hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded mt-2'>
                Add course
            </button>
        </form>
    )
}

export default Todos
