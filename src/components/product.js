import {DELETE_PRODUCT} from "../action.types/actionTypes";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";

export default function Product({product}) {
    const dispatch = useDispatch();

    const deleteConfirm = (id) => {
        // eslint-disable-next-line no-restricted-globals
        const confirmDelete = confirm('Delete?')
        if (confirmDelete === true) {
            return fetchDelete(id)
        } else if (confirmDelete === false) {
            return alert('Product did not delete')
        }
    }
    const fetchDelete = async (id) => {
        await fetch(`http://localhost:8888/delete-todo/${id}`, {
            method: 'DELETE'
        })
        dispatch({type: DELETE_PRODUCT, payload: id})
        alert('Product deleted')
    }


    return (
        <div key={product.id}>
            <h4>
                {product.title}
            </h4>
            <p>{product.description}</p>
            <span>Created at: {new Date(product.createdAt).toLocaleString()}</span>
            <br/>
            <button onClick={() => {
                deleteConfirm(product.id)
            }}>delete
            </button>
            <Link to={`/${product.id}`}> Open full </Link>
            <hr/>
        </div>
    )
}