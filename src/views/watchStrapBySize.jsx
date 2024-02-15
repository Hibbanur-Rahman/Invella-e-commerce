import React from 'react';
import Banner from "../components/banner";
import ItemsByCategory from "../components/itemByCategory";

import ChargerImage1 from "../assets/images/charger-1.webp";
import ChargerImage2 from "../assets/images/charger-2.webp";
import ChargerImage3 from "../assets/images/charger-3.webp";
import ChargerImage4 from "../assets/images/charger-4.webp";

const WatchStrapBySize = () => {
  return (
    <>
      <Banner head="WATCH STRAP BY SIZES" path="Home / Watch Straps By Size" />
      <div className="row m-0 p-0">
        <ItemsByCategory
          image={ChargerImage1}
          itemCategoryDetails="28MM WATCH STRAPS "
        />
        <ItemsByCategory
          image={ChargerImage2}
          itemCategoryDetails="28MM WATCH STRAPS "
        />
        <ItemsByCategory
          image={ChargerImage3}
          itemCategoryDetails="28MM WATCH STRAPS "
        />

        <ItemsByCategory
          image={ChargerImage4}
          itemCategoryDetails="28MM WATCH STRAPS "
        />
        <ItemsByCategory
          image={ChargerImage1}
          itemCategoryDetails="28MM WATCH STRAPS "
        />
        <ItemsByCategory
          image={ChargerImage2}
          itemCategoryDetails="28MM WATCH STRAPS "
        />
      </div>
    </>
  );
};

export default WatchStrapBySize;
