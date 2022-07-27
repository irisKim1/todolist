import { Dispatch, SetStateAction, useState } from 'react'
import todo from './Todo.module.css'
import { IList } from './TodoCreate'
import TodoItem from './TodoItem'

//상태변경 컴포넌트

const TodoList = (props: {
  inputList: IList[]
  setInputList: Dispatch<SetStateAction<IList[]>>
}) => {
  const { inputList, setInputList } = props
  const [toggle, setToggle] = useState<boolean>(false)
  // const [list, setList] = useState<IList[]>(inputList)

  const onToggle = (id: number) => {
    // list.concat(inputList)
    //click시 해당 할일 상태 변경
    setInputList(
      inputList.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    )
    setToggle(!toggle)
  }
  const onRemove = (id: number) => {
    // list.concat(inputList)
    // click시 해당 할일 제거
    setInputList(inputList.filter((item) => item.id !== id))
  }

  return (
    <div className={todo.listBlock}>
      <div className={todo.task}>
        할 일 {inputList.filter((item) => !item.done).length}개 남음
      </div>
      {inputList.map((item) => (
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
