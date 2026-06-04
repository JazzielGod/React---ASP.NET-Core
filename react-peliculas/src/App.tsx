import Menu from "./componentes/Menu";
import LandingPage from "./features/home/componentes/LandingPage";

export default function App() {
    return (
        <>
            <Menu />
            <div className="container">
                <LandingPage />
            </div>
        </>
    );
}

