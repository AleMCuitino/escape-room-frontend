import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../../pages/admin/home/Home";
import LoginAdmin from "@/pages/admin/login-admin/LoginAdmin.jsx";
import BoardAdmin from "../../pages/admin/board-admin/BoardAdmin";
import ContainerMain from "../../components/container/ContainerMain";
import Error404 from "../../components/animations/Error404";
import HomeLoading from "@/pages/escape-room/Home/HomeLoading";
import AutoLogin from "../../pages/escape-room/auto-login/AutoLogin";
import StageOne from '@/pages/escape-room/Stage-one/StageOne'

function PublicRouter() {
    return (
        <Router>
            <Routes>

               {/*  Zona de Participantes  */}
                <Route path="/" index element={<Home/>} />
                <Route path="/home" element={<HomeLoading />} />
                <Route path="/container" element={<ContainerMain />} />
                <Route path="/404" element={<Error404/>} />

                {/*   Niveles del Juego */}
                <Route path="/stage-one" element={<StageOne/>} /> {/*//* Ada Lovelace */}

                {/* Zona de administrador */}
                <Route path="/login" element ={<LoginAdmin/>}/>
                <Route path="/mi-admin" element ={<BoardAdmin />}/>
                <Route path="/login-auto/:email/:name" element={<AutoLogin/>}/>
            </Routes>
        </Router>
    );
}
export default PublicRouter;