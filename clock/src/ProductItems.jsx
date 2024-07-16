const ProductItems = ({vegItem}) => {
    return <li className=" uppercase p-3 ">{vegItem}
    <button className=" float-right bg-blue-400 p-2 rounded-lg capitalize">by</button>
    </li>
}

export default ProductItems