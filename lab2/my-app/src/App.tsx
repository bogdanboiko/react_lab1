import './App.css';
import {Routes, Route} from "react-router-dom";
import {Header} from "./components/header";
import {Footer} from "./components/footer";
import {Works} from "./components/works/works";
import {Blog} from "./components/blog/blog";

function App() {
    return (
        <div className='App'>
            <Header links={link}/>
            <Routes>
                <Route path='/' element={<Works/>}/>
                <Route path='/blog' element={<Blog/>}/>
            </Routes>
            <Footer links={link}/>
        </div>
    )
}

const link = ["Home", "About us", "Features", "Pricing", "FAQ", "Blog"]

export default App;