/* eslint-disable */
import React from 'react';
import Image from 'next/image';
import { urlForImage } from '@/sanity/lib/image';
import Route from '../Route';

type Props = {
  posts: Post[];
};

const Featured = ({ posts }: Props) => {
  const filteredPost = posts.filter(
    (post: { title: string }) =>
      post.title === 'A Journey To Paradise:  The Maldives Travel Guide'
  );

  return (
    <div className='md:flex md:flex-row mx-auto'>
      <div className='md:mx-6 lg:mx-14 mb-5'>
        {filteredPost.map((post, i) => (
          <Route route={`/blog/${post.slug.current}`}>
            <div
              className='border border-gray-600 rounded mb-3 md:basis-[10%]'
              key={post._id}
            >
              <div className='relative w-full h-80'>
                <Image
                  fill
                  src={urlForImage(post.mainImage)}
                  alt='postImage'
                  className='object-cover object-left lg:object-center'
                />
              </div>
              <div className='mx-5 pb-4' key={post.title}>
                <h2 className='mt-5 mb-2 font-semibold text-[#dc2626]'>
                  {post.title}
                </h2>
                <p className='line-clamp-6 w-80'>{post.description}</p>
              </div>
            </div>
          </Route>
        ))}
      </div>
      {/* fill the text with an image */}
      <div className='p-2'>
        <h2 className="font-extrabold font-sans text-4xl text-center mb-10 mr-2 bg-[url('../public/assets/bgimg.jpg')] bg-clip-text text-transparent">
          TRAIN <br />
          ADVENTURE
          <br />
          ROUTE
          <br />
        </h2>
        <p>
          Imagine the thrill of boarding a train, setting off on an adventure
          where each clickety-clack of the tracks leads you to new horizons.
          With every twist and turn of the scenic route , there's a world of
          wonders waiting to be unveiled, promising excitement and discovery at
          every stop along the way.
        </p>
      </div>
    </div>
  );
};

export default Featured;
