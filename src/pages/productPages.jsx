import { useContext } from "react";
import { CartComponent } from "../components/cartComponent";
import { CartContext } from "../context/cartContext";
import { ProductContext } from "../context/productContext";

export const ProductPages = () => {
    const { products } = useContext(ProductContext);
    const { addProduct, removeProduct } = useContext(CartContext);

    return (
        <>
            <h1>Productos</h1>
            <hr />
            {products.map((product) => (
                <CartComponent
                    key={product.id}
                    id={product.id}
                    image={product.image}
                    title={product.title}
                    description={product.description}
                    price={product.price}
                    handlerAdd={() => addProduct(product)}
                    handlerRemove={() => removeProduct(product.id)}
                />
            ))}
        </>
    );
};
