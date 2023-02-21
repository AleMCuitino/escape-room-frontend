import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/pages/home/Home"
import ContainerMain from "../../components/container/ContainerMain";
import Error404 from "../../components/container/Error404";


function PublicRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" index element={<Home />} />
                <Route path="/container" index element={<ContainerMain />} />
                <Route path="/error" index element={<Error404/>} />
                {/* <Route path="/about" element ={<About/>}/>
                    <Route path="/contact" element = {<Contact/>}/>
                    <Route path="*" element = {<NoPage/>}/> */}

            </Routes>
        </Router>
    );
}
export default PublicRouter;