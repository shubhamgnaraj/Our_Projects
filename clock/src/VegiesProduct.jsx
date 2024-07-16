import ProductItems from "./ProductItems.jsx";

const VegiesProduct = ({items}) => {
  return (
    <>
      <ul>
        {items.map((item) =>  <ProductItems key={item} vegItem={item}></ProductItems>
        )}
      </ul>
    </>
  );
};

export default VegiesProduct;
