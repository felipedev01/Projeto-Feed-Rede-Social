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
              <span>Web Developer</span>
            </div>
            </div>
            <time title='16 de junho' dateTime='2022-06-16'>Publicado há 1h</time>
           </header>

           <div className={styles.content}>
            <p>Fala galeraa 👋</p>
            <br></br>
            <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
             <br />
           <p><a href="http://">👉 jane.design/doctorcare</a> </p>
              <br />
            <p>
             <a href="http://">#novoprojeto #nlw #rocketseat</a> </p>
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