import styles from "../styles/Home.module.css";
import SanityService from '../services/SanityService';
import Header from "../components/Header.jsx"
import BlogHeadline from "../components/BlogHeadline.jsx"
import BlogMainPost from "../components/BlogMainPost.jsx"
import BlogList from "../components/BlogList.jsx"
import Footer from "../components/Footer.jsx"

export default function Home( { home, posts } ) {
  
  const mainPost = posts.find((p) => p.slug == home.mainPostUrl);
  const otherPosts = posts.filter((p) => p.slug != home.mainPostUrl );
  console.log(mainPost);
  console.log(otherPosts);
  return (
    <div className={styles.container}>
      <Header/>
      <BlogHeadline/>
      <BlogMainPost {...mainPost}/>
      <BlogList posts={otherPosts}/>
      <Footer/>
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