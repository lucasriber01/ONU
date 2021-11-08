import BarChart from "components/BarChart";
import DataTable from "components/DataTable";
import DonutChart from "components/DonutChart";
import Footer from "components/Footer";
import NavBar from "components/NavBar";
import YearChart from "components/YearChart";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="row px-3">
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Goals achieved(%)</h5>
            <BarChart/>
          </div>

          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Teste</h5>
            <DonutChart/>
          </div>
        </div>

        <div className="col-sm-12">
        <h5 className="text-center text-secondary">Development over the years</h5>

          <YearChart/>
        </div>


       <div className="py-3">
         <h2 className="text-primary">Points to be reached</h2>
       </div>
        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
