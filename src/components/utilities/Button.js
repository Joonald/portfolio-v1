const Buttons = ( {value, text, handleClick, state, slug} ) => {
    return (
        <button className={state === slug ? 'filter-tab active-tab' : 'filter-tab'} value={value} onClick={()=>handleClick(value, slug)}>{text}</button>
    )
}
export default Buttons;