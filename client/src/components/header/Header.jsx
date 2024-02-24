import { Avatar, Button, Dropdown, Navbar } from 'flowbite-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import { signoutSuccess } from '../../redux/user/userSlice';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { encodeBase64 } from 'bcryptjs';
import Dropdownn from './Dropdownn';
import './Header.css'
import Dropcabin from './Dropcabin';

export default function Header() {
  const path = useLocation().pathname;
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const [categories, setCategories] = useState([]);

  const [searchTerm, setSearchTerm] = useState('');
useEffect(() => {
  const fetchCategories = async () => {
      try {
        const res = await axios.get('/api/categories/getcategories');
        if (res.status === 200) {
          setCategories(res.data);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  const handleSignout = async () => {
    try {
      const res = await fetch('/api/user/signout', {
        method: 'POST',
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  return (
    <>
    <Navbar className='mr-0' >
      <Link
        to='/'>
      
      <h1 className="text-lg sm:text-xl md:text-3xl"> <b style={{color:'#D294BB'}}>Mind</b>span</h1>
      </Link>
      <form onSubmit={handleSubmit} className="flex items-center">
  <div className="relative">
    <input
      type='text'
      placeholder='Search...'
      className='lg:inline lg:w-full w-full md:w-3/4 sm:w-1/4 px-2 py-1 md:px-3 md:py-2 sm:px-4 sm:py-3 bg-gray-100 rounded-md focus:outline-none focus:ring focus:border-fuchsia-500'

      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
    <button type='submit' className="absolute inset-y-0 right-0 flex items-center justify-center px-3 text-gray-400">
      <AiOutlineSearch />
    </button>
  </div>
</form>



     
     
        <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link active={path === '/'} as={'div'} style={{ color: path === '/' ? '#D294BB' : 'initial' }}>
          <Link to='/'>Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === '/AboutUs'} as={'div'} style={{ color: path === '/AboutUs' ? '#D294BB' : 'initial' }}>
          <Link to='/AboutUs'>About</Link>
        </Navbar.Link>
        <Navbar.Link active={path === '/projects'} as={'div'} style={{ color: path === '/search' ? '#D294BB' : 'initial' }}>
          <Link to='/search'>Posts</Link>
        </Navbar.Link>
        <Navbar.Link active={path === '/contact'} as={'div'} style={{ color: path === '/contact' ? '#D294BB' : 'initial' }}>
          <Link to='/contact'>Contact Us</Link>
        </Navbar.Link>
       
      </Navbar.Collapse>
      {currentUser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt='user' img={currentUser.profilePicture} rounded />
            }
          >
            <Dropdown.Header>
              <span >@{currentUser.username}</span>
              <span >
                {currentUser.email}
              </span>
            </Dropdown.Header>
            <Link to={'/dashboard?tab=profile'}>
              <Dropdown.Item>Profile</Dropdown.Item>
            </Link>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleSignout}>Sign out</Dropdown.Item>
          </Dropdown>
        ) : (
          <div className='flex space-x-4 '>
          <Link to='/sign-in'>
            <Button style={{ backgroundColor: '#D294BB' }}  >
              Sign In
            </Button>
          </Link>
            <Link to='/sign-up'>
            <Button  style={{ backgroundColor: '#D294BB' }} >
              Sign up
            </Button>
          </Link>
          </div>
        )}
            </Navbar>
  <div className="containerdropdownkbira">
  
  
  <Link>
<Dropdownn
      categories={categories}
      lab="santé et mentale"
    >
        
        </Dropdownn>
        </Link>
<Link>
<Dropdownn
      categories={categories}
      lab='événements'
    >      
        </Dropdownn>
        </Link>
    <Link>
    <Dropdownn
          categories={categories}
          lab='parent et enfants'
        >
            
            </Dropdownn>
            </Link>
            <Link>
    <Dropcabin
        >
            </Dropcabin>
            </Link>       
</div>
    </>
  );
}
