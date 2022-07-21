import { useCallback, useRef, useState } from 'react'
import { MdAdd } from 'react-icons/md'
import todo from './Todo.module.css'

interface IList {
  type: string
  todo: {
    id: number
    text: string | null
    done: boolean
  }
}
const TodoCreate = () => {
  const [open, setOpen] = useState<boolean>(false)
  const [value, setValue] = useState<string>('')

  const listId = useRef<number>(0)

  let inputItems: string[] = []
  let inputList: IList[]

  const onToggle = (e: any) => setOpen(!open)
  const onChange = (e: any) => setValue(value)

  const onSubmit = useCallback(
    (e: any) => {
      //input value
      inputList = [
        ...inputList,
        {
          type: 'create',
          todo: {
            id: listId.current,
            text: value,
            done: false,
          },
        },
      ]
      listId.current += 1
      setOpen(false)
      setValue('')
    },
    [value]
  )

  return (
    <div className="absolute inset-x-0 bottom-0">
      {open ? (
        <>
          <form className={todo.inputForm} onSubmit={onSubmit}>
            <input
              className={todo.inputField}
              // onChange={onChange}
              // value={value}
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
  )
}

export default TodoCreate
