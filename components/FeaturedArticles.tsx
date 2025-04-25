import React from 'react';
import Image from 'next/image';
import { urlForImage } from '@/sanity/lib/image';
import Route from './Route';

type Props = {
  posts: Post[];
};

const FeaturedArticles = ({ posts }: Props) => {
  // Use only the first 3 posts for featured section
  const featuredPosts = posts.slice(0, 3);

  return (
    <div className='max-w-6xl mx-auto px-5 my-12'>
      <h2 className='text-xl font-bold mb-6'>Featured Articles</h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {featuredPosts.map((post) => (
          <Route route={`/blog/${post.slug.current}`} key={post._id}>
            <div className='border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow'>
              <div className='relative w-full h-48'>
                <Image
                  fill
                  src={urlForImage(post.mainImage)}
                  alt={post.title}
                  className='object-cover'
                />
                {/* Tag using publication date instead of categories */}
                <span className='absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded'>
                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                    month: 'short',
                    year: 'numeric',
                  })}
                </span>
              </div>
              <div className='p-4'>
                <h3 className='font-bold text-lg mb-2'>{post.title}</h3>
                <p className='text-gray-600 text-sm line-clamp-3'>
                  {post.description}
                </p>
              </div>
            </div>
          </Route>
        ))}
      </div>
    </div>
  );
};

export default FeaturedArticles;
