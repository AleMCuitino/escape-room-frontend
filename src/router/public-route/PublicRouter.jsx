import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../../pages/home/Home"
import ContainerMain from "../../components/container/ContainerMain";
import Error404 from "../../components/animations/Error404";
import HomeLoading from "../../pages/escape-room/Home/HomeLoading";
// import StageOne from '@/pages/escape-room/Stage-one/StageOne';
import StageTwo from "../../pages/escape-room/stage-2/StageTwo";


function PublicRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/home" element={<HomeLoading />} />
                <Route path="/container" index element={<ContainerMain />} />
                <Route path="/404" element={<Error404/>} />
                <Route path="/" index element = {<Home/>} />
                <Route path="/stage-2" element={<StageTwo/>} /> {/*//* Hedy Lamarr */}
            </Routes>
        </Router>
    );
}
export default PublicRouter;