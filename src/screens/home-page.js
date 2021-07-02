import React from "react";
import HomeNav from "../components/Navbars/HomeNav";
import ImageCarousel from "../components/carousel/ImageCarousel";
import Categories from "../components/home-page-helpers/categories";
import NewArrivals from "../components/home-page-helpers/newArrivals";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Segment, Container } from "semantic-ui-react";
import { Image, Grid, Card, Divider } from "semantic-ui-react";

const Home = () => {
  const src = "/images/wireframe/image.png";

  return (
    <>
      <HomeNav />

      <div className="ui  grid ">
        <div className="row">
          <div className=" column image-car">
            <ImageCarousel />
          </div>
        </div>

        <Grid centered className="category-grid">
          <Categories />
          <Grid.Row>
            <Grid.Column>
              <Segment>
                <div className="ui stackable grid">
                  <div className="row slide-heading">
                    <div className="left aligned column ">
                      <h2>New Arrivals</h2>
                    </div>
                  </div>
                  <Divider />
                  <NewArrivals />
                </div>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </>
  );
};
export default Home;
