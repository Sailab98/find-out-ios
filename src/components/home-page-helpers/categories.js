import { Image, Grid, Dimmer, Dimmable, Header, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
const Categories = () => {
  return (
    <>
      <Grid.Row centered className="category-row">
        {/* <div> */}
        <Grid.Column className="category-column">
          <Link to="www.wikipedia.com">
            <Image src="/assets/category1-h3.jpg" size="small" circular className="cat-image" />
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
            Fruits and Vegetables
          </div>
        </Grid.Column>
        <Grid.Column className="category-column">
          <Link to="www.wikipedia.com">
            <Image src="/assets/category2-h3.jpg" size="small" circular className="cat-image" />
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
              Meat & Fish
            </div>
          </Link>
        </Grid.Column>
        <Grid.Column className="category-column">
          <Link to="www.wikipedia.com">
            <Image src="/assets/category3-h3.jpg" size="small" circular className="cat-image" />
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
              Grocery & Essentials
            </div>
          </Link>
        </Grid.Column>
        <Grid.Column className="category-column">
          <Link to="www.wikipedia.com">
            <Image src="/assets/category4-h3.jpg" size="small" circular className="cat-image" />
            <div
              className="category-name"
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
              Beverages
            </div>
          </Link>
        </Grid.Column>
        {/* </div> */}
      </Grid.Row>
    </>
  );
};
export default Categories;
