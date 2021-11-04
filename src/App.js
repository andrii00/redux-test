import './App.css';
import {useDispatch} from "react-redux";
import CreateProductsForm from "./components/createProductsForm";
import {PUSH_NEW_PRODUCT} from "./action.types/actionTypes";
import {RoutingConfig} from "./routing/routing";


function App() {
    const dispatch = useDispatch();
    const onProductCreate = async (title, description) => {
        if (!title || !description) return;

        const response = await fetch('http://localhost:8888/create-todo', {
            method: 'POST',
            body: JSON.stringify({title, description}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
        dispatch({type: PUSH_NEW_PRODUCT, payload: data})

    }
    return (
        <div className="App">

            <CreateProductsForm onProductCreate={onProductCreate}/>
            <RoutingConfig/>
        </div>
    );
}

export default App;
