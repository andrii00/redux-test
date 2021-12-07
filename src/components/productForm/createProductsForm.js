import {useState} from "react";
import './createForm.css'
import {useSelector} from "react-redux";
import {useHistory} from "react-router";

export default function CreateProductsForm({onProductCreate}) {
    const [title, setTitle] = useState('')
    const {products: {products}} = useSelector((products) => products)
    const [description, setDescription] = useState('')
    const [loading, setLoading] = useState(false)
    const [search, setSearch] = useState('')
    const history = useHistory()


    const searchTitle = ({key, target: {value}}) => {
        if (key === 'Enter') {
            const foundTitle = products.find(({title}) => title.toLowerCase().startsWith(value.toLowerCase()))
            setSearch('')
            if (!foundTitle) {
                return alert('Product not found!')
            }
            history.push(`/${foundTitle.id}`)
        }
    }

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
            <form>
                <input
                    className='inputSearch'
                    type="text"
                    placeholder='search'
                    value={search}
                    onChange={({target: {value}}) => setSearch(value)}
                    onKeyDown={searchTitle}
                />
            </form>
            <br/>
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