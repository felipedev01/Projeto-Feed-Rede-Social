import styles from'./Header.module.css'

console.log(styles)

export function Header(){

    return(
        <h1 className={styles.Header}>Feeed Ignite</h1>
    )
}