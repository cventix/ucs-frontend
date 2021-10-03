import React from 'react';
import Layout from '../../layout';
import blogStyle from './blog.module.scss';
import style from '../../assets/styles/styles.webflow.module.scss';
import ReactHtmlParser from 'react-html-parser';

const DetailBlog = ({ blogPost }) => {
  // console.log(query);
  // return <div>test</div>;
  // return <div>test</div>;

  const {
    hero: { url, alt, fieldId },
    name,
    author,
    date,
    body,
  } = blogPost;

  const formatDate = () => {
    const dateTemp = new Date(date);
    return `${dateTemp.toLocaleString('default', { month: 'long' })} ${dateTemp.getDate()} , ${dateTemp.getFullYear()}`;
  };
  return (
    <Layout>
      <div className="wf-section">
        <div className={blogStyle['page-heading-wrapper']}>
          <div className={style['_1200-container']}>
            <img
              height="500"
              loading="lazy"
              width="1200"
              src={url}
              alt={alt}
              id={fieldId}
              sizes="(max-width: 479px) 89vw, (max-width: 767px) 93vw, (max-width: 991px) 95vw, 90vw"
            />
            <h1 className={blogStyle['title']}>{name}</h1>
            <div className={blogStyle['author']}>{author}</div>
            <div className={blogStyle['date']}>{formatDate()}</div>
          </div>
        </div>
      </div>
      <div className="wf-section">
        <div className={blogStyle['content']}>{ReactHtmlParser(body)}</div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps(req) {
  // console.log(req);
  const id = req?.query.slug[0];
  // console.log(req?.query);
  // fetch post contents
  const blogPost = await await (await import(`../api/cms/blog/[...slug]`)).getSingleBlog(id);
  // console.log(blogPost);

  return {
    props: {
      blogPost,
    },
  };
}

export default DetailBlog;
