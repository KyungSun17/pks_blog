import sanityClient from '@sanity/client'
import SanityService from '../../services/SanityService'

export default function PostAll( {slug, post} ) {
    console.log(post);
    return (
        <div>
            <h1>Post : { slug }</h1>
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