import { useEffect, useState } from "react";
import { getShippingShips } from "../fetches/shippingShipsFetch";
export const ShippingShipList = () => {
  const [ships, setShips] = useState([]);

  useEffect(() => {
    getShippingShips().then((shipArray) => {
      setShips(shipArray);
    });
  }, []);

  return (
    <div>
      <h2>Ships</h2>
      {ships.map((ship) => {
        return (
          <div key={ship.id}>
            <div>name: {ship.name}</div>
          </div>
        );
      })}
    </div>
  );
};
