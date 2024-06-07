import React from "react";
import { Header } from "@features/Header";
import { ProgressBar } from "@shared/ui/ProgressBar";
import { Cursor } from "@shared/ui/Cursor";
import { CartMain } from "@widgets/CartPage/PC/Main";
import { Form } from "@widgets/HomePage/PC/Form";
import { Footer } from "@features/Footer";
import { CartAbout } from "@widgets/CartPage/PC/About";
import { CartGallery } from "@widgets/CartPage/PC/Gallery";

import image from "@assets/webp/pc/mainImage_pc.png";

import styles from "../../styles.module.scss";
import { CartsFeatures } from "@features/CartFeatures";
import { featureTabsContent } from "@shared/lib/content/featureTabsContent";
import { OrderNow } from "@widgets/CartPage/PC/OrderNow";

const CartPage = () => {
  const imageProp = image;
  const imagesProp = [
    {
      url: image,
      alt: "Description of the image",
    },
    {
      url: image,
      alt: "Description of the image",
    },
    {
      url: image,
      alt: "Description of the image",
    },
    {
      url: image,
      alt: "Description of the image",
    },
  ];

  return (
    <>
      <div className={styles.pc}>
        <ProgressBar />
        <Header />
        <Cursor />
        <CartMain
          miniText="Ferla X Bike"
          image={image}
          title="Ferla X - Glacier Edition"
          paragraph="All-In-One Cold Brew & Ice Cream Bike: All New Extra Large Temp. Controlled Freezer. Self-Contained Water System. Heavy-Duty All-Terrain Wheels. Solar Panel System."
        />
        <CartAbout
          miniText="Lorem Ipsum"
          title="Lorem Ipsum"
          video="https://www.youtube.com/embed/bdO-uPXVIMI?si=xBrb4drC03Fpn4AK"
          paragraph="It’s everything you love in the Ferla Ice Cream Freezer Bike but refined to fit the sleek and innovative design of the original Ferla X. With an all new extra large temperature controlled freezer and the ability to add cold/nitro brew taps, you won’t have to choose between an ice cream business or a cold brew business because…why not both?"
        />
        <CartGallery
          title="Lorem Ipsum"
          paragraph="Starting a business doesn’t always require a hefty investment. In fact, there are numerous low-cost business ideas, particularly in the realm of food carts, that allow aspiring entrepreneurs to kickstart their ventures without breaking the bank. Here’s a curated list of the top 12 low-cost business ideas with a focus on the cheapest business to start:"
          miniText="Lorem Ipsum"
          image={imageProp}
          images={imagesProp}
        />
        <CartsFeatures
          title="Features"
          miniText="Ferla X"
          image={image}
          featureTabs={featureTabsContent}
          paragraph="Paragraph"
        />
        <OrderNow
          miniText="In Stock"
          question="Still have questions? You can always reach out to us at
info@ferlabikes.com or request more information."
          title="Order Now Your Own Fully Customized Ferla X Bike"
          paragraph="Are you ready to be among the first to own a Ferla X? Take the first step in starting your own mobile business by Clicking the Order Link & Get Yourself a Ferla X."
          image={image}
        />
        <Footer />
      </div>
    </>
  );
};

export default CartPage;
