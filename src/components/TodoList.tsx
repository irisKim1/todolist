import todo from './Todo.module.css'
import TodoItem from './TodoItem'

const TodoList = () => {
  const todoList: [] = []

  return (
    <div className={todo.listBlock}>
      <TodoItem inputList={todoList} />
    </div>
  )
}

export default TodoList
