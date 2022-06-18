import styles from './Comment.module.css'
export function Comment(){

    return(
         <div className={styles.comment}>

            <img src="https://avatars.githubusercontent.com/u/81122606?v=" alt="" />
            <div className={styles.commentBox}>
             <div className={styles.commentContent}>
             Comentario
             </div>
          <footer>
            Aplaudir
          </footer>
         </div>
           </div>
        
    )
}