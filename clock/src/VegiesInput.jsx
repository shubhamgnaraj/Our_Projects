

const VegiesInput = ({handleOnKeyDown}) => {
    return (
        <>
         <input type="text" className=' border-2 rounded-lg p-3 mb-5' placeholder='Enter your todo' onKeyDown={handleOnKeyDown}/>
        </>
    )
}

export default VegiesInput