import { useMemo, useRef, useState } from 'react'
import { MdAdd } from 'react-icons/md'
import todo from './Todo.module.css'
import TodoItem from './TodoItem'

export interface IList {
  id: number
  text: string | null
  done: boolean
}
const TodoCreate = () => {
  const [open, setOpen] = useState<boolean>(false)
  const [list, setList] = useState<[]>([])

  const listId = useRef<number>(0)
  let inputList: IList[] = list
  const onToggle = () => {
    setOpen(!open)
  }

  const onSubmit = (e: any) => {
    e.preventDefault()
    const doc = document as any
    const todos = doc.getElementById('todo').value
    //input value
    inputList = [
      ...inputList,
      {
        id: listId.current,
        text: todos,
        done: false,
      },
    ]
    listId.current += 1
    setOpen(open)
    console.log(inputList)
  }

  const leftTask = useMemo(
    () => <div className={todo.task}>{inputList.length}</div>,
    [inputList]
  )

  return (
    <>
      {/* {leftTask} */}
      {inputList.length && <TodoItem inputList={inputList} />}

      <div className="absolute inset-x-0 bottom-0">
        {open ? (
          <>
            <form className={todo.inputForm} onSubmit={onSubmit}>
              <input
                autoFocus
                id="todo"
                className={todo.inputField}
                placeholder="Write what to do, and Press the Enter"
              />
            </form>
            <button className={todo.xBtn} onClick={onToggle}>
              <MdAdd />
            </button>
          </>
        ) : (
          <button className={todo.plusBtn} onClick={onToggle}>
            <MdAdd />
          </button>
        )}
      </div>
    </>
  )
}

export default TodoCreate
