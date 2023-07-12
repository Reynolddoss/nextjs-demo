import styles from '../../styles/Home.module.css'

function Posts({ posts }){
    return (
        <div className={styles.container}> 
        <main>
            <h2 className={styles.title} >List of Posts</h2>
            <hr/>
            <div className={styles.grid} >
                {
                    posts.map(post=>{
                        return(
                                <a href={`posts/${post.id}`} key={post.id} className={styles.card} >
                                    <h3>{post.title}</h3>
                                    <p>{`${(post.body).slice(0,50)}....`}</p>
                                </a>
                            
                        )
                    })
                }
            </div>

        
            
        </main>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
        </div>
    )

};

export default Posts;


export async function getStaticProps(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json()

    return {
        props:{
            posts:data.slice(0,6)
        }
    }
};