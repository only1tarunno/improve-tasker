import Baner from "./components/Baner";
import Footer from "./components/Footer";
import Navbar from "./components/navbar";
import TaskBoard from "./components/tasks/TaskBoard";

const Page = () => {
  return (
    <>
      <Navbar />
      <Baner />
      <TaskBoard />
      <Footer />
    </>
  );
};

export default Page;
