import {useState} from "react";
import './createForm.css'

export default function CreateProductsForm({onProductCreate}) {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!title || !description || loading) return;

        try {
            setLoading(true)
            await onProductCreate(title, description)
            setTitle('')
            setDescription('')
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false)
        }

    }


    return (
        <div className='width70'>
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
                    className='button'
                    type='submit'
                    disabled={!title || !description || loading}>Create product
                </button>
            </form>
        </div>
    )
}