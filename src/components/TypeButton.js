import typeButton from '../css/TypeButton.module.css'

function TypeButton({type, text}){
    return(
        <span className={`${typeButton[type]} ${typeButton.typeBtn}`}>
            {text}
        </span>
    )
}


export default TypeButton;