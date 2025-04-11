import React from 'react';
import Explore from './Explore';
import About from './About';
import Featured from './Featured';
import Bloglist from './BlogList';

type Props = {
  posts: Post[];
};
//passes the property to featured
const LeftContents = ({ posts }: Props) => {
  return (
    <div className='my-10'>
      <Explore />
      <About />
      <Featured posts={posts} />
      <div className='text-center'>
        <p className="font-extrabold font-sans text-5xl text-center mb-10 mr-2 bg-[url('../public/assets/bgimg.jpg')] bg-clip-text text-transparent">
          FOLLOW YOUR DREAMS
        </p>
      </div>
      <Bloglist posts={posts} />
    </div>
  );
};

export default LeftContents;
