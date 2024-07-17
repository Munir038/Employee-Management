import Header from './component/header/Header'
import Sidebar from './component/Sidebar/Sidebar'
import Path from './component/routes/Path'
import { Login } from './component/Login'
import Register from './component/Register';




function App() {
  return (
    <>

      {/* <Header /> */}

      <div className="d-flex">

        {/* <Sidebar /> */}
        <Path />

      </div>
    </>
  )
}

export default App
