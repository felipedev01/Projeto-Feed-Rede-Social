
import Styles from './Sidebar.module.css'

export function Sidebar(){

    return(
        <aside className={Styles.Sidebar}>

            <img className={Styles.cover} src="https://images.unsplash.com/photo-1615921983172-638995cbd490?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTF8YkNVNmtfS1B1dVl8fGVufDB8fHx8&auto=format&fit=crop&w=259&q=60" 
            alt="" />
            <div className={Styles.profile}>
                <img className={Styles.image} src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=60&q=60" 
                alt="" />
                <strong>Felipe Cristovão</strong>
                <span>Web developer</span>
                
            </div>
            <footer>
                    <a href="#">
                        Editar seu perfil
                    </a>
                </footer>
          
        </aside>
    )
}