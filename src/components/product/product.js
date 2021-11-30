import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {fetchDelete} from "../../features/product/productSlice";
import './product.css'

export default function Product({product}) {
    const dispatch = useDispatch();

    const deleteConfirm = (id) => {
        // eslint-disable-next-line no-restricted-globals
        const confirmDelete = confirm('Delete?')
        if (confirmDelete === true) {
            return dispatch(fetchDelete(id))
        } else if (confirmDelete === false) {
            return alert('Product did not delete')
        }
    }

    return (
        <div
            key={product.id}>
            <h4>
                {product.title}
            </h4>
            <p>{product.description}</p>
            <span>Created at: {new Date(product.createdAt).toLocaleString()}</span>
            <br/>
            <div className='displayProduct'>
                <button
                    className='buttonDelete'
                    onClick={() => {
                        deleteConfirm(product.id)
                    }}>delete
                </button>

                    <Link to={`/${product.id}`}>
                        Open Full
                    </Link>



            </div>
            <hr/>
        </div>
    )
}