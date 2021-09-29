import { cmsClient } from '../../../services/cms';

const BLOG_COLLECTION_ID = '60f18887c46014ca7a98b45f';

export default async (req, res) => {
  try {
    console.log('req', req, res);
    const { data } = await cmsClient.get(`/collections/${BLOG_COLLECTION_ID}/items`);
    if (!data) throw new Error('No collection');
    return res.json(data.items);
  } catch (error) {
    console.error(error);
  }
};

// export default async (req, res) => {
//   try {
//     const { data } = await cmsClient.get(`/collections/${BLOG_COLLECTION_ID}/items`);
//     console.log(data);
//     res.status(200).json({ name: 'this is a test bokhoda' });
//   } catch {}
// };
