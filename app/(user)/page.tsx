/* eslint-disable react/jsx-key */
import React from 'react';
import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';

import Hero from '@/components/Hero';
import Main from '@/components/Main';

const query = groq`
*[_type =="post"]{
...,
author ->,
}`;

const page = async () => {
  // pasees the data through a prop to main
  const posts = await client.fetch(query);

  return (
    <div>
      <Hero />
      <Main posts={posts} />
    </div>
  );
};

export default page;
