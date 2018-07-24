import React, { Component } from "react";
import { Card, Icon, Image, Grid } from "semantic-ui-react";
import fomologo from "../../../fomologo.png";
import profileavatar from "../../../profileavatar.png";
import "./About.css";

export default class About extends Component {
  render() {
    return (
      <div className="boxcontainer">
        <div>
          <Grid celled="internally">
            <Grid.Row>
              <Grid.Column width={3}>
                <Card className="cardtwo">
                  <Image src={profileavatar} />
                  <Card.Content>
                    <Card.Header>Meet the Team:</Card.Header>
                    <Card.Header>Tony</Card.Header>
                    <Card.Meta>
                      <span className="date">CE0 and Founder</span>
                      <br />
                      <span className="date">
                        Born/Raised in Grand Rapids, MI
                      </span>
                    </Card.Meta>
                    <Card.Description>
                      Code. Eat. Sleep. Repeat.
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <a>
                      <Icon name="connectdevelop" />
                      ReactJS, NodeJS, Javascript
                    </a>
                  </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column color="" width={10}>
                <div className="aboutinfo">
                  <br />
                  <h1>About Us:</h1>
                  <h3>Do you have FOMO (Fear of Missing Out)?</h3>
                  <p>
                    Sign up for FOMO-NOMO, stay updated on all events that are
                    happening. NO MO to the FOMO!
                  </p>
                  <p>
                    Let's bring people, food, events, and good vibes together.
                  </p>
                  <p>#NEVERMISSOUT</p>
                </div>
              </Grid.Column>
              <Grid.Column width={3}>
                <Card.Description>
                  <a>
                    <Icon size="huge" name="facebook" />
                    <hr />
                    <Icon size="huge" name="instagram" />
                    <hr />
                    <Icon size="huge" name="twitter square" />
                  </a>
                </Card.Description>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </div>
    );
  }
}
