import React from 'react';
import { groq, PortableText } from 'next-sanity';
import { client } from '@/sanity/lib/client';
import Image from 'next/image';
import { urlForImage } from '@/sanity/lib/image';
import { RichText } from '@/components/RichText';
import MoreBlogs from '@/components/MoreBlogs';
import Comments from '@/components/Comments';

const page = async ({ params }: { params: { slug: string } }) => {
  const query = groq`
      *[_type =="post" && slug.current==$slug][0]{
      ...,
      author ->,
      'comments': *[_type == 'comment' &&
      post._ref == ^._id && approved==true],


  }`;

  const allPostsquery = groq`
    *[_type =="post"]{
    ...,
    author ->,
    } | order(_publishedAt desc)`;

  const post: Post = await client.fetch(query, params, {
    next: { revalidate: 10 },
  });
  const posts = await client.fetch(allPostsquery);
  //console.log('Posts', posts);

  return (
    <div>
      <div className=' relative w-full h-[75vh] bg-cover bg-center bg-no-repeat'>
        <div className='absolute inset-0 -z-10'>
          <Image
            src={urlForImage(post.mainImage)}
            fill
            alt='banner-img'
            className='object-cover object-center brightness-50'
          />
        </div>
        <div></div>
        <div className='text-white h-full flex flex-col justify-end'>
          <h1 className='text-center text-5xl pb-5'>{post.title}</h1>
          <div className='flex divide-x justify-center pb-10'>
            <p className='pr-2'>by {post.author.name}</p>
            <p className='pl-2'>
              {new Date(post.publishedAt).toLocaleDateString('en-gb', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </p>
          </div>
        </div>
      </div>
      <div className='max-w-5xl mx-auto my-10 px-5 md:px-10'>
        <PortableText value={post.body} components={RichText} />
      </div>
      <div>
        <MoreBlogs posts={posts} post={post} />
        <Comments post={post} />
      </div>
    </div>
  );
};

export default page;
