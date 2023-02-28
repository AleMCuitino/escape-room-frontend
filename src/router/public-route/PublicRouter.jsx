import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/pages/home/Home";
import LoginAdmin from "@/pages/admin/login-admin/LoginAdmin.jsx";

function PublicRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" index element={<Home />} />
                <Route path="/login" element ={<LoginAdmin/>}/>
                    {/* <Route path="/contact" element = {<Contact/>}/>
                    <Route path="*" element = {<NoPage/>}/>  */}

            </Routes>
        </Router>
    );
}
export default PublicRouter;