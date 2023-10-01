import Details from "../components/Details";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="">
        <Sidebar />
      </div>
      <div className="flex flex-col w-full px-8 overflow-y-auto bg-indigo-50">
        <Navbar />
        <Details />
      </div>
    </div>
  );
};
export default Dashboard;
