import React from 'react'
import { NavLink,Link } from 'react-router-dom'
import { FaShoppingBag,FaUser,FaSignInAlt,FaSignOutAlt } from "react-icons/fa";
import { useSelector,useDispatch } from 'react-redux';
import { logout,reset } from '../../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import EagleNiche from '../../assets/EagleNiche.PNG'


const Header = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const {user}=useSelector((state)=>state.auth)

  const onLogOut=()=>{
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)


const navigation = [
  { name: 'About us', href: '/about-us' },
  { name: 'Contact', href: '/contact-us' },
  { name: 'Categories', href: '/category' },

]


  return (
    <header className="absolute inset-x-0 top-0  z-50 ">
    <nav aria-label="Global" className="flex items-center justify-between p-4 lg:px-8">
      <div className="flex lg:flex-1">
        <a href="/" className="-m-1.5 p-1.5">
          <span className="sr-only">Your Company</span>
          <img
            alt=""
            src={EagleNiche}
            className="h-16 w-auto"
          />
        </a>
      </div>
      <div className="flex lg:hidden">
        <button
          type="button"
          onClick={() => setMobileMenuOpen(true)}
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon aria-hidden="true" className="size-6" />
        </button>
      </div>
      <div className="hidden lg:flex lg:gap-x-12">
        {navigation.map((item) => (
          <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-gray-900">
            {item.name}
          </a>
        ))}
      </div>
      {user?(    
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <button onClick={onLogOut} className="text-sm/6 font-semibold text-slate-900">
          Logout <span aria-hidden="true">&rarr;</span>
        </button>
      </div>
    ):(
      <>
      <div className="hidden lg:flex lg:flex-1 lg:justify-end">
      <a href="/register" className="text-sm/6 font-semibold text-gray-900">
        Register-Now
      </a>
    </div>
     <div className="ml-3">
        <a href="/login" className="text-sm/6 font-semibold text-gray-900">
          Log in
        </a>
      </div>
    </>
    )}
      
 
    </nav>
    <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                {user?(    
     <div className="py-6">
     <button
       onClick={onLogOut}
       className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
     >
       LogOut
     </button>
   </div>
    ):(
      <>
     <div className="py-6">
                  <a
                    href="/login"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
                <div className="py-6">
                  <a
                    href="/register"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                   Register Now
                  </a>
                </div>
    </>
    )}
              </div>
            </div>
          </DialogPanel>
        </Dialog>
  </header>
  )
}
   

export default Header
