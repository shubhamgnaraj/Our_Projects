

const InputBox = ({changeVal}) => {
    return (
        <>
        <input type="text"  className='textInput' value={changeVal} readOnly />
        </>
    )
}

export default InputBox