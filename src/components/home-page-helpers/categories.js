import { Image, Grid, Dimmer, Dimmable, Header, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import CategoryDetails from "./categoryDetails";
const Categories = () => {
  const categories = [
    {
      name: "Fruits & Vegetables",
      image: "/assets/category1-h3.jpg"
    },
    {
      name: "Meat & Fish",
      image: "/assets/category2-h3.jpg"
    },
    {
      name: "Grocery & Essentials",
      image: "/assets/category3-h3.jpg"
    },
    {
      name: "Beverages",
      image: "/assets/category4-h3.jpg"
    }
  ];
  return (
    <>
      <Grid.Row centered className="category-row">
        {categories.map((category, i) => (
          <div className="column" style={{ width: "fit-content", marginTop: "2em" }}>
            <CategoryDetails key={i} data={category} />
          </div>
        ))}
      </Grid.Row>
    </>
  );
};
export default Categories;
