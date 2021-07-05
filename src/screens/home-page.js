import React from "react";
import HomeNav from "../components/Navbars/HomeNav";
import ImageCarousel from "../components/carousel/ImageCarousel";
import Categories from "../components/home-page-helpers/categories";
import NewArrivals from "../components/home-page-helpers/newArrivals";
import PromoCards from "../components/home-page-helpers/promo-cards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Segment, Container } from "semantic-ui-react";
import { Image, Grid, Card, Divider, Menu, Label, Input } from "semantic-ui-react";

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
          <Grid.Row>
            <PromoCards />
          </Grid.Row>
        </Grid>
        <div className="row">
          <div className=" column ">
            <div className="ui inverted segment border-radius-no footer">
              <div className="ui grid">
                <div className="column footer-column">
                  <div className="ui inverted vertical borderless menu  footer-column">
                    <Menu.Item
                      header
                      name="inbox"
                      // active={activeItem === "inbox"}
                      // onClick={this.handleItemClick}
                    >
                      Inbox
                    </Menu.Item>

                    <Menu.Item
                      name="spam"
                      // active={activeItem === "spam"}
                      // onClick={this.handleItemClick}
                    >
                      Spam
                    </Menu.Item>

                    <Menu.Item
                      name="updates"
                      // // active={activeItem === "updates"}
                      // onClick={this.handleItemClick}
                    >
                      Updates
                    </Menu.Item>
                    <Menu.Item>
                      <Input icon="search" placeholder="Search mail..." />
                    </Menu.Item>
                  </div>
                </div>
                <div className="column footer-column">
                  <Menu vertical inverted borderless>
                    <Menu.Item
                      header
                      name="inbox"
                      // active={activeItem === "inbox"}
                      // onClick={this.handleItemClick}
                    >
                      Inbox
                    </Menu.Item>

                    <Menu.Item
                      name="spam"
                      // active={activeItem === "spam"}
                      // onClick={this.handleItemClick}
                    >
                      Spam
                    </Menu.Item>

                    <Menu.Item
                      name="updates"
                      // // active={activeItem === "updates"}
                      // onClick={this.handleItemClick}
                    >
                      Updates
                    </Menu.Item>
                    <Menu.Item>
                      <Input icon="search" placeholder="Search mail..." />
                    </Menu.Item>
                  </Menu>
                </div>
                <div className="column footer-column">
                  <Menu vertical inverted borderless>
                    <Menu.Item
                      header
                      name="inbox"
                      // active={activeItem === "inbox"}
                      // onClick={this.handleItemClick}
                    >
                      Inbox
                    </Menu.Item>

                    <Menu.Item
                      name="spam"
                      // active={activeItem === "spam"}
                      // onClick={this.handleItemClick}
                    >
                      Spam
                    </Menu.Item>

                    <Menu.Item
                      name="updates"
                      // // active={activeItem === "updates"}
                      // onClick={this.handleItemClick}
                    >
                      Updates
                    </Menu.Item>
                    <Menu.Item>
                      <Input icon="search" placeholder="Search mail..." />
                    </Menu.Item>
                  </Menu>
                </div>
                <div className="column footer-column">
                  <Menu vertical inverted borderless>
                    <Menu.Item
                      header
                      name="inbox"
                      // active={activeItem === "inbox"}
                      // onClick={this.handleItemClick}
                    >
                      Inbox
                    </Menu.Item>

                    <Menu.Item
                      name="spam"
                      // active={activeItem === "spam"}
                      // onClick={this.handleItemClick}
                    >
                      Spam
                    </Menu.Item>

                    <Menu.Item
                      name="updates"
                      // // active={activeItem === "updates"}
                      // onClick={this.handleItemClick}
                    >
                      Updates
                    </Menu.Item>
                    <Menu.Item>
                      <Input icon="search" placeholder="Search mail..." />
                    </Menu.Item>
                  </Menu>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
