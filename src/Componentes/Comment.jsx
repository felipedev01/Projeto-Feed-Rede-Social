import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
export function Comment(){

    return(
         <div className={styles.comment}>

            <img src="https://avatars.githubusercontent.com/u/81122606?v=" alt="" />
            <div className={styles.commentBox}>
             <div className={styles.commentContent}>
             <header>
              <div className={styles.authorAndTime}>
              <strong>Felipe Cristovão</strong>
              
              <time title='16 de junho' dateTime='2022-06-16'>Cerca de há 1h atrás</time>
            

                

              </div>
                
                <button title='Botão deletar'>
                    <Trash size={24} ></Trash>
                </button>

             </header>

             <p>Muito bom Devon, parabéns!! 👏👏</p>
             </div>
          <footer>
           <button className={styles.applaudButton}>
            <ThumbsUp size={20} className={styles.applaudIcon}/> Aplaudir
            <div className={styles.applaudCount}>20</div>
           </button>
          </footer>
         </div>
           </div>
        
    )
}