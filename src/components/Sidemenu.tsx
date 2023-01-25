import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BiHomeAlt, BiTrendingUp, BiChevronDown } from 'react-icons/bi'
import { CgMenuLeft } from 'react-icons/cg'
import { BsPersonCircle } from 'react-icons/bs'

const Sidemenu = () => {
  const [isClicked, setisClicked] = useState(false)

  const [isOpen, setIsOpen] = useState(true)
  console.log(`isOpen : ${isOpen}`)
  useEffect(() => {
    window.localStorage.setItem('MENU_STATE', JSON.stringify(isOpen))
  }, [isOpen])

  useEffect(() => {
    const data = JSON.parse(window.localStorage.getItem('MENU_STATE') as any)
    if (data) {
      setIsOpen(data)
    }
    console.log('data : ' + data)
  })
  return (
    <>
      <div className={`${isOpen ? 'w-72' : 'w-fit'} bg-light-grey px-5 py-6 min-h-screen space-y-5 duration-200`}>
        <div className='flex gap-1 items-center'>
          <div
            className='cursor-pointer p-2 rounded duration-200 hover:text-indigo-600 hover:bg-indigo-200'
            onClick={() => setIsOpen(!isOpen)}
          >
            <CgMenuLeft className='text-indigo-' size={22} />
          </div>
          <h5 className={`${isOpen ? 'block' : 'hidden'} duration-200 pl-2 text-indigo-900`}>Dashboard</h5>
        </div>

        <div className=''>
          <ul>
            <li>
              <Link to='/'>
                <div className='side-link'>
                  <div className='side-link-title'>
                    <BiHomeAlt className='text-indigo-700' size={22} />
                    <span className={`${isOpen ? 'block' : 'hidden'} duration-200`}>Home</span>
                  </div>
                </div>
              </Link>
            </li>

            <li>
              <Link to='/product'>
                <div className='side-link'>
                  <div className={`side-link-title`}>
                    <BiTrendingUp className='text-indigo-700' size={22} />
                    <span className={`${isOpen ? 'block' : 'hidden'} duration-200`}>Products</span>
                  </div>
                </div>
              </Link>
            </li>

            <li>
              <div className='side-link'>
                <div className={`side-link-title`}>
                  <BiTrendingUp className='text-indigo-700' size={22} />
                  <span className={`${isOpen ? 'block' : 'hidden'} duration-200`}>Sales</span>
                </div>
              </div>
            </li>

            <li>
              <Link to='/user'>
                <div className='side-link'>
                  <div className={`side-link-title`}>
                    <BsPersonCircle className='text-indigo-700' size={22} />
                    <span className={`${isOpen ? 'block' : 'hidden'} duration-200`}>User</span>
                  </div>
                </div>
              </Link>
            </li>

            <li>
              <div
                className='space-y-1'
                onClick={() => setisClicked(!isClicked)}
              >
                <div className='side-link'>
                  <div className='side-link-title'>
                    <BiTrendingUp className='text-indigo-700' size={22} />
                    <span className={`${isOpen ? 'block' : 'hidden'} duration-200`}>Sales</span>
                  </div>
                  <div className={`${isClicked ? 'rotate-180' : 'rotate-0'} ${isOpen ? 'block' : 'hidden'} duration-200`}>
                    <BiChevronDown className='' size={22} />
                    {/* I don't know what to write in here */}
                  </div>
                </div>
              </div>
              <div className={`${isClicked ? 'w-full block' : 'w-0 hidden'} duration-200`}>
                <ul className='space-y-1 ml-7'>
                  <li className='side-link-content'>Product Lists</li>
                  <li className='side-link-content'>Orders</li>
                  <li className='side-link-content'>Stock</li>
                  <li className='side-link-content'>History</li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Sidemenu
