import React from 'react';
import Banner from "../components/banner";
import ItemsByCategory from "../components/itemByCategory";
const WatchStrapBySize = () => {
  return (
    <>
      <Banner head="WATCH STRAP BY SIZES" path="Home / Watch Straps By Size" />
      <div className="row m-0 p-0">
        <ItemsByCategory
          image={require("../assets/images/charger-2.webp")}
          itemCategoryDetails="28MM WATCH STRAPS "
        />
        <ItemsByCategory
          image={require("../assets/images/charger-1.webp")}
          itemCategoryDetails="28MM WATCH STRAPS "
        />
        <ItemsByCategory
          image={require("../assets/images/charger-1.webp")}
          itemCategoryDetails="28MM WATCH STRAPS "
        />

        <ItemsByCategory
          image={require("../assets/images/charger-1.webp")}
          itemCategoryDetails="28MM WATCH STRAPS "
        />
        <ItemsByCategory
          image={require("../assets/images/charger-1.webp")}
          itemCategoryDetails="28MM WATCH STRAPS "
        />
        <ItemsByCategory
          image={require("../assets/images/charger-1.webp")}
          itemCategoryDetails="28MM WATCH STRAPS "
        />
      </div>
    </>
  );
};

export default WatchStrapBySize;
