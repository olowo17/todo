import React from 'react'
import Todo from './models/Todo'
import Todos from './Todos'


interface DisplayTodoProps {
  todos: Todo[]
  onDeleteTodo: (id: string) => void
}

const DisplayTodo: React.FC<DisplayTodoProps> = ({ todos, onDeleteTodo }) => {

  const handleTodoDelete = (id: string) => {
    onDeleteTodo(id)
  }

  return (
    <ul>
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="bg-gray-200 text-black font-mono py-1 text-left ps-2 w-1/2 mt-2"
          onDoubleClick={() => handleTodoDelete(todo.id)}
        >
          {todo.text}
        </li>
      ))}
    </ul>
  )
}

export default DisplayTodo


