import { use } from 'react';
import { getRecentPosts } from '../lib/service.ts'
import { dehydrate, QueryClient, useQuery } from 'react-query';


export default function RecentPosts(){
    const recentPosts = useQuery('recentPosts', getRecentPosts)

    return (
      <>
        <div class="recent">
        <div class="recent-title">Recent Posts</div>
        {recentPosts.data.map(post => (
             
            <div key={post.uri}><a href={post.uri}>{post.title}</a></div>
        
       ))}
       </div>
       
      </>
    )
}





