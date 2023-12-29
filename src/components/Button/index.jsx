import './styles.css'

export default (props) => (
    
    <div className={`${props.disabled ? 'ds-button' : 'st-button'}`} onClick={props.disabled ? null : props.clicar}>
        <h5>{props.text}</h5>
    </div>
    
)