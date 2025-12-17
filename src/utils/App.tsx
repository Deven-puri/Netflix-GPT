import "./index.css";
import { Provider } from "react-redux";
import appStore from "./appstore.tsx";
import Body from "../Components/Body.tsx";

function App() {
    return (
        <Provider store={appStore}>
            <Body />
        </Provider>
    );
}

export default App;  
    