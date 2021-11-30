import {useDispatch} from "react-redux";
import {createProduct} from "../../features/product/productSlice";
import CreateProductsForm from "../productForm/createProductsForm";
import ProductList from "../productList/productList";
import './home.css'
export default function Home() {
    const dispatch = useDispatch();

    const onProductCreate = async (title, description) => {
        if (!title || !description) return;

        await dispatch(createProduct({title, description}))
    }

    return (
        <div>
            <div>
                <CreateProductsForm onProductCreate={onProductCreate}/>
            </div>
            <div className='width'>
                <ProductList/>
            </div>
        </div>
    )
}