import todo from './Todo.module.css'

const TodoTitle = () => {
  const today = new Date()

  const dateString = today.toLocaleString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  const dayName = today.toLocaleString('ko-KR', { weekday: 'long' })

  return (
    <>
      <div className={todo.title}>To Do List</div>
      <div className={todo.head}>
        {dateString}
        <div className={todo.day}>{dayName}</div>
      </div>
    </>
  )
}

export default TodoTitle
