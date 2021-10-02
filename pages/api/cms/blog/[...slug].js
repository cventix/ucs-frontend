import { cmsClient } from '../../../../services/cms';

const BLOG_COLLECTION_ID = '60f18887c46014ca7a98b45f';

export const getSingleBlog = async (postId) => {
  const { data } = await cmsClient.get(`/collections/${BLOG_COLLECTION_ID}/items/${postId}`);
  if (!data || !data.items) throw new Error('No collection');
  return data.items[0];
};

export default async (req, res) => {
  const { slug } = req.query;
  try {
    const data = await getSingleBlog(slug[0]);
    return res.json(data);
  } catch (error) {
    console.error(error);
  }
};
