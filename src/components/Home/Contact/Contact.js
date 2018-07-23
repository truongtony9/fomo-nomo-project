import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import fomologo from "../../../fomologo.png";

export default () => {
  return (
    <div>
      <div className="contactcontainer">
        <Card>
          <Image src={fomologo} />
          <Card.Content>
            <Card.Header>Contact Us:</Card.Header>

            <Card.Meta>
              <span>
                Let us know if you have any suggestions, comments, or issues.
              </span>
            </Card.Meta>
            <Card.Description>
              <p>We love to hear feedback.</p>
              <Icon name="smile outline" />
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="map marker alternate" />
              Remote
            </a>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="call" />
              999-999-9999
            </a>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="mail" />
              some_fake_email@fakegmail.com
            </a>
          </Card.Content>
          <Card.Description>
            <a>
              <Icon size="huge" name="facebook" />
              <Icon size="huge" name="instagram" />
              <Icon size="huge" name="twitter square" />
            </a>
          </Card.Description>
        </Card>
      </div>
    </div>
  );
};
