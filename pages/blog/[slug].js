import React from 'react';

const blogDetail = ({ blogItem }) => {
  return <h1 style={{ color: '#fff' }}>{blogItem}</h1>;
};

export const getStaticPaths = async () => {
  const data = await (await fetch(`/api/cms/blog`)).json();

  const paths = Object.values(data).map((element) => {
    return { params: element };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (ctx) => {
  console.log(ctx);
  const slug = ctx.params.slug;

  return {
    props: { blogItem: slug },
  };
};

export default blogDetail;
