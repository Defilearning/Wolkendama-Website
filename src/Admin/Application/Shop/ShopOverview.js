import React, { useEffect, useState } from "react";
import ShopButtons from "../../Component/ShopOverview/ShopButtons";
import ShopInfo from "../../Component/ShopOverview/ShopInfo";
import Title from "../../Component/ShopOverview/Title";

function ShopOverview() {
  const [shopItem, setShopItem] = useState();
  const [activeShop, setActiveShop] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/api/v1/shop");

      const data = (await response.json()).data;

      setShopItem(data);
    };

    fetchData();
  }, []);

  return (
    <div className="py-3 px-5 w-full h-full flex flex-col gap-10">
      {shopItem?.map((shopData) => (
        <div className="bg-slate-300 rounded-xl">
          <Title
            setActiveShop={setActiveShop}
            shopData={shopData}
            activeShop={activeShop}
          />
          {activeShop[shopData._id] && <ShopInfo shopData={shopData} />}
          {activeShop[shopData._id] && <ShopButtons shopData={shopData} />}
        </div>
      ))}
    </div>
  );
}

export default ShopOverview;
