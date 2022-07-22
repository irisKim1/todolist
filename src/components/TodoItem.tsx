import { useCallback, useState } from 'react'
import { MdDelete, MdDone } from 'react-icons/md'
import todo from './Todo.module.css'
import { IList } from './TodoCreate'

const TodoItem = (props: { inputList: IList[] }) => {
  const { inputList } = props
  const [click, setClick] = useState<boolean>(false)
  const [remove, setRemove] = useState<boolean>(false)

  const onClick = useCallback(
    (e: any) => {
      setClick(!click)
    },
    [click]
  )

  const removeList = useCallback(
    (id: number) => {
      inputList.filter((item: IList) => item.id !== id)
    },
    [remove]
  )

  return (
    <div className={todo.itemBlock}>
      {inputList.length > 0 &&
        inputList.map((item: IList) => {
          return (
            <div key={item.id}>
              <button
                id="noncheck"
                className={todo.nonCheckBtn}
                onClick={onClick}
              >
                <label htmlFor="noncheck" className={todo.nonText}>
                  {item.text}
                </label>
              </button>
              {!click && (
                <button
                  id="checked"
                  className={todo.checkBtn}
                  onClick={onClick}
                >
                  <MdDone />
                  <label htmlFor="checked" className={todo.chkedText}>
                    {item.text}
                  </label>
                </button>
              )}
              <div
                className={todo.remove}
                onClick={() => {
                  removeList(item.id)
                }}
              >
                <MdDelete />
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default TodoItem
