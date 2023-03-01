import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../../pages/home/Home"
import ContainerMain from "../../components/container/ContainerMain";
import Error404 from "../../components/animations/Error404";
import HomeLoading from "../../pages/escape-room/Home/HomeLoading";


function PublicRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/home" index element={<HomeLoading />} />
                <Route path="/container" index element={<ContainerMain />} />
                <Route path="/404" index element={<Error404/>} />
                <Route path="/" element ={<Home/>}/>
            </Routes>
        </Router>
    );
}
export default PublicRouter;