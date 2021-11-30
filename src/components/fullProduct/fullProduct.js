import {useEffect, useState} from "react";
import './fullProduct.css'
import {fetchProduct} from "../../features/product/productSlice";
import {useDispatch, useSelector} from "react-redux";
import EditForm from "../editForm/editForm";

export default function FullProduct({match: {params: {id}}}) {
    const dispatch = useDispatch()
    const [toggle, setToggle] = useState('hide')

    useEffect(() => {
        dispatch(fetchProduct(id))
    }, [])

    const {product, isLoading} = useSelector(({products: {product, isLoading}}) => {
        return {product, isLoading}
    })

    if (isLoading) {
        return <h1>LOADING...</h1>
    }
    console.log(product);

    return (
        <div>
            <div className={`${toggle}`}>
                <EditForm id={id}/>
            </div>
            {product.title} - {product.description}
            <hr/>
            <span>Created at: {new Date(product.createdAt).toLocaleString()}</span>
            <br/>


            <br/>
            <button
                className='buttonEdit'
                onClick={() => {
                    if (toggle === 'hide') {
                        setToggle('show')
                    } else if (toggle === 'show') {
                        setToggle('hide')
                    }

                }}>Edit
            </button>


        </div>
    )
}