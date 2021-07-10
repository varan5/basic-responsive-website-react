import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from '../src/components/Navbar/Navbar'
import './App.css'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" />
      </Switch>
    </Router>
  )
}

export default App
