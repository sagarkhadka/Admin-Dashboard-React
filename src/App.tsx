import Sidemenu from './components/Sidemenu'
import Topbar from './components/Topbar'

function App() {
  return (
    <>
      <div className='flex'>
        <Sidemenu />
        <div className="main">
          <div className="fixed top-0 w-full">
            <Topbar />
          </div>
          <div className="main-content pt-20 px-8">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quibusdam quisquam sapiente quasi non placeat laudantium magni possimus, aperiam perspiciatis culpa eligendi earum temporibus totam voluptatem cum nesciunt.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
