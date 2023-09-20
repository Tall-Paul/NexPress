// index.html
import { useRouter } from 'next/router';
import { getSinglePost } from '../lib/service.ts'
import { getRecentPosts } from '../lib/service.ts'
import { getPosts } from '../lib/service.ts'
import Layout from '../components/layout.js'
import { dehydrate, QueryClient, useQuery } from 'react-query';
import PageHead from '../components/pageHead.js';
import Head from 'next/head'

function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>;
}




export default function Page({post}) {
    return <>
      <Layout>
      <Head>{post.seo.fullHead}</Head>
      <div class="single-post">
        <div class="single-post-title">{post.title}</div>
        <div class="single-post-content" dangerouslySetInnerHTML={{ __html: post.content }}></div>
      </div>
      </Layout>
    </>
}

/*Page.getLayout = function getLayout(page){
  return (
      <Layout>
       {page}
      </Layout>
    )
}*/


export const getStaticProps  = async (context) => {
  const post = await getSinglePost(context.params.slug); 
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery('recentPosts', getRecentPosts)
  
  //console.log(post);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      post,
    },
    revalidate: 3600,
  };
};

export async function getStaticPaths(){
  const posts = await getPosts(10);
  const paths = posts.nodes.map((post) => ({
    params: { slug: [post.slug] },
  }))
  return { paths: paths, fallback: 'blocking' }
}
