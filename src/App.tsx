import TodoCreate from './components/TodoCreate'
import TodoTemplate from './components/TodoTemplate'
import TodoTitle from './components/TodoTitle'

const App = () => {
  return (
    <TodoTemplate>
      <TodoTitle />
      <TodoCreate />
    </TodoTemplate>
  )
}

export default App
