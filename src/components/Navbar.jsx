import { useState } from 'react';
import Button from './Button';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <nav className='z-10 flex flex-row justify-around bg-white m-0 p-3 border-b border-black fixed w-screen'>

      
         <div className='flex flex-row justify-between gap-7 items-center' >
          <div className='h-10 w-10 bg-pink border-black border rounded-full '></div>
          <h2>Developer & Designer</h2>
         </div>

         <div className='hidden md:flex  flex-row justify-between gap-7  items-center'>
           <Button text="Certifications"/>
           <Button text="Contact Me"/>
           <Button text="My Projects"/>
         </div>

         <button 
         className='md:hidden'
         onClick={toggleMenu}>
          <div className="space-y-1">
              <span className="block w-6 h-0.5 bg-black"></span>
              <span className="block w-6 h-0.5 bg-black"></span>
              <span className="block w-6 h-0.5 bg-black"></span>
            </div>
         </button>
      
        {/* menu desplegable */}
        <div
        className={`
        fixed inset-0 flex flex-col items-center justify-center bg-white 
        transition-transform transform 
          ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
         `}
        >
          <div className='flex flex-col justify-between gap-7  items-center'>
            <Button text="Certifications"/>
            <Button text="Contact Me"/>
            <Button text="My Projects"/>
          </div>

          <button
          className='absolute top-3 right-14'
           onClick={toggleMenu}>
              <div class="flex items-center justify-center w-16 h-16 bg-transparent">
                <div class="w-7 h-0.5 rotate-45 bg-black"></div>
                <div class="w-0.5 h-7 rotate-45 bg-black absolute"></div>
              </div>
           </button>



        </div>


    </nav>
  );
};

export default Navbar;


// className={`
//   fixed inset-0 flex flex-col items-center justify-center bg-white 
// transition-transform transform 
//   ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
//  `}
// style={{ transition: 'transform 0.5s, opacity 0.5s' }}