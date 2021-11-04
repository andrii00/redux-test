import {useState} from "react";

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
        }catch (e){
            console.log(e);
        }finally {
            setLoading(false)
        }

    }


    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder='title'
                value={title}
                onChange={({target: {value}}) => setTitle(value)}/>
            <br/>
            <input
                type="text"
                value={description}
                placeholder='description'
                onChange={({target: {value}}) => setDescription(value)}/>
            <br/>
            <button type='submit' disabled={!title || !description || loading}>create product</button>
        </form>
    )
}