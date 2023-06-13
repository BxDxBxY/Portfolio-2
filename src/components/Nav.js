import React from 'react';
import { BiHomeAlt, BiUser } from 'react-icons/bi'
import { BsBriefcase, BsChatSquare, BsChatSquareText, BsClipboardData } from 'react-icons/bs'
import { Link } from 'react-scroll'

const Nav = () => {
  return <nav className='bottom-2 lg:bottom-8 fixed w-full overflow-hidden z-50'>
    <div className='container mx-auto '>
      <div className='w-full rounded-full mx-auto max-w-[460px] bg-black/20 backdrop-blur-2xl items-center h-[96px] px-5 flex justify-between text-2xl text-white/50'  >
        <Link to='home' offset={-200} activeClass='active' spy={true} smooth={true} className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center '>
          <BiHomeAlt />
        </Link>
        <Link to='about' activeClass='active' spy={true} smooth={true} className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center '>
          <BiUser />
        </Link>
        <Link to='services' activeClass='active' spy={true} smooth={true} className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center '>
          <BsClipboardData />
        </Link>
        <Link to='work' activeClass='active' spy={true} smooth={true} className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center '>
          <BsBriefcase />
        </Link>
        <Link to='contact' activeClass='active' spy={true} smooth={true} className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center '>
          <BsChatSquareText />
        </Link>
      </div>
    </div>
  </nav>;
};

export default Nav;
