import styles from'./Header.module.css'
import igniteLogo from '../Assets/Ignite-logo.svg'

console.log(igniteLogo)

export function Header(){

    return(
    <div>
      <header className={styles.Header}> 
        <img src="https://ik.imagekit.io/Ro476mas/Ignite-logo_WKVNSckZo.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1656635132225" alt="Logo Ignite" />
        <h1>Feed</h1>
        </header>
    </div>
        
       
    )
}