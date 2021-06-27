import React from "react";
import HomeNav from "../components/Navbars/HomeNav";
import ImageCarousel from "../components/carousel/ImageCarousel";
import Categories from "../components/categories";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Segment, Container } from "semantic-ui-react";
import { Image, Grid } from "semantic-ui-react";

const Home = () => {
  return (
    <>
      <HomeNav />

      <div className="ui grid ">
        <div className=" row">
          <div className=" column image-car">
            <ImageCarousel />
          </div>
        </div>

        <Grid centered className="category-grid">
          <Categories />
          <Grid.Row>
            <Grid.Column>
              {/* <Container> */}{" "}
              <Segment>
                <div className="ui  grid">
                  <div className="row">
                    <div className="center aligned column">
                      <h3>Our Products</h3>
                    </div>
                  </div>
                  <div className="row margin-no" style={{ marginTop: "-1em" }}>
                    <div className="center aligned column">
                      <h1>What's Hot?</h1>
                    </div>
                  </div>
                  <div className="centered row " style={{ marginTop: "-1em" }}>
                    <div className="ui one column centered grid">
                      <div className="column" style={{ padding: 0 }}>
                        <div className="ui three column centered grid">
                          <div className="column list-filters">Featured</div>
                          <div className="column list-filters">Best seller</div>
                          <div className="column list-filters">Top rated</div>
                        </div>
                      </div>
                    </div>
                    {/* <div className=" list-filters column" style={{ width: "fit-content" }}>
                      <div className="list-filters">Featured</div>
                    </div>
                    <div className=" list-filters column">
                      <div className="list-filters">Best seller</div>
                    </div>
                    <div className=" list-filters column">
                      <div>Top rated</div>
                    </div> */}
                  </div>
                </div>
              </Segment>
              {/* </Container> */}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </>
  );
};
export default Home;
