import { cmsClient } from '../../../services/cms';

const WISTIA_NEWS_FEED_ID = '60ec73a700a527475be78868';
const WISTIA_NEWS_FEED_CATEGORY_ID = '60ec73a700a52782a5e78871';

export default async (req, res) => {
  try {
    const { data } = await cmsClient.get(`/collections/${WISTIA_NEWS_FEED_ID}/items`);
    if (!data) throw new Error('No collection');

    return res.json(
      data.items.filter((d) => d['show-on-homepage'] && d['wistia-categories'] === WISTIA_NEWS_FEED_CATEGORY_ID),
    );
  } catch (error) {
    console.error(error);
  }
};
