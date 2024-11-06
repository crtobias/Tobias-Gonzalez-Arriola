import { useState } from 'react';
import Button from './Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='flex flex-row justify-around bg-white m-0 p-3 border-b border-black '>

      <div className='flex flex-row justify-between gap-7 items-center' >
        <div className='h-10 w-10 bg-pink border-black border rounded-full '></div>
        <h2>Title</h2>
      </div>

      <div className='flex flex-row justify-between gap-7  items-center'>
       <Button text="Button 1"/>
       <Button text="Button 2"/>
       <Button text="Button 3"/>
      </div>

    </nav>
  );
};

export default Navbar;