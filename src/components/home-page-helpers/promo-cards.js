import { Grid, Card } from "semantic-ui-react";
const PromoCards = () => {
  return (
    <>
      <div className="ui stackable grid promo-cards">
        {" "}
        <Grid.Row columns={3}>
          <Grid.Column>
            <div className="ui raised segments">
              <Card fluid href="#card-example-link-card" image="/assets/blog-6-410x250.jpg" />
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="ui raised segments">
              <Card fluid href="#card-example-link-card" image="/assets/blog-1-410x250.jpg" />
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="ui raised segments">
              <Card fluid href="#card-example-link-card" image="/assets/blog-6-410x250.jpg" />
            </div>
          </Grid.Column>
        </Grid.Row>
      </div>
    </>
  );
};
export default PromoCards;
