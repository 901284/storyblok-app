import { fetchData } from '@/lib/queries';
import StoryblokStory from '@storyblok/react/story';
import { notFound } from 'next/navigation';

const Home = async () => {
  const data = await fetchData('home');

  if (!data) notFound();

  return (
    <div>
      <StoryblokStory story={data?.story} />
    </div>
  );
};

export default Home;
/* export async function fetchData() {
  let sbParams = { version: 'draft' };

  const storyblokApi = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/home`, sbParams as any);
}
 */
