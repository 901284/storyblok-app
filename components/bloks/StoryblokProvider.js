"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import Page from "./Page";
import Grid from './Grid';
import Teaser from './Teaser';
import Feature from './Feature';

const components = {
    feature: Feature,
    grid: Grid,
    teaser: Teaser,
    page: Page,
  };

storyblokInit({
  accessToken: process.env.STORYBLOK_API_TOKEN,
  use: [apiPlugin],
  components
});
 
export default function StoryblokProvider({ children }) {
  return children;
}