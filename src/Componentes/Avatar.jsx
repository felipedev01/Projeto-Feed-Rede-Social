import Styles from './Avatar.module.css'
export function Avatar(props){

    console.log(props)
    return(
        
            <img src={props.src} className={props.hasBorder ? Styles.AvatarWithBorder:Styles.Avatar} alt="" />
        
       
    )
}