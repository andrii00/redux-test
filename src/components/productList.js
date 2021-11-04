import {useDispatch, useSelector} from "react-redux";
import {ADD_PRODUCTS, SET_LOADING_FALSE, SET_LOADING_TRUE} from "../action.types/actionTypes";
import {useEffect} from "react";
import Product from "./product";

export default function ProductList() {
    const dispatch = useDispatch();

    useEffect(() => {
        fetchProducts()
    }, [])
    const fetchProducts = async () => {
        dispatch({type: SET_LOADING_TRUE})

        const response = await fetch('http://localhost:8888/get-todos');
        const data = await response.json()

        dispatch({type: ADD_PRODUCTS, payload: data})
        dispatch({type: SET_LOADING_FALSE})
    }
    const {products, isLoading} = useSelector((productsReducer) => productsReducer)


    if (isLoading) {
        return <h1>LOADING...</h1>
    }

    return (
        <div>
            {products.map(product => <Product key={product.id} product={product}/>)}
        </div>
    )
}