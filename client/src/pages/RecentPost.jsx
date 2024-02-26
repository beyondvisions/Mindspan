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
      <div className='max-w-5xl mx-auto p-3 flex flex-col gap-8 py-7'>
        {posts && posts.length > 0 && (
          <div className='flex flex-col gap-6'>
            <h2 className='text-2xl font-semibold text-center'               style={{color:'#873260'}}
>Recent {category} Posts</h2>
<div class="flex flex-col gap-10 md:flex-row md:justify-between md:gap-10">
               {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={'/search'}
              className='text-lg text-white hover:underline text-center'
              style={{color:'#873260'}}
              >
              View all posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
