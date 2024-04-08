import Cluster from "../components/Cluster/Cluster";
import HomePageLayout from "../layout/home/Home";

const Home = () => {
  return (
      <Cluster />
  );
};

Home.getLayout = function getLayout(page) {
  return <HomePageLayout>{page}</HomePageLayout>;
};

export default Home;