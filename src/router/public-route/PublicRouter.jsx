import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/pages/admin/home/Home";
import LoginAdmin from "@/pages/admin/login-admin/LoginAdmin.jsx";

function PublicRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" index element={<Home />} />
                <Route path="/login" element ={<LoginAdmin/>}/>

            </Routes>
        </Router>
    );
}
export default PublicRouter;