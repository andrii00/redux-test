import {createSlice} from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: 'product',
    initialState: {
        products: [],
        product: {},
        isLoading: false
    },
    reducers: {
        addProducts(state, action) {
            state.products = action.payload.sort((a, b) => {
                return a.title.localeCompare(b.title)
            })
        },
        addProductsReverse(state, action) {
            state.products = action.payload.sort((a, b) => {
                return b.title.localeCompare(a.title)
            })
        },
        addProductsCreatedAtReverse(state, action) {
            state.products = action.payload.sort((a, b) => {
                return b.createdAt.localeCompare(a.createdAt)
            })
        },
        addProductsCreatedAt(state, action) {
            state.products = action.payload.sort((a, b) => {
                return a.createdAt.localeCompare(b.createdAt)
            })
        },
        setLoadingTrue(state) {
            state.isLoading = true
        },
        setLoadingFalse(state) {
            state.isLoading = false
        },
        pushNewProduct(state, action) {
            state.products.push(action.payload)
        },
        deleteProduct(state, action) {
            state.products = state.products.filter(product => product.id !== action.payload)
        },
        fullProduct(state, action) {
            state.product = action.payload
        }

    }
})

export const {
    addProducts,
    addProductsReverse,
    setLoadingTrue,
    setLoadingFalse,
    addProductsCreatedAt,
    addProductsCreatedAtReverse,
    pushNewProduct,
    deleteProduct,
    fullProduct
} = productSlice.actions

export const fetchProducts = () => async dispatch => {
    dispatch(setLoadingTrue())

    const response = await fetch('http://localhost:8888/get-todos');
    const data = await response.json()

    dispatch(addProducts(data))
    dispatch(setLoadingFalse())
}
export const fetchProductsReverse = () => async dispatch => {
    dispatch(setLoadingTrue())

    const response = await fetch('http://localhost:8888/get-todos');
    const data = await response.json()

    dispatch(addProductsReverse(data))
    dispatch(setLoadingFalse())
}
export const fetchProductsData = () => async dispatch => {
    dispatch(setLoadingTrue())

    const response = await fetch('http://localhost:8888/get-todos');
    const data = await response.json()

    dispatch(addProductsCreatedAt(data))
    dispatch(setLoadingFalse())
}
export const fetchProductsDataReverse = () => async dispatch => {
    dispatch(setLoadingTrue())

    const response = await fetch('http://localhost:8888/get-todos');
    const data = await response.json()

    dispatch(addProductsCreatedAtReverse(data))
    dispatch(setLoadingFalse())
}


export const createProduct = ({title, description}) => async dispatch => {
    const response = await fetch('http://localhost:8888/create-todo', {
        method: 'POST',
        body: JSON.stringify({title, description}),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const data = await response.json()
    dispatch(pushNewProduct(data))
}

export const editProduct = ({title, description, completed, id}) => async dispatch => {
    const response = await fetch(`http://localhost:8888/update-todo/${id}`, {
        method: "PATCH",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({title: title, description: description, completed: completed})
    })
    const data = await response.json()
    console.log(data);
    dispatch(fullProduct(data))
}


export const fetchDelete = (id) => async dispatch => {
    await fetch(`http://localhost:8888/delete-todo/${id}`, {
        method: 'DELETE'
    })
    dispatch(deleteProduct(id))
    alert('Product deleted')
}


export const fetchProduct = (id) => async dispatch => {
    dispatch(setLoadingTrue())
    const response = await fetch(`http://localhost:8888/todo/${id}`);
    const data = await response.json()
    dispatch(fullProduct(data))
    dispatch(setLoadingFalse())
}

export default productSlice.reducer