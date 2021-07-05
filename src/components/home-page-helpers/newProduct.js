import { Card, Image, Icon, Container } from "semantic-ui-react";
const NewProductDetails = ({ data }) => {
  return (
    <>
      {/* <Card.Group as="a" items={data}  borderless></Card.Group> */}
      <Container>
        <Card.Group itemsPerRow={4} centered>
          <Card className="carousel-card">
            <Image src={data.image} wrapped ui={false} />
            <Card.Content centered>
              <Card.Header>{data.header}</Card.Header>
              <Card.Meta>{data.meta}</Card.Meta>
              <Card.Description>{data.description}</Card.Description>
            </Card.Content>
          </Card>
        </Card.Group>
      </Container>
    </>
  );
};
export default NewProductDetails;
