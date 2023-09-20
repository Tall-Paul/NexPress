import { fetchAPI } from "./base";

export async function getSinglePost(slug:string){
    console.log(slug);
    const data = await fetchAPI(
        `query fetchPost {
            postBy(slug: "`+slug[3]+`") {
              id
              content(format: RENDERED)
              excerpt
              featuredImage {
                node {
                  id
                  link
                  uri
                  title
                }
              }
              title
              seo {
                fullHead
              }
            }
          }
        ` 
    );
    return data?.postBy
}

export async function getRecentPosts(){
  const data = await getPosts(5);
  //console.log("in get recent posts");
  return data;
}

export async function getPosts(first = 10) {
  const data = await fetchAPI(
    `query FetchPosts($first: Int = 10) {
        posts(first: $first) {
          nodes {
            excerpt
            featuredImage {
              node {
                sourceUrl
              }
            }
            slug
            title
            id
            uri
          }
        }
      }`,
    {
      variables: {
        first,
      },
    }
  );

  return data?.posts?.nodes;
}
