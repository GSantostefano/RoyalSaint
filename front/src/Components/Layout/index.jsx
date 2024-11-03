// Layout.jsx
const Layout = ({ children }) => {
  return (
    <div className='flex flex-col items-center text-pretty bg-white  text-black mt-24 w-full'>
      {/* <div className="flex items-center fixed border-t  border-red-600 w-3/4 mb-5"></div> */}
      
      <div className="flex flex-col items-center flex-grow items-left w-full bg-gray-50">
        {children}
      </div>
      
    </div>
  )
}

export default Layout;
