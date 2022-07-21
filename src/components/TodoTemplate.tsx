import todo from './Todo.module.css'

const TodoTemplate = ({ children }: any) => {
  return (
    <body>
      <div className={todo.template_box}>{children}</div>
    </body>
  )
}
export default TodoTemplate
