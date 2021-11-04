import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import {FULL_PRODUCT, SET_LOADING_FALSE, SET_LOADING_TRUE} from "../action.types/actionTypes";

export default function FullProduct({match: {params: {id}}}) {
    const dispatch = useDispatch();
    const [product, setFullProduct] = useState({})
    useEffect(() => {
        fetchProduct()
    }, [id])
    const fetchProduct = async () => {
        dispatch({type: SET_LOADING_TRUE})

        const response = await fetch(`http://localhost:8888/todo/${id}`);
        const data = await response.json()
        setFullProduct(data)

        dispatch({type: FULL_PRODUCT, payload: data})
        dispatch({type: SET_LOADING_FALSE})
    }
    return (
        <div>
            {product.title} - {product.description}
        </div>
    )
}