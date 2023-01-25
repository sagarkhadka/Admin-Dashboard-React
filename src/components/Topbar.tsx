import { BiSearch, BiBell } from 'react-icons/bi'
import { BsPersonCircle } from 'react-icons/bs'

const Topbar = () => {
  return (
    <>
      <nav className='px-6 py-2 w-full border-b'>
        <div className='flex items-center justify-between'>
          <label className='relative block'>
            <span className='sr-only'>Search</span>
            <span className='absolute inset-y-0 left-0 flex items-center pl-2'>
              <BiSearch size={22} className='text-indigo-600' />
            </span>
            <input
              className='placeholder:normal-case placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1 sm:text-sm'
              placeholder='Search for anything...'
              type='text'
              name='search'
            />
          </label>
          <div className="flex items-center gap-3">
            <div className='p-2 rounded-full relative text-indigo-500 cursor-pointer duration-200 transition-colors hover:bg-indigo-100 hover:text-indigo-600'>
              <BiBell size={22} />
              <div className='bg-fail h-1.5 w-1.5 rounded absolute top-2 right-2.5' />
            </div>

            <div className='p-2 rounded-full text-indigo-500 cursor-pointer duration-200 transition-colors hover:bg-indigo-100 hover:text-indigo-600'>
              <BsPersonCircle size={22} />
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Topbar
