import TopBar from "../Components/Topbar";
import DatabaseList from "./DatabaseList";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />
      <DatabaseList />
    </div>
  );
};

export default HomePage;
