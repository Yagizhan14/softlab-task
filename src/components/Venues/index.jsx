import React from "react";
import "./Venues.scss";
import { Container, Row } from "react-bootstrap";
import { connect } from "react-redux";

const Venues = ({ venues }) => {
  console.log(venues);

  let welcomeScreen = (
    <Container>
      <div className="welcome-screen">
        <h1 className="welcome-screen-header">
          <span className="brand-name">Valletta Mekanları</span>'na Hoşgeldiniz
        </h1>
        <p className="welcome-screen-p">
          Bu uygulama Malta'nın başkenti olan Valletta şehrindeki önemli buluşma
          noktalarını içerir. Sol tarafta gördüğünüz kategorilerden herhangi
          birini seçip buluşma noktalarını görebilirsiniz.
        </p>
      </div>
    </Container>
  );

  let renderVenues = (
    <Container>
      <Row></Row>
    </Container>
  );
  return <div className="Venues">{welcomeScreen}</div>;
};

const mapStateToProps = state => {
  return {
    venues: state.venues,
  };
};

export default connect(mapStateToProps)(Venues);
