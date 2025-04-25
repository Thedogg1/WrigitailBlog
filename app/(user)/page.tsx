import React from 'react';
import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';
import Hero from '@/components/Hero';
import FeaturedArticles from '@/components/FeaturedArticles';
import About from '@/components/About';

const query = groq`
    *[_type =="post"]{
    ...,
      author->, 
} | order(_publishedAt desc)`;

const HomePage = async () => {
  const posts = await client.fetch(query);

  return (
    <main>
      <Hero />
      <FeaturedArticles posts={posts} />
      <About />
    </main>
  );
};

export default HomePage;
