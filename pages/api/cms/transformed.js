import { cmsClient } from '../../../services/cms';
import moment from 'moment';

const WISTIA_NEWS_FEED_ID = '60ec73a700a527475be78868';
const WISTIA_NEWS_FEED_CATEGORY_ID = '60ec73a700a5275cd5e78872';

export default async (req, res) => {
  try {
    const { data } = await cmsClient.get(`/collections/${WISTIA_NEWS_FEED_ID}/items`);
    if (!data) throw new Error('No collection');

    const filtered = data.items.filter(
      (d) => d['show-on-homepage'] && d['wistia-categories'] === WISTIA_NEWS_FEED_CATEGORY_ID,
    );
    const mapped = filtered.map((item) => ({
      id: item.id,
      title: item.title,
      img: item['channel-thumnails'].url,
      slug: item.slug,
      'wistia-categories': item['wistia-categories'],
      'wistia-key': item['wistia-key'],
      description: moment(item['published-on']).format('YYYY-MM-DD'),
    }));

    return res.json(mapped);
  } catch (error) {
    console.error(error);
  }
};
