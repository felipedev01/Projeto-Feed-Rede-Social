import Styles from './Avatar.module.css'
export function Avatar(props){

    console.log(props)
    return(
        <div>
             <img src={props.src} className={Styles.Avatar } alt="" />
        </div>
       
    )
}