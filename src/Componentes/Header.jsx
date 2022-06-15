import styles from'./Header.module.css'

console.log(styles)

export function Header(){

    return(
    <div>
      <header className={styles.Header}> 
        <strong>Ignite Feed</strong>
        </header>
    </div>
        
       
    )
}