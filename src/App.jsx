import "./assets/css/app.css";
import { SideBar } from "./components/SideBar";
import { TopBar } from "./components/TopBar";
import { Footer } from "./components/Footer";
import { TableMovies } from "./pages/movies-list-page";
import { ContentRowTop } from "./pages/home-admin-page";

function App() {
  return (
    <>
      <div id="wrapper">
        <SideBar />

        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <TopBar />

            <div className="container-fluid">
              
              <ContentRowTop/>
              <TableMovies />
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
