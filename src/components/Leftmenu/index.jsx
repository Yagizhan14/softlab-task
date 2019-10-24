import React from "react";
import { Button } from "react-bootstrap";
import "./Leftmenu.scss";
import { makeApiCall } from "../../util/makeApiCall";
import * as categoryIds from "../../util/categoryIds";
import { connect } from "react-redux";

const Leftmenu = ({ setVenues, setSelectedCategory }) => {
  return (
    <div className="Leftmenu">
      <Button
        id="sanat-ve-eglence"
        onClick={async () => {
          const responseVenues = await makeApiCall(
            categoryIds.seyahatVeTasimaCategoryId,
          );
          setVenues(responseVenues);
          setSelectedCategory("sanat-ve-eglence");
        }}
      >
        <span>
          <i className="fas fa-palette"></i>Sanat Ve Eğlence
        </span>
      </Button>
      <Button
        id="universite"
        onClick={async () => {
          const responseVenues = await makeApiCall(
            categoryIds.universiteCategoryId,
          );
          setVenues(responseVenues);
          setSelectedCategory("universite");
        }}
      >
        <span>
          <i className="fas fa-university"></i>Üniversite
        </span>
      </Button>
      <Button
        id="etkinlik"
        onClick={async () => {
          const responseVenues = await makeApiCall(
            categoryIds.etkinlikCategoryId,
          );
          setVenues(responseVenues);
          setSelectedCategory("etkinlik");
        }}
      >
        <span>
          <i className="fas fa-calendar-day"></i>Etkinlik
        </span>
      </Button>
      <Button
        id="yemek"
        onClick={async () => {
          const responseVenues = await makeApiCall(categoryIds.yemekCategoryId);
          setVenues(responseVenues);
          setSelectedCategory("yemek");
        }}
      >
        <span>
          <i className="fas fa-utensils"></i>Yemek
        </span>
      </Button>
      <Button
        id="gece-hayati"
        onClick={async () => {
          const responseVenues = await makeApiCall(
            categoryIds.geceHayatiCategoryId,
          );
          setVenues(responseVenues);
          setSelectedCategory("gece-hayati");
        }}
      >
        <span>
          <i className="fas fa-glass-cheers"></i>Gece Hayatı
        </span>
      </Button>
      <Button
        id="acik-alanlar-ve-dinlence"
        onClick={async () => {
          const responseVenues = await makeApiCall(
            categoryIds.acikAlanlarVeDinlenceCategoryId,
          );
          setVenues(responseVenues);
          setSelectedCategory("acik-alanlar-ve-dinlence");
        }}
      >
        <span>
          <i className="fas fa-sun"></i>Açık Alanlar Ve Dinlence
        </span>
      </Button>
      <Button
        id="profesyonel-ve-diger-yerler"
        onClick={async () => {
          const responseVenues = await makeApiCall(
            categoryIds.profesyonelVeDigerYerlerCategoryId,
          );
          setVenues(responseVenues);
          setSelectedCategory("profesyonel-ve-diger-yerler");
        }}
      >
        <span>
          <i className="fas fa-industry"></i>Profesyonel Ve Diğer Yerler
        </span>
      </Button>
      <Button
        id="konut"
        onClick={async () => {
          const responseVenues = await makeApiCall(categoryIds.konutCategoryId);
          setVenues(responseVenues);
          setSelectedCategory("konut");
        }}
      >
        <span>
          <i className="fas fa-building"></i>Konut
        </span>
      </Button>
      <Button
        id="magaza-ve-hizmet"
        onClick={async () => {
          const responseVenues = await makeApiCall(
            categoryIds.magazaVeHizmetCategoryId,
          );
          setVenues(responseVenues);
          setSelectedCategory("magaza-ve-hizmet");
        }}
      >
        <span>
          <i className="fas fa-store"></i>Mağaza Ve Hizmet
        </span>
      </Button>
      <Button
        id="seyahat-ve-tasima"
        onClick={async () => {
          const responseVenues = await makeApiCall(
            categoryIds.seyahatVeTasimaCategoryId,
          );
          setVenues(responseVenues);
          setSelectedCategory("seyahat-ve-tasima");
        }}
      >
        <span>
          <i className="fas fa-plane"></i>Seyahat Ve Taşıma
        </span>
      </Button>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    setVenues: venues => dispatch({ type: "SET_VENUES", payload: venues }),
    setSelectedCategory: category =>
      dispatch({ type: "SET_SELECTED_CATEGORY", payload: category }),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(Leftmenu);
