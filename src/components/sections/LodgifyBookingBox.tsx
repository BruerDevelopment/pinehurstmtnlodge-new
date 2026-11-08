"use client";

import { useEffect } from "react";

// Lodgify book-now box: shows live availability and dates on the site. Lodgify's script fills the empty <div>.
const LODGIFY_SCRIPT = "https://app.lodgify.com/book-now-box/stable/renderBookNowBox.js";

export default function LodgifyBookingBox() {
  useEffect(() => {
    // Lodgify's script renders only when it loads. Injecting a fresh copy on each mount
    // re-renders the widget after client-side navigation back to this section.
    const script = document.createElement("script");
    script.src = LODGIFY_SCRIPT;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <div className="lodgify-booking">
      <style>{`
        .lodgify-booking {
          --ldg-bnb-background: #ffffff;
          --ldg-bnb-border-radius: 0.42em;
          --ldg-bnb-box-shadow: none;
          --ldg-bnb-padding: 14px;
          --ldg-bnb-input-background: #ffffff;
          --ldg-bnb-button-border-radius: 3.58em;

          --ldg-bnb-color-primary: #3f5a4a;
          --ldg-bnb-color-primary-lighter: #9bb3a4;
          --ldg-bnb-color-primary-darker: #2b2a27;
          --ldg-bnb-color-primary-contrast: #ffffff;
          --ldg-component-calendar-cell-selection-bg-color: #3f5a4a;
          --ldg-component-calendar-cell-selection-color: #ffffff;
          --ldg-component-calendar-cell-selected-bg-color: #9bb3a4;
          --ldg-component-calendar-cell-selected-color: #ffffff;
          --ldg-bnb-font-family: inherit;
        }
        #lodgify-book-now-box {
          width: 100%;
        }
      `}</style>

      <div
        id="lodgify-book-now-box"
        data-rental-id="846898"
        data-website-id="675498"
        data-slug="pinehurstmtnlodge"
        data-language-code="en"
        data-new-tab="true"
        data-version="stable"
        data-has-guests-breakdown="true"
        data-check-in-label="Check-in"
        data-check-out-label="Check-out"
        data-guests-label="Guests"
        data-guests-singular-label="{{NumberOfGuests}} guest"
        data-guests-plural-label="{{NumberOfGuests}} guests"
        data-location-input-label="Location"
        data-total-price-label="Total price:"
        data-select-dates-to-see-price-label="Select dates to see total price"
        data-minimum-price-per-night-first-label="From"
        data-minimum-price-per-night-second-label="per night"
        data-book-button-label="Book Now"
        data-guests-breakdown-label="Guests"
        data-adults-label='{"one":"adult","other":"adults"}'
        data-adults-description="Ages {minAge} or above"
        data-children-label='{"one":"child","other":"children"}'
        data-children-description="Ages {minAge}-{maxAge}"
        data-children-not-allowed-label="Not suitable for children"
        data-infants-label='{"one":"infant","other":"infants"}'
        data-infants-description="Under {maxAge}"
        data-infants-not-allowed-label="Not suitable for infants"
        data-pets-label='{"one":"pet","other":"pets"}'
        data-pets-not-allowed-label="Not allowed"
        data-done-label="Done"
      />

    </div>
  );
}
