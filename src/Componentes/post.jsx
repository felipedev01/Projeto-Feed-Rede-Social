 import styles from './post.module.css'
 
 export function Post(props){

    console.log(props)

    return (
        <article className={styles.post}>

           <header>
            <div className={styles.author}>
            <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/81122606?v=" alt="" ></img>
            <div className={styles.authorinfo}>
              <strong>Felipe Cristovão</strong>
              <span>Web Developer</span>
            </div>
            </div>
            <time title='16 de junho' dateTime='2022-06-16'>Publicado à 1 hora</time>
           </header>

           <div className={styles.content}>
            <p>Fala galeraa 👋</p>

            <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

           <p><a href="http://">👉 jane.design/doctorcare</a> </p>

            <p>
             <a href="http://">#novoprojeto #nlw #rocketseat</a> </p>
           </div>
               
        </article>
      
    )
}