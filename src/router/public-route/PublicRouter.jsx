import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../../pages/home/Home"
import ContainerMain from "../../components/container/ContainerMain";
import Error404 from "../../components/animations/Error404";
import HomeLoading from "../../pages/escape-room/Home/HomeLoading";
import StageOne from '@/pages/escape-room/Stage-one/StageOne'

function PublicRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" index element={<Home/>} />
                <Route path="/home" element={<HomeLoading />} />

                {/*   Niveles del Juego */}
                <Route path="/stage-one" element={<StageOne/>} /> {/*//* Ada Lovelace */}

                <Route path="/container" element={<ContainerMain />} />
                <Route path="/404" element={<Error404/>} />

                {/* <Route path="/about" element ={<About/>}/>
                    <Route path="/contact" element = {<Contact/>}/>
                    <Route path="*" element = {<NoPage/>}/> */}

            </Routes>
        </Router>
    );
}
export default PublicRouter;