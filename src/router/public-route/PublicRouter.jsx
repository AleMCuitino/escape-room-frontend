import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContainerMain from "../../components/container/ContainerMain";
import Error404 from "../../components/animations/Error404";
import HomeLoading from "../../pages/escape-room/Home/HomeLoading";
import Start from "../../pages/escape-room/Start/Start";
import Waiting from "../../pages/escape-room/Start/Waiting";

function PublicRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/home" index element={<HomeLoading />} />
                <Route path="/container" index element={<ContainerMain />} />
                <Route path="/404" index element={<Error404/>} />
                <Route path="/start" index element={<Start/>} />
                <Route path="/waiting" index element={<Waiting/>} />

            </Routes>
        </Router>
    );
}
export default PublicRouter;