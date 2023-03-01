import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContainerMain from "../../components/container/ContainerMain";
import Error404 from "../../components/animations/Error404";
import HomeLoading from "../../pages/escape-room/HomeLoading";


function PublicRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/home" index element={<HomeLoading />} />
                <Route path="/container" index element={<ContainerMain />} />
                <Route path="/404" index element={<Error404/>} />
                {/* <Route path="/about" element ={<About/>}/>
                    <Route path="/contact" element = {<Contact/>}/>
                    <Route path="*" element = {<NoPage/>}/> */}

            </Routes>
        </Router>
    );
}
export default PublicRouter;