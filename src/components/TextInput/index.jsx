import './styles.css'

export default props => (
    <input 
        onChange={props.onTextChange} 
        type="search"
        className="cs_input"
        value={props.searchText}
    />
)