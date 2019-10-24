import React from "react";
import "./Venues.scss";
import { Container, Row, Col } from "react-bootstrap";

const Venues = ({ venues }) => {
  const { venues: venuesList, selectedCategory } = venues;

  let welcomeScreen = (
    <div className="Venues">
      <Container>
        <div className="welcome-screen">
          <h1 className="welcome-screen-header">
            <span className="brand-name">Valletta Mekanları</span>'na
            Hoşgeldiniz
          </h1>
          <p className="welcome-screen-p">
            Bu uygulama Malta'nın başkenti olan Valletta şehrindeki önemli
            buluşma noktalarını içerir. Sol tarafta gördüğünüz kategorilerden
            herhangi birini seçip buluşma noktalarını görebilirsiniz.
          </p>
        </div>
      </Container>
    </div>
  );

  let venueStyles;

  switch (selectedCategory) {
    case "sanat-ve-eglence":
      venueStyles = {
        backgroundColor: "crimson",
      };
      break;
    case "universite":
      venueStyles = {
        backgroundColor: "dodgerblue",
      };
      break;
    case "etkinlik":
      venueStyles = {
        backgroundColor: "coral",
      };
      break;
    case "yemek":
      venueStyles = {
        backgroundColor: "#d55252",
      };
      break;
    case "gece-hayati":
      venueStyles = {
        backgroundColor: "#8f4426",
      };
      break;
    case "acik-alanlar-ve-dinlence":
      venueStyles = {
        backgroundColor: "#c400c6",
      };
      break;
    case "profesyonel-ve-diger-yerler":
      venueStyles = {
        backgroundColor: "#293462",
      };
      break;
    case "konut":
      venueStyles = {
        backgroundColor: "#ec9b3b",
      };
      break;
    case "magaza-ve-hizmet":
      venueStyles = {
        backgroundColor: "#f0134d",
      };
      break;
    case "seyahat-ve-tasima":
      venueStyles = {
        backgroundColor: "#2d3d28",
      };
      break;
    default:
      break;
  }

  let renderVenues = venuesList.length > 0 && (
    <div className="Venues">
      <Container>
        <Row>
          {venuesList.map((venue, idx) => {
            return (
              <Col sm={12} md={6} lg={4} key={idx}>
                <div className="venue" style={venueStyles}>
                  <h4 className="venue-name">
                    {venue.venue.name && venue.venue.name}
                  </h4>
                  <p className="venue-address">
                    {venue.venue.location.address &&
                      venue.venue.location.address}{" "}
                    <span>
                      {venue.venue.location.city && venue.venue.location.city}/
                      {venue.venue.location.country &&
                        venue.venue.location.country}
                    </span>
                  </p>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );

  return venuesList.length > 0 ? renderVenues : welcomeScreen;
};

export default Venues;
