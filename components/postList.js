import Image from 'next/image'

function PostExcerpt(post){
    return (<div>{post.title}</div>)
}



export function PostList({posts}) {
    return (
        <div class="postListContainer content">
            {posts.map((post) => (
                <div class="post-list-item">
                 <div class="post-list-title"><a href={post.uri}>{post.title}</a></div>
                    <div class="post-list-columns">
                        <div class="post-list-image"><a href={post.uri}><Image src={post.featuredImage?.node.sourceUrl} width={150} height={150} /></a> </div>
                        <a href={post.uri}><div class="post-list-excerpt" dangerouslySetInnerHTML={{ __html: post.excerpt }}></div></a>
                    </div>
                </div>

            ))}
        </div>

    )

    
}