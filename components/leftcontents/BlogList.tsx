/* eslint-disable */
import React from 'react';
import Image from 'next/image';
import Route from '../Route';
import { urlForImage } from '@/sanity/lib/image';

type Props = {
  posts: Post[];
};

const BlogList = ({ posts }: Props) => {
  return (
    <div className='md:mx-14 my-10'>
      {posts.map((post, i) => (
        <Route route={`/blog/${post.slug.current}`}>
          <div
            className='border border-gray-600 rounded mb-3 md:basis-[40%]'
            key={post._id}
          >
            <div
              className='relative w-full h-80'
              key={urlForImage(post.mainImage)}
            >
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
              <p className='line-clamp-6'>{post.description}</p>
            </div>
          </div>
        </Route>
      ))}
    </div>
  );
};

export default BlogList;
