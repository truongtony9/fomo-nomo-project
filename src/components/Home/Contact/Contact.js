import React from 'react';
import { Card, Icon, Image, Grid } from 'semantic-ui-react';
import fomologo from '../../../fomologo.png';
import './Contact.css';

export default () => {
  return (
    <div>
      <div className="contactcontainer">
        <div>
          <Grid celled="internally">
            <Grid.Row>
              <Grid.Column width={3}>
                <Card className="contactcard">
                  {/* <Image src={fomologo} /> */}
                  <Card.Content>
                    <Card.Header>Customer Service Team:</Card.Header>

                    <Card.Meta>
                      <span>
                        We are available Monday thru Friday from 9am - 5pm.
                      </span>
                    </Card.Meta>
                    <Card.Description>
                      <p>We love to hear compliments and feedback.</p>
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
                </Card>
              </Grid.Column>
              <Grid.Column color="" width={10}>
                <div className="aboutinfo">
                  <br />
                  <h1>Contact Us:</h1>
                  <h3>
                    Let us know if you have any suggestions, comments, or
                    issues.
                  </h3>
                  <p>
                    Do not hesitate to call, message or reach out to us on
                    social media.
                  </p>
                  <p>
                    Add us on Facebook, Instagram, and Twitter. Feel free to
                    show us some love by commenting, liking, or tweeting us.
                  </p>
                  <p>FOMO-NOMO</p>
                  <p>#NEVERMISSOUT</p>
                </div>
              </Grid.Column>
              <Grid.Column width={3}>
                <Card.Description>
                  <a>
                    <h3>Our Social Media:</h3>
                    <hr />
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
    </div>
  );
};
