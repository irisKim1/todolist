import { useRef, useState } from 'react'
import { MdAdd } from 'react-icons/md'
import todo from './Todo.module.css'
import TodoList from './TodoList'

export interface IList {
  id: number
  text: string | null
  done: boolean
}

const TodoCreate = () => {
  const [open, setOpen] = useState<boolean>(false)
  const [item, setItem] = useState<string>('')
  const [inputList, setInputList] = useState<IList[]>([])

  const listId = useRef<number>(0)

  const onPlusToggle = () => {
    setOpen(!open)
  }

  const handleChange = (e: any) => {
    setItem(e.target.value)
  }

  const onSubmit = (e: any) => {
    e.preventDefault()
    setInputList([
      ...inputList,
      {
        id: listId.current,
        text: item,
        done: false,
      },
    ])
    listId.current += 1
    console.log(inputList)

    if (!item) {
      alert('입력해주세요.')
    } else {
      setItem('')
    }
  }

  return (
    <div className="absolute inset-x-0 bottom-0">
      {inputList.length && <TodoList inputList={inputList} />}
      {open ? (
        <>
          <form className={todo.inputForm} onSubmit={onSubmit}>
            <input
              autoFocus
              className={todo.inputField}
              onChange={handleChange}
              value={item}
              placeholder="Write what to do, and Press the Enter"
            />
          </form>
          <button className={todo.xBtn} onClick={onPlusToggle}>
            <MdAdd />
          </button>
        </>
      ) : (
        <button className={todo.plusBtn} onClick={onPlusToggle}>
          <MdAdd />
        </button>
      )}
    </div>
  )
}

export default TodoCreate
