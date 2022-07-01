import {Avatar} from './Avatar.jsx'
import Styles from './Sidebar.module.css'
import EditIcon from '../Assets/edit.svg'

console.log(EditIcon)

export function Sidebar(){

    return(
        <aside className={Styles.Sidebar}>

            <img className={Styles.cover} src="https://miro.medium.com/max/1092/0*nifY9Fy8LFlDQ93W.png" 
            alt="" />
            <div className={Styles.profile}>
               <Avatar src="https://xesque.rocketseat.dev/users/avatar/profile-4706ed19-0060-42d0-9f2a-d5d61fdb9b6f-1635537196786.jpg"></Avatar>
                <strong>Felipe Cristovão da Silva</strong>
                <span>Web developer</span>
                
            </div>
            <footer>
                    <a href="#">
                    <img className={Styles.editlogo} src="https://ik.imagekit.io/Ro476mas/edit_84QMA5-Z6.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1656634238717" alt="edit logo" />
                       
                        Editar seu perfil
                    </a>
                </footer>
          
        </aside>
    )
}