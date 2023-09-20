import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';

const Page = ({ blok }: blokProps) => (
  <main {...storyblokEditable(blok)}>
    {!!blok?.body?.length && blok.body.map((nestedBlok: any) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </main>
);

export default Page;
