import styles from '../../styles/Home.module.css';
import { useRouter } from 'next/router';

function Post( { post } ){
    const router = useRouter();

    if(router.isFallback){
        return(
            <div className={styles.container}>
                <div className={styles.card} >
                    <h2>Loading . . . .</h2>
                </div>
            </div>
        )
    }

    return(
        <div className={styles.container} >
                <h2 className={styles.title} >{ post.id }. {post.title}</h2>
                <hr/>
            <div className={styles.card} >
                <p>{post.body}</p>
            </div>  

        </div>
    )

};
export default Post;


export async function getStaticPaths(){
    return{
        paths:[
            {
                params: {
                    postId:"1"
                }
            },{
                params: {
                    postId:"2"
                }
            },{
                params: {
                    postId:"3"
                }
            },{
                params: {
                    postId:"4"
                }
            },{
                params: {
                    postId:"5"
                }
            },
        ],
        fallback:true
    }
};

export async function getStaticProps(context){
    const { params } = context
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
    const data = await response.json();

    if(!data.id){
        return{
            notFound:true
        }
    }

    return{
        props:{
            post:data
        }
    }

};