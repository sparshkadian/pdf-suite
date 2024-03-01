import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();
  return (
    <div className='ml-2 mt-2 absolute w-[50px] h-[40px] p-2 z-[1]'>
      <Link to='/' className='w-full'>
        <img
          src='./home.png'
          alt='home'
          width={25}
          className={`navbar__text ${
            location.pathname === '/' ? 'hidden' : 'block'
          }`}
        />
      </Link>
    </div>
  );
};

export default NavBar;
