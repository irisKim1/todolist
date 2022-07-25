import { useState } from 'react'
import todo from './Todo.module.css'
import { IList } from './TodoCreate'
import TodoItem from './TodoItem'

//상태변경 컴포넌트

const TodoList = (props: { inputList: IList[] }) => {
  const { inputList } = props
  const [toggle, setToggle] = useState<boolean>(false)
  const [list, setList] = useState<IList[]>(inputList)

  const onToggle = (id: number) => {
    //click시 해당 할일 상태 변경
    setList(
      list.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    )
    setToggle(!toggle)
  }
  const onRemove = (id: number) => {
    // click시 해당 할일 제거
    setList(list.filter((item) => item.id !== id))
  }

  return (
    <div className={todo.listBlock}>
      {list.map((item) => (
        <TodoItem
          todos={item}
          key={item.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  )
}

export default TodoList
