import { useState } from 'react'
import { BiHomeAlt, BiChevronDown, BiTrendingUp } from 'react-icons/bi'

interface state {
  first: boolean
  second: boolean
}

const Sidemenu = () => {
  // const [isClicked, setisClicked] = useState({
  //   first: false,
  //   second: false,
  // })
  const [isClicked, setisClicked] = useState(false)
  console.log(isClicked)
  return (
    <>
      <div className='bg-light-grey px-5 py-6 min-h-screen w-96 space-y-5'>
        <h4 className='pl-2 text-indigo-900'>Dashboard</h4>
        <div className=''>
          <div className='side-link'>
            <div className='side-link-title'>
              <BiHomeAlt size={22} />
              <span>Home</span>
            </div>
          </div>

          <div>
            <div
              className='space-y-1'
              onClick={() => setisClicked(!isClicked)}
            >
              <div className='side-link'>
                <div className='side-link-title'>
                  <BiTrendingUp size={22} />
                  <span>Sales</span>
                </div>
                <div className={`${isClicked ? 'rotate-180' : 'rotate-0'} duration-200`}>
                  <BiChevronDown size={22} />
                </div>
              </div>
            </div>
            <div className={`${isClicked ? 'h-full opacity-100' : 'h-0 opacity-0'} duration-200`}>
              <ul className='space-y-1 ml-7'>
                <li className='side-link-content'>Product Lists</li>
                <li className='side-link-content'>Orders</li>
                <li className='side-link-content'>Stock</li>
                <li className='side-link-content'>History</li>
              </ul>
            </div>
          </div>

          <div>
            <div
              className='space-y-1'
              onClick={() => setisClicked(!isClicked)}
            >
              <div className='side-link'>
                <div className='side-link-title'>
                  <BiTrendingUp size={22} />
                  <span>C.R.M</span>
                </div>
                <div className={`${isClicked ? 'rotate-180' : 'rotate-0'} duration-200`}>
                  <BiChevronDown size={22} />
                </div>
              </div>
            </div>
            <div className={`${isClicked ? 'opacity-100' : 'opacity-0'} duration-200`}>
              <ul className='space-y-1 ml-7'>
                <li className='side-link-content'>F.A.Qs</li>
                <li className='side-link-content'>Blogs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidemenu
