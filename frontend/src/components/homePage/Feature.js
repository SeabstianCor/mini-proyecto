import React from "react";
import { FeatureSection } from "../style/homePage/Feature.styled";

function Feature() {
  return (
    <FeatureSection>
      <div>
        <img src="/images/home/features/f1.png" alt="free shipping" />
        <h6>Free Shipping</h6>
      </div>
      <div>
        <img src="/images/home/features/f2.png" alt="free shipping" />
        <h6>Online Order</h6>
      </div>
      <div>
        <img src="/images/home/features/f6.png" alt="free shipping" />
        <h6>24/7 Support</h6>
      </div>
    </FeatureSection>
  );
}

export default Feature;
