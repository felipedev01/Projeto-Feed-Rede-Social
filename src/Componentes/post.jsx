 import styles from './post.module.css'
 
 export function Post(props){

    console.log(props)

    return (
        <article className={styles.post}>
          <header>
        
                <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/81122606?v=" alt="" />
            
          </header>
          <div>
            <strong>Felipe Cristovão</strong>
            <span>Desenvolvedor Web</span>
          </div>
        </article>
        
    )
}