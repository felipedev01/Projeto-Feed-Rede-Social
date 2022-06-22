 import styles from './post.module.css'
 import {Comment} from'./Comment.jsx'
 import {Avatar} from'./Avatar.jsx'
 import {format,formatDistanceToNow} from 'date-fns'
 import ptBR from 'date-fns/locale/pt-BR'
import { useState } from 'react'


 export function Post({author,publishedAt,content}){

  console.log(content)

  const [comment, setComment]=useState([1,2])

  function handleCreateComment(){

    
      event.preventDefault()
     setComment([1,2,3])
    
     
  }

    const dateFormatted = format(publishedAt,"d 'de' LLLL' às 'HH:mm'h'",{
      locale:ptBR,
    })

    const dateDistanceRelativeToNow=formatDistanceToNow(publishedAt,{
      locale:ptBR,
      addSuffix:true,
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
            <time title={dateFormatted} dateTime={publishedAt.toISOString()}>{dateDistanceRelativeToNow} </time>
           </header>

           <div className={styles.content}>
           {content.map(line=>{
            if(line.type=='paragraph'){
              return(
                <p><br />{line.content} <br/></p>
              )
            }else if(line.type==='link'){
              return(
                <p><br /><a href="#">{line.content}</a></p>
              )
            }
           })}
           </div>
           <form  onSubmit={handleCreateComment} className={styles.CommentForm}>
            <strong>Deixe seu feedback</strong>
            <textarea 
            />
            <footer>
            <button type='submit'>Publicar</button>
            </footer>
            
           </form >

           <div className={styles.commentList}>

            {comment.map(comment=>{
              return(
                <Comment></Comment>
              )
            })}
            
          
      
           </div>
               
        </article>
      
    )
}