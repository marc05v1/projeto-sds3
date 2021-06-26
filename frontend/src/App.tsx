import DataTable from "components/DataTable";
import Footer from "components/Footer";
import NavBar from "components/NavBar";


function App() {
  return (
    <>
      <NavBar />
      <div className= "container">
        <h1 className="text-primary">Site em desenvolvimento... </h1>
        <h2>Primeiros passos sendo dados!</h2>
        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
