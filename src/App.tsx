import { Route, Routes } from 'react-router-dom'
import Sidemenu from './components/Sidemenu'
import Topbar from './components/Topbar'
import Home from './pages/Home'
import Notfound from './pages/Notfound'
import Product from './pages/Product'
import User from './pages/User'

function App() {
  return (
    <>
      <div className='flex'>
        <div className="sticky">
          <Sidemenu />
        </div>
        <div className="main w-full">
          <div className="sticky top-0 w-full">
            <Topbar />
            {/* ! kaam garena ta */}
          </div>
          <div className="main-content pt-8 px-8">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/product'>
                <Route index element={<Product />} />
                {/* <Route path=':id' element={} /> */}
              </Route>
              <Route path='/user' element={ <User /> } />
              <Route path='*' element={ <Notfound /> } />
            </Routes>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
