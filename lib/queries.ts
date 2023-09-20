import { getStoryblokApi } from "@storyblok/react/rsc"

const storyblokApi = getStoryblokApi();
const version = 'published'

// fetch page data
export async function fetchData(path: string) {
    try {
        const response = await storyblokApi.get(`cdn/stories/${path}`, {
            version,
        });
        return response?.data;
    } catch (error) {
        return null;
    }
}

// fetch config data
export async function fetchConfigData() {
    try {
        const { data: { story: primary }} = await storyblokApi.get(`cdn/stories/config/menus/primary`, {
            version,
        });

        return {
            menus: {
                primary
            }
        }
    } catch (error) {
        console.error(`Error: fetchConfigData`, error)
    }
}