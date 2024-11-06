import { useState } from 'react';
import Button from './Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='flex flex-row justify-around'>
      <div className='flex flex-row justify-between gap-7' >
        <h2>Title</h2>
        <div></div>
      </div>
      <div className='flex flex-row justify-between gap-7 '>
       <Button text="Button 1"/>
       <Button text="Button 2"/>
       <Button text="Button 3"/>
      </div>
    </nav>
  );
};

export default Navbar;