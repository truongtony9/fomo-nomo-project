import React, { Component } from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import fomologo from "../../../fomologo.png";
import profileavatar from "../../../profileavatar.png";

export default class About extends Component {
  render() {
    return (
      <div className="body">
        <div className="cardone">
          <Card>
            <Image src={fomologo} />
            <Card.Content>
              <Card.Header>Who Are We?</Card.Header>
              <Card.Header>FOMO-NOMO</Card.Header>
              <Card.Meta>
                <span className="date">Started in Dallas, TX</span>
              </Card.Meta>
              <Card.Description>
                <br />
                <p>Do you have FOMO (Fear of Missing Out)?</p>
                <p>
                  Sign up for FOMO-NOMO, stay updated on all events that are
                  happening. NO MO to the FOMO!
                </p>
                <p>
                  Let's bring people, food, events, and good vibes together.
                </p>
                <p>#NEVERMISSOUT</p>
              </Card.Description>
            </Card.Content>

            <Card.Description>
              <a>
                <Icon name="facebook" />
                <Icon name="instagram" />
                <Icon name="twitter square" />
              </a>
            </Card.Description>
          </Card>
        </div>
        <div>
          <Card className="cardtwo">
            <Image src={profileavatar} />
            <Card.Content>
              <Card.Header>Meet the Team:</Card.Header>
              <Card.Header>Tony</Card.Header>
              <Card.Meta>
                <span className="date">Born/Raised in Grand Rapids, MI</span>
              </Card.Meta>
              <Card.Description>
                Tony is new to the web development community and aspiring to be
                a software engineer.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name="connectdevelop" />
                ReactJS, NodeJS, Javascript
              </a>
            </Card.Content>
          </Card>
        </div>
      </div>
    );
  }
}
