import { Link } from "react-router-dom";
import { Grid, Image } from "semantic-ui-react";
const CategoryDetails = ({ data }) => {
  return (
    <>
      <Grid.Column className="category-column">
        <Link to="www.wikipedia.com">
          <Image src={data.image} size="small" circular className="cat-image" />
        </Link>

        <div
          style={{
            position: "absolute",
            bottom: 50,
            width: "50%",
            color: "white",
            height: "fit - content",
            left: 55,
            textAlign: "center",
            fontSize: "larger"
          }}>
          {data.name}
        </div>
      </Grid.Column>
    </>
  );
};
export default CategoryDetails;
