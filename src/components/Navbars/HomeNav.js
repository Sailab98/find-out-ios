import React from "react";
import { Menu, Segment, Dropdown, Icon, Container } from "semantic-ui-react";

const HomeNav = () => {
  return (
    <>
      <Menu
        size="huge"
        className="border-radius-none"
        inverted
        borderless
        fixed="top"
        style={{ position: "inherit" }}>
        <Container>
          <Menu.Item as="a" name="home" header />
          <Menu.Item
            as="a"
            name="messages"
            // active={activeItem === "messages"}
            // onClick={this.handleItemClick}
          />
          <Menu.Item
            as="a"
            name="friends"
            // active={activeItem === "friends"}
            // onClick={this.handleItemClick}
          />
          <Menu.Item>
            <Dropdown item text="Categories">
              <Dropdown.Menu>
                <Dropdown.Item>Electronics</Dropdown.Item>
                <Dropdown.Item>Automotive</Dropdown.Item>
                <Dropdown.Item>Home</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>

          <Menu.Menu position="right">
            <Menu.Item>
              <a href="www.wikipedia.com">
                <Icon.Group>
                  <Icon size="large" className="heart " circular />
                  <Icon inverted color="red" corner="top right" name="add" size="huge" />
                </Icon.Group>
              </a>
            </Menu.Item>
            <Menu.Item>
              <a href="www.wikipedia.com">
                <Icon size="large" className="cart "></Icon>
              </a>
            </Menu.Item>
            <Menu.Item name="logout" />
          </Menu.Menu>
        </Container>
      </Menu>
    </>
  );
};
export default HomeNav;
