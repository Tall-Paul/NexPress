// index.html
import { useState } from 'react';
import { useRouter } from 'next/router';
import { PostList } from '../../components/postList.js';
import { getPosts } from '../../lib/service.ts'
import { getRecentPosts } from '../../lib/service.ts';
import Layout from '../../components/layout.js'
import { dehydrate, QueryClient, useQuery } from 'react-query';

function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>;
}



export default function Page({posts}) {
  
  const router = useRouter()  
  return (<Layout>
        <PostList posts={posts}>
            </PostList>
        </Layout>)
}



export const getStaticProps  = async (context) => {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery('recentPosts', getRecentPosts)
  


  const data = await getPosts(10,context.params.from); // retrieve first 100 posts
  const posts = data;
 
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      posts
    },
    revalidate: 3600,
  };      
};

export async function getStaticPaths(){
    return {
      paths: [],
      fallback: 'blocking',
    }
}