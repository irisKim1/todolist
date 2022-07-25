import todo from './Todo.module.css'

const TodoTemplate = ({ children }: any) => {
  return <div className={todo.template_box}>{children}</div>
}
export default TodoTemplate
