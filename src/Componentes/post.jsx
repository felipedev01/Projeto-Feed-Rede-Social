 import styles from './post.module.css'
 import {Comment} from'./Comment.jsx'
 import {Avatar} from'./Avatar.jsx'
 export function Post(props){

    console.log(props.content)

    return (
        <article className={styles.post}>

           <header>
            <div className={styles.author}>
              <div className={styles.divAvatar}>
              <Avatar  src={props.author.authorAvatar}></Avatar>
              </div>
            
            <div className={styles.authorinfo}>
              <strong >{props.author.authorName}</strong>
              <span>{props.author.authorRole}</span>
            </div>
            </div>
            <time title={props.publishedAt}>Publicado há 1h</time>
           </header>

           <div className={styles.content}>
            <p>{props.content[0].content}</p>
            <br></br>
            <p>{props.content[1].content}</p>
             <br />
           <p><a href="http://">{props.content[2].content}</a> </p>
              <br />
            <p>
             <a href="http://">{props.content[3].content}</a> </p>
           </div>
           <form className={styles.CommentForm}>
            <strong>Deixe seu feedback</strong>
            <textarea 
            />
            <footer>
            <button type='submit'>Publicar</button>
            </footer>
            
           </form>

           <div className={styles.commentList}>
            <Comment></Comment>
            <Comment></Comment>
            <Comment></Comment>
      
           </div>
               
        </article>
      
    )
}