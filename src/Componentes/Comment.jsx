import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import {Avatar} from'./Avatar.jsx'

export function Comment({commentText,deleteComment}){

  function onDeleteComment(){

    deleteComment(commentText)
    
  }

  console.log(commentText)

    return(
         <div className={styles.comment}>

           <Avatar hasBorder={false} src='https://github.com/diego3g.png'></Avatar>
            <div className={styles.commentBox}>
             <div className={styles.commentContent}>
             <header>
              <div className={styles.authorAndTime}>
              <strong>Felipe Cristovão</strong>
              
              <time title='16 de junho' dateTime='2022-06-16'>Cerca de há 1h atrás</time>
            

                

              </div>
                
                <button title='Botão deletar'onClick={onDeleteComment}>
                    <Trash size={24} ></Trash>
                </button>

             </header>

             <p>{commentText}</p>
             </div>
          <footer>
           <button className={styles.applaudButton} >
            <ThumbsUp size={20} className={styles.applaudIcon}/> Aplaudir
            <div className={styles.applaudCount}>20</div>
           </button>
          </footer>
         </div>
           </div>
        
    )
}