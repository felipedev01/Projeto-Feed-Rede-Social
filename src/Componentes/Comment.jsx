import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import {Avatar} from'./Avatar.jsx'
import { useState } from 'react'
import { set } from 'date-fns/esm'

export function Comment({commentText,deleteComment}){

  const[likesCount,setLikesCount]=useState(0)
  const[likeOn , setLikeOn]=useState(false)

  function handleLikeComment(){
    setLikesCount((state)=>{
      if(state==0){
        return state+1
      }else{
        return state-1
      }
      
    })
    if(likesCount==0){
      setLikeOn(true)
    }else{

      setLikeOn(false)
    }
   
    
  }

  function onDeleteComment(){

    deleteComment(commentText)
    
  }

  console.log(commentText)

    return(
         <div className={styles.comment}>

           <Avatar hasBorder={false} src='https://xesque.rocketseat.dev/users/avatar/profile-4706ed19-0060-42d0-9f2a-d5d61fdb9b6f-1635537196786.jpg'></Avatar>
            <div className={styles.commentBox}>
             <div className={styles.commentContent}>
             <header>
              <div className={styles.authorAndTime}>
              <strong>Felipe Cristovão da Silva</strong>
              
              <time title='16 de junho' dateTime='2022-06-16'>Agora mesmo</time>
            

                

              </div>
                
                <button title='Botão deletar'onClick={onDeleteComment}>
                    <Trash size={24} ></Trash>
                </button>

             </header>

             <p>
              {commentText}
             </p>
             </div>
          <footer>
           <button className={likeOn ? styles.applaudButtonLikeOn :styles.applaudButtonLikeOff} onClick={handleLikeComment}>
            <ThumbsUp size={20} className={styles.applaudIcon}/> Aplaudir
            <div className={styles.applaudCount}>{likesCount}</div>
           </button>
          </footer>
         </div>
           </div>
        
    )
}

      /*   {hasBorder ? Styles.AvatarWithBorder:Styles.Avatar}*/