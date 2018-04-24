import React from 'react';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Image,
  List,
  Segment,
} from 'semantic-ui-react';
import scrollToElement from 'scroll-to-element';

import Hero from './Hero/Hero.js';


export class Landing extends React.PureComponent {
  scrollToContent = () => {
    scrollToElement('#scroll-handler', {
      offset: -50, // header
    });
  }

  render() {
    return (
      <div>
        <Hero handleClick={this.scrollToContent}/>

        <Segment style={{ padding: '8em 0em' }} vertical id="scroll-handler">
          <Grid container stackable verticalAlign='middle'>
            <Grid.Row>
              <Grid.Column width={8}>
                <Header as='h3' style={{ fontSize: '2em' }}>Engineered to help business thrive.</Header>
                <p style={{ fontSize: '1.33em' }}>
                  We can give your company superpowers to do things that they never thought possible. Enterprise solutions with Google Cloud Platform(GCP) and G Suite.
                  Flexible infrastructure. Intelligent Insights. End-to-end security. Modern productivity.
                </p>
                <Header as='h3' style={{ fontSize: '2em' }}>Our Customers</Header>
                <p style={{ fontSize: '1.33em' }}>
                  We work with customers from all over the world, in a wide range of industries, including healthcare, media, gaming, retail, and more. These are just a few.
                </p>
              </Grid.Column>
              <Grid.Column floated='right' width={6}>
                <Image
                  bordered
                  shape='rounded'
                  size='large'
                  src='http://via.placeholder.com/320x320'
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column textAlign='center'>
                <Button size='huge'>Check Them Out</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment style={{ padding: '0em' }} vertical>
          <Grid celled='internally' columns='equal' stackable>
            <Grid.Row textAlign='center'>
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                <Header as='h3' style={{ fontSize: '2em' }}>"What a Company"</Header>
                <p style={{ fontSize: '1.33em' }}>That is what they all say about us</p>
              </Grid.Column>
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                <Header as='h3' style={{ fontSize: '2em' }}>"I shouldn't have gone with their competitor."</Header>
                <p style={{ fontSize: '1.33em' }}>
                  <Image avatar src='http://via.placeholder.com/32x32'/>
                  <b>Justin</b> CTO Adams Inc
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment style={{ padding: '8em 0em' }} vertical>
          <Container text>
            <Header as='h3' style={{ fontSize: '2em' }}>Breaking The Grid, Grabs Your Attention</Header>
            <p style={{ fontSize: '1.33em' }}>
              Instead of focusing on content creation and hard work, we have learned how to master the art of doing
              nothing by providing massive amounts of whitespace and generic content that can seem massive, monolithic
              and worth your attention.
            </p>
            <Button as='a' size='large'>Read More</Button>
            <Divider
              as='h4'
              className='header'
              horizontal
              style={{ margin: '3em 0em', textTransform: 'uppercase' }}
            >
              <a>Case Studies</a>
            </Divider>
            <Header as='h3' style={{ fontSize: '2em' }}>Sneak Peek: Beyond React 16</Header>
            <p style={{ fontSize: '1.33em' }}>
              Dan Abramov from Team Facebook, just spoke at JSConf Iceland 2018 with a preview of some new features they've been working on in React.
              The talk opens with a question: "With vast differences in computing power and network speed, how do we deliver the best user experience for everyone?"
            </p>
            <Button as='a' size='large'>I'm Quite Interested!</Button>
          </Container>
        </Segment>

        {/* footer */}
        <Segment inverted vertical style={{ padding: '5em 0em' }}>
          <Container>
            <Grid divided inverted stackable>
              <Grid.Row>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='COMPANY' />
                  <List link inverted>
                    <List.Item as='a'>Blog</List.Item>
                    <List.Item as='a'>About Us</List.Item>
                    <List.Item as='a'>Contact Us</List.Item>
                    <List.Item as='a'>Jobs</List.Item>
                    <List.Item as='a'>The Team</List.Item>
                    <List.Item as='a'>Live Chat</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='PRODUCT' />
                  <List link inverted>
                    <List.Item as='a'>Link One</List.Item>
                    <List.Item as='a'>Link Two</List.Item>
                    <List.Item as='a'>Link Three</List.Item>
                    <List.Item as='a'>Link Four</List.Item>
                  </List>
                </Grid.Column>

                <Grid.Column width={3}>
                  <Header inverted as='h4' content='SERVICES' />
                  <List link inverted>
                    <List.Item as='a'>Link One</List.Item>
                    <List.Item as='a'>Link Two</List.Item>
                    <List.Item as='a'>Link Three</List.Item>
                    <List.Item as='a'>Link Four</List.Item>
                  </List>
                </Grid.Column>

                <Grid.Column width={7}>
                  <Header as='h4' inverted>Footer Header</Header>
                  <p>Extra space for a call to action inside the footer that could help re-engage users.</p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
      </div>
    );
  }
}

export default Landing;
