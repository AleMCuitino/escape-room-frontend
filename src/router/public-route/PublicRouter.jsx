import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../../pages/admin/home/Home";
import LoginAdmin from "@/pages/admin/login-admin/LoginAdmin.jsx";
import BoardAdmin from "../../pages/admin/board-admin/BoardAdmin";
import ContainerMain from "../../components/container/ContainerMain";
import Error404 from "../../components/animations/Error404";
import HomeLoading from "../../pages/escape-room/Home/HomeLoading";


function PublicRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/home" index element={<HomeLoading />} />
                <Route path="/" index element={<Home />} />
                <Route path="/container" index element={<ContainerMain />} />
                <Route path="/404" index element={<Error404/>} />
                <Route path="/login" element ={<LoginAdmin/>}/>
                <Route path="/mi-admin" element ={<BoardAdmin />}/>
            </Routes>
        </Router>
    );
}
export default PublicRouter;