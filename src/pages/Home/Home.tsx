
import Introduction from "../../components/Introduction/Introduction";
import useHomeStyles from "./Home.style";

const Home = (): JSX.Element => {
  const classes = useHomeStyles();
  return (
    <section className={classes.section} id="home">
      <Introduction/>
    </section>
  );
};

export default Home;
