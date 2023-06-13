import Header from "../components/Header";
import Meta from "../components/Meta";



const Theme = () => {
  // page content
  const PageTitle1 = "Themes";
  const Description1 ="";

  return (
    <div>
      <Meta title={PageTitle1} />
      <Header head={PageTitle1} description={Description1} />
    </div>
  );
};

export default Theme;