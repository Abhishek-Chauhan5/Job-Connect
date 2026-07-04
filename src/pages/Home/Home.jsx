import Hero from "../../components/Hero/Hero";
import SearchBar from "../../components/SearchBar/SearchBar";
import Categories from "../../components/Categories/Categories";
import FeaturedJobs from "../../components/FeaturedJobs/FeaturedJobs";

const Home = () => {
  return (
    <>
      <Hero />
      <SearchBar />
      <Categories/>
      <FeaturedJobs/>
    </>
  );
};

export default Home;