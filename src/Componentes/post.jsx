 import styles from './post.module.css'
 import {Comment} from'./Comment.jsx'
 import {Avatar} from'./Avatar.jsx'
 export function Post(props){

    console.log(props)

    return (
        <article className={styles.post}>

           <header>
            <div className={styles.author}>
              <div className={styles.divAvatar}>
              <Avatar  src={props.src}></Avatar>
              </div>
            
            <div className={styles.authorinfo}>
              <strong >{props.name}</strong>
              <span>{props.role}</span>
            </div>
            </div>
            <time title='16 de junho' dateTime='2022-06-16'>Publicado há 1h</time>
           </header>

           <div className={styles.content}>
            <p>{props.paragraph1}</p>
            <br></br>
            <p>{props.paragraph2}</p>
             <br />
           <p><a href="http://">{props.link1}</a> </p>
              <br />
            <p>
             <a href="http://">{props.link2}</a> </p>
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