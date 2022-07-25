import { MdDelete, MdDone } from 'react-icons/md'
import todo from './Todo.module.css'
import { IList } from './TodoCreate'

const TodoItem = (props: { todos: IList; onRemove: any; onToggle: any }) => {
  const { id, text, done } = props.todos
  const { onRemove, onToggle } = props

  return (
    <div className={todo.itemBlock}>
      {done ? (
        <>
          <div className={todo.checkBtn} onClick={() => onToggle(id)}>
            {done && <MdDone />}
          </div>
          <div className={todo.chkedText}>{text}</div>
        </>
      ) : (
        <>
          <div className={todo.nonCheckBtn} onClick={() => onToggle(id)}></div>
          <div className={todo.nonText}>{text}</div>
        </>
      )}
      <div className={todo.remove} onClick={() => onRemove(id)}>
        <MdDelete />
      </div>
    </div>
  )
}

export default TodoItem
