const Buttons = ( {value, text, handleClick} ) => {
    return (
        <button className="filter-tab" value={value} onClick={()=>handleClick(value)}>{text}</button>
    )
}
export default Buttons;