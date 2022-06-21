 import styles from './post.module.css'
 import {Comment} from'./Comment.jsx'
 import {Avatar} from'./Avatar.jsx'
 import {format} from 'date-fns'
 import ptBR from 'date-fns/locale/pt-BR'


 export function Post({author,publishedAt,content}){

    const dateFormatted = format(publishedAt,"d 'de' LLLL' às 'HH:mm'h'",{
      locale:ptBR,
    })

    return (
        <article className={styles.post}>

           <header>
            <div className={styles.author}>
              <div className={styles.divAvatar}>
              <Avatar  src={author.authorAvatar}></Avatar>
              </div>
            
            <div className={styles.authorinfo}>
              <strong >{author.authorName}</strong>
              <span>{author.authorRole}</span>
            </div>
            </div>
            <time title='publishedAt'>{dateFormatted}</time>
           </header>

           <div className={styles.content}>
            <p>{content[0].content}</p>
            <br></br>
            <p>{content[1].content}</p>
             <br />
           <p><a href="http://">{content[2].content}</a> </p>
              <br />
            <p>
             <a href="http://">{content[3].content}</a> </p>
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