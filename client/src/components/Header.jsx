import { Avatar, Button, Dropdown, Navbar } from 'flowbite-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import { signoutSuccess } from '../redux/user/userSlice';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { encodeBase64 } from 'bcryptjs';


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
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      class="block w-full sm:max-w-xs border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-custom-color focus:ring-custom-color dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-custom-color dark:focus:ring-custom-color p-2.5 text-sm rounded-lg" 

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
        <Navbar.Link active={path === '/FAQ'} as={'div'} style={{ color: path === '/FAQ' ? '#D294BB' : 'initial' }}>
          <Link to='/FAQ'>FAQ</Link>
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
  <div className="flex  border-b-2 ">
  <Navbar className=' list-none '>
  <Navbar.Link className="mr-4 md:mr-8 lg:mr-12 sm:mr-0">
  <Dropdown
    arrowIcon={false}
    inline
    label={'Parent et Enfant'}
    className="list-none"
  >     
    {categories
      .filter(category => category.catego.toLowerCase() === 'parent et enfants')
      .map((category, index) => (

<Link to={`/search?category=Parent+et+enfants&subcategory=${category.name.replace(/\s/g, '+')}`}>
        <Dropdown.Item key={index}

        >{category.name.replace(/\s/g, '+')}</Dropdown.Item>
        </Link>
      ))}
  </Dropdown>
</Navbar.Link>



<Navbar.Link className="mr-4 md:mr-8 lg:mr-12 sm:mr-0">
    <Dropdown
      arrowIcon={false}
      inline
      label={'Evenement'}
    >

{categories
      .filter(category => category.catego.toLowerCase() === 'événements')
      .map((category, index) => (
<Link to={`/search?category=événements&subcategory=${category.name.replace(/\s/g, '+')}`}>

        
        <Dropdown.Item key={index}>{category.name}</Dropdown.Item>
        </Link>
              ))}

      </Dropdown>
      

  </Navbar.Link>
  <Navbar.Link className="mr-4 md:mr-8 lg:mr-12 sm:mr-0">

    <Dropdown
      arrowIcon={false}
      inline
      label={'Santé mentale'}
    >

{categories
      .filter(category => category.catego.toLowerCase() === 'santé et mentale')
      .map((category, index) => (
<Link to={`/search?category=Santé+et+Mentale&subcategory=${category.name.replace(/\s/g, '+')}`}>

        <Dropdown.Item key={index}>{category.name}</Dropdown.Item>
        </Link>

      ))}    
      </Dropdown>
  </Navbar.Link>
  <Navbar.Link className="mr-4 md:mr-8 lg:mr-12 sm:mr-0">
<Dropdown
  arrowIcon={false}
  inline
  label={'Cabinet'}
>
  
<Dropdown label="Nord-Est" placement="right" style={{backgroundColor:'white',color:'black',borderStyle:'none'}}>

        <Dropdown.Item>Bizerte</Dropdown.Item>
        <Dropdown.Item> Tunis</Dropdown.Item>
        <Dropdown.Item>Ariana </Dropdown.Item>
        <Dropdown.Item>La Manouba</Dropdown.Item>
        <Dropdown.Item>Ben Arous</Dropdown.Item>
        <Dropdown.Item>Zaghouan</Dropdown.Item>
        <Dropdown.Item>Nabeul</Dropdown.Item>

      </Dropdown>
      <Dropdown label="Nord-Ouest" placement="right" style={{backgroundColor:'white',color:'black',borderColor:'white'}}>
        <Dropdown.Item>Jendouba</Dropdown.Item>
        <Dropdown.Item>Beja</Dropdown.Item>
        <Dropdown.Item>le Kef</Dropdown.Item>
        <Dropdown.Item>Siliana</Dropdown.Item>
      </Dropdown>
      <Dropdown label="Centre-Est" placement="right"style={{backgroundColor:'white',color:'black',borderColor:'white'}}>
        <Dropdown.Item>Sousse</Dropdown.Item>
        <Dropdown.Item>Monastir</Dropdown.Item>
        <Dropdown.Item>Mahdia</Dropdown.Item>
      </Dropdown>
      <Dropdown label="Centre-Ouest" placement="right"style={{backgroundColor:'white',color:'black',borderColor:'white'}}>
        <Dropdown.Item>Kairouan</Dropdown.Item>
        <Dropdown.Item>Kasserine</Dropdown.Item>
        <Dropdown.Item>Sidi Bouzid</Dropdown.Item>
      </Dropdown>
      <Dropdown label="Sud-Est" placement="right" style={{backgroundColor:'white',color:'black',borderColor:'white'}}>
        <Dropdown.Item>Sfax</Dropdown.Item>
        <Dropdown.Item>Gabés</Dropdown.Item>
        <Dropdown.Item>Médnine</Dropdown.Item>
        <Dropdown.Item>Tataouine</Dropdown.Item>

      </Dropdown>
      <Dropdown label="Sud-Ouest" placement="right" style={{backgroundColor:'white',color:'black',borderColor:'white'}}>
        <Dropdown.Item>Gafsa</Dropdown.Item>
        <Dropdown.Item>Tozeur</Dropdown.Item>
        <Dropdown.Item>Kébili</Dropdown.Item>
      </Dropdown>
  </Dropdown>
</Navbar.Link>
       
</Navbar>
</div>

    </>
  );
}
