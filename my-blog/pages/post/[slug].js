import styles from "../../styles/Home.module.css";
import SanityService from '../../services/SanityService';
import Header from "../../components/Header.jsx"
import BlogMainPost from "../../components/BlogMainPost.jsx"
import Footer from "../../components/Footer.jsx"
import BlogPostDetail from "../../components/BlogPostDetail.jsx"

export default function PostAll( {slug, post} ) {
    return (
        <div className={styles.container}>
            <Header/>
            <BlogMainPost {...post}/>
            <BlogPostDetail blocks={post.content}/>
            <Footer/>
        </div>
    )
}

export async function getStaticPaths() {
    // sanity로부터 데이터 get
    const sanityService = new SanityService();
    const posts = await sanityService.getPosts();

    const paths = posts.map(post => ({
        params: {
            slug: post.slug,
        },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps( {params} ){
    const {slug} = params; 

    const sanityService = new SanityService();
    const posts = await sanityService.getPosts();

    const post = posts.find(p => p.slug == slug);

    return{
        props:{
            slug,
            post
        }
    }
}