import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/pages/home/Home";
import LoginAdmin from "@/pages/admin/login-admin/LoginAdmin.jsx";
import BoardAdmin from "../../pages/admin/board-admin/BoardAdmin";
import ContainerMain from "../../components/container/ContainerMain";
import Error404 from "../../components/animations/Error404";
import Start from "../../pages/escape-room/Start/Start";
import Waiting from "../../pages/escape-room/Start/Waiting";
import HomeLoading from "@/pages/escape-room/Home/HomeLoading";
import AutoLogin from "../../pages/escape-room/auto-login/AutoLogin";
import StageOne from '@/pages/escape-room/stage/StageOne';
import StageTwo from "@/pages/escape-room/stage-two/StageTwo";
import Bubble from "../../components/navigation/game/Bubble";
// import StageThree from "@/pages/escape-room/stage-three/StageThree";
import Trip from '@/components/animations/trip';




function PublicRouter() {
    return (
        <Router>
            <Routes>

               {/*  Zona de Participantes  */}
                <Route path="/" index element={<Home/>} />
                <Route path="/home" element={<HomeLoading />} />
                <Route path="/container" element={<ContainerMain />} />
                <Route path="/404" element={<Error404/>} />
                <Route path="/start" index element={<Start/>} />
                <Route path="/waiting" index element={<Waiting/>} />
                <Route path="/trip/:path" index element={<Trip/>} /> 
                <Route path="/nav" index element={<Bubble/>} />

                {/*   Niveles del Juego */}
                <Route path="/stage-one" element={<StageOne/>} /> {/*//* Ada Lovelace */}
                <Route path="/stage-two" element={<StageTwo/>} /> {/*//* Hedy Lamarr */}

                
                {/* Zona de administrador */}
                <Route path="/login" element ={<LoginAdmin/>}/>
                <Route path="/mi-admin" element ={<BoardAdmin />}/>
                <Route path="/login-auto/:email/:name" element={<AutoLogin/>}/>
            </Routes>
        </Router>
    );
}
export default PublicRouter;

/*
 <Route path="/stage-three" element={<StageThree/>} />  {/*//* ENIAC Programmers /}
*/