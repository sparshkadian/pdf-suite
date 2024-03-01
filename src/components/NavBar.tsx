import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='fixed w-full h-[50px] p-2'>
      <Link to='/' className='flex items-center gap-1'>
        <img src='./pdf.png' alt='logo' width={15} />
        <h2 className='navbar__text'>PDF Suite</h2>
      </Link>
    </div>
  );
};

export default NavBar;
