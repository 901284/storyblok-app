import React from 'react';
import { fetchData } from '@/lib/queries';
import { notFound } from 'next/navigation';
import StoryblokStory from '@storyblok/react/story';

export const revalidate = 60;

const Page = async ({ params }: any) => {
  let slug = params.slug ? params.slug.join('/') : 'home'

  const data = await fetchData(slug);

  if (!data) notFound();

  return (
    <div>
      <h1>Slug Page</h1>
      <StoryblokStory story={data?.story} />;
    </div>
  );
};

export default Page;
