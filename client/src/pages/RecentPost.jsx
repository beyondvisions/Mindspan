import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';

export default function RecentPost({ category, subcategory = '' ,}) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(`/api/post/getPosts?limit=3sort=desc&category=${category}&subcategory=${subcategory}`);
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, [category, subcategory]); 

  return (
    <div>
      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7'>
        {posts && posts.length > 0 && (
          <div className='flex flex-col gap-6'>
            <h2 className='text-2xl font-semibold text-center'>Recent {category} Posts</h2>
            <div style={{ display: 'flex', justifyContent: 'space-evenly', gap: '1rem' }}>           
               {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={'/search'}
              className='text-lg text-white hover:underline text-center'
              style={{color:'white'}}
              >
              View all posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
