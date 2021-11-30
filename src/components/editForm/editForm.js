import {useState} from "react";
import {useDispatch} from "react-redux";
import {editProduct} from "../../features/product/productSlice";
import './editForm.css'

export default function EditForm({id}) {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const [completed, setCompleted] = useState(false)

    const editProductFunc = async (title, description) => {
        if (!title || !description) return;

        return await dispatch(editProduct({title, description, completed, id}))
    }


    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!title || !description || loading) return;

        try {
            setLoading(true)
            await editProductFunc(title, description, id)
            setTitle('')
            setDescription('')
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false)
        }

    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    className='input'
                    type="text"
                    placeholder='title'
                    value={title}
                    onChange={({target: {value}}) => setTitle(value)}/>
                <br/>
                <input
                    className='input'
                    type="text"
                    value={description}
                    placeholder='description'
                    onChange={({target: {value}}) => setDescription(value)}/>
                <br/>
                <button
                    className='buttonEdit'
                    type='submit' onClick={() => {
                    setCompleted(true)
                }} disabled={!title || !description || loading}>edit product
                </button>
            </form>

        </div>
    )
}