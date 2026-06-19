import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { useWindowWidth } from './hooks/useWindowWidth'
import MyRoutes from './routes/MyRoutes'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {

  return (
    <>
      <Router>
        <MyRoutes />
      </Router>
    </>
  )
}

export default App
