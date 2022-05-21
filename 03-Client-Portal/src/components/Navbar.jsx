import React, {useEffect} from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import {FiShoppingCart} from 'react-icons/fi'
import {BsChatLeft} from 'react-icons/bs'
import { RiNoifications3Line, RiNotification3Line} from 'react-icons/ri'
import {MdKeyboardArrowDown} from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'

import avatar from '../data/avatar.jpg'
import {Cart, Chat, Notification, UserProfile} from '.'

import { useStateContext } from '../context/ContextProvider'

const Navbar = () => {
  const {activeMenu, setActiveMenu, handleClick} = useStateContext()

  const NavButton = ({title, customFunc, icon, color, dotColor}) => (
    <TooltipComponent content={title} position="BottomCenter">
      <button type="button" onClick={customFunc}
      style={{color}}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
      >
        <span stlye={{background: dotColor}} className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2">
        {icon}
        </span>
      </button>
    </TooltipComponent>
  )

  return (
    <div className='flex justify-between p2 md:mx-6 relative'>
      <NavButton title="Menu" customFunc={() => setActiveMenu((previousActiveMenu) => !previousActiveMenu )} color="blue" icon={<AiOutlineMenu/>}/>
    
    <div className='flex'>

      <NavButton 
        title="Cart" 
        customFunc={() => handleClick('cart')} 
        color="blue" 
        icon={<FiShoppingCart/>}
      />

      <NavButton 
        title="Chat" 
        dotColor="#03C9D7"
        customFunc={() => handleClick('chat')} 
        color="blue" 
        icon={<BsChatLeft/>}
      />

      <NavButton 
        title="Noitifications" 
        dotColor="#03C9D7"
        customFunc={() => handleClick('notification')} 
        color="blue" 
        icon={<RiNotification3Line/>}
      />
    
     <TooltipComponent content="Profile" position="BottomCenter">
       <div className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
     onClick={() => handleClick('userProfile')}>

        <img className="rounded-full w-8 h-8" src={avatar} alt="avatar"/>
     </div>
     </TooltipComponent>

    </div>
    
    </div>
  )
}

export default Navbar