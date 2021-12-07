import {useEffect, useState} from "react";
import './fullProduct.css'
import {fetchProduct, fetchProducts} from "../../features/product/productSlice";
import {useDispatch, useSelector} from "react-redux";
import EditForm from "../editForm/editForm";
import ListOfSimilarProduct from "../listOfSimilarProduct/listOfSimilarProduct";

export default function FullProduct({match: {params: {id}}}) {
    const dispatch = useDispatch()
    const [toggle, setToggle] = useState('hide')
    const {products: {products}} = useSelector((products) => products)


    useEffect(() => {
        dispatch(fetchProducts())
        dispatch(fetchProduct(id))
    }, [id])

    const {product, isLoading} = useSelector(({products: {product, isLoading}}) => {
        return {product, isLoading}
    })

    if (isLoading) {
        return <h1>LOADING...</h1>
    }


    const foundTitle = products.filter(val => {
       return  val.title.startsWith(product.title) && val.description.startsWith(product.description) && val.id !== product.id
    })

    foundTitle.length = 3

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

            {foundTitle.map(val => <ListOfSimilarProduct key={val.id} value={val}/>)}

        </div>
    )
}