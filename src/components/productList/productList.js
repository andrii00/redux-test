import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import Product from "../product/product";
import './productList.css'
import {
    fetchProducts,
    fetchProductsData,
    fetchProductsDataReverse,
    fetchProductsReverse
} from "../../features/product/productSlice";

export default function ProductList() {
    const [list, setList] = useState('title')

    const dispatch = useDispatch();
    useEffect(() => {
        switch (list) {
            case 'title': {
                return dispatch(fetchProducts())
            }
            case "titlereverse": {
                return dispatch(fetchProductsReverse())
            }
            case "createdAt": {
                return dispatch(fetchProductsData())
            }
            case "createdAtReverse": {
                return dispatch(fetchProductsDataReverse())
            }
            default : {
                return dispatch(fetchProducts())
            }
        }


    }, [list])
    const {products, isLoading} = useSelector(({products}) => products)
    if (isLoading) {
        return <h1>LOADING...</h1>
    }

    return (
        <div>
            <div>
                <h3>Sort:</h3>
                <div className='display'>
                    <button
                        className='buttonList'
                        onClick={() => {
                            setList('title')
                        }}>alphabet
                    </button>
                    <button
                        className='buttonList'
                        onClick={() => {
                            setList('titlereverse')
                        }}>Alphabet reverse
                    </button>
                    <button
                        className='buttonList'
                        onClick={() => {
                            setList('createdAt')
                        }}>createdAt
                    </button>
                    <button
                        className='buttonList'
                        onClick={() => {
                            setList('createdAtReverse')
                        }}>createdAtReverse
                    </button>
                </div>
            </div>
            {products.map(product => <Product key={product.id} product={product}/>)}
        </div>
    )
}