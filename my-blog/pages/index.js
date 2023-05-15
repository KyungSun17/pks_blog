import SanityService from '../services/SanityService'

export default function Home( { home, posts } ) {
  console.log(home);
  console.log(posts);
  return (
    <div>
      <h1>Blog Home</h1>
    </div>
  )
}

export async function getStaticProps() {
  // sanity로부터 데이터 get
  const sanityService = new SanityService();
  const home = await sanityService.getHome();
  const posts = await sanityService.getPosts();
  

  return {
      props: {
          home,
          posts,
      },
  };
}