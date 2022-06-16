
import Styles from './Sidebar.module.css'

export function Sidebar(){

    return(
        <aside className={Styles.Sidebar}>

            <img className={Styles.cover} src="https://images.unsplash.com/photo-1615921983172-638995cbd490?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTF8YkNVNmtfS1B1dVl8fGVufDB8fHx8&auto=format&fit=crop&w=259&q=60" 
            alt="" />
            <div className={Styles.profile}>
                <strong>Felipe Cristovão</strong>
                <span>Web developer</span>
                <footer>
                    <a href="#">
                        Editar seu perfil
                    </a>
                </footer>
            </div>

          
        </aside>
    )
}