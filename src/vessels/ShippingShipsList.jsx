import { useEffect, useState } from "react";
import { deleteShip, getShippingShips } from "../fetches/shippingShipsFetch";
export const ShippingShipList = () => {
  const [ships, setShips] = useState([]);

  useEffect(() => {
    getShippingShips().then((shipArray) => {
      setShips(shipArray);
    });
  }, []);

  const handleDelete = (id) => {
    deleteShip(id).then(() => {
      getShippingShips().then((shipArray) => {
        setShips(shipArray);
      });
      window.alert("You sank my BattleShip!");
    });
  };
  return (
    <div>
      <h2>Ships</h2>
      {ships.map((ship) => {
        return (
          <div key={ship.id}>
            {/* don't need to map haulers here because we expanded ships to have the hauler info in the back end so fetch just needs to be updated */}
            <div>name: {ship.name}</div>
            <p>Hauler: {ship.hauler.name}</p>
            <button
              onClick={() => {
                handleDelete(ship.id);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};
