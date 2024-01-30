import Baner from "./components/Baner";
import Footer from "./components/Footer";
import Header from "./components/Header";

import TaskBoard from "./components/tasks/TaskBoard";

const Page = () => {
  return (
    <>
      <Header />
      <Baner />
      <TaskBoard />
      <Footer />
    </>
  );
};

export default Page;
