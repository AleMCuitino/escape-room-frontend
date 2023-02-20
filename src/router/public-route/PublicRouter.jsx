import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../../pages/home/Home"

function PublicRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" index element={<Home />} />
                {/* <Route path="/about" element ={<About/>}/>
                    <Route path="/contact" element = {<Contact/>}/>
                    <Route path="*" element = {<NoPage/>}/> */}

            </Routes>
        </Router>
    );
}
export default PublicRouter;