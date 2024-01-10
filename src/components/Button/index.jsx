import './styles.css'

export default function Button (props){
    return(
    
        <button className={`${props.disabled ? 'ds-button' : 'st-button'}`}  onClick={props.disabled ? null : props.clicar}>
            {props.text}
        </button>
    
    )
}