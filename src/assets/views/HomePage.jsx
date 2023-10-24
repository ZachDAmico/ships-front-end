import { useEffect, useState } from "react";
import { getShippingShips } from "../../fetches/shippingShipsFetch";
import { getHaulers } from "../../fetches/haulersFetch";
import { getDocks } from "../../fetches/docksFetch";

export const HomePage = () => {
  const [ships, setShips] = useState([]);
  const [haulers, setHaulers] = useState([]);
  const [docks, setDocks] = useState([]);

  useEffect(() => {
    getShippingShips().then((shipArray) => {
      setShips(shipArray);
    });
  }, []);

  useEffect(() => {
    getHaulers().then((haulerArray) => {
      setHaulers(haulerArray);
    });
  }, []);

  useEffect(() => {
    getDocks().then((dockArray) => {
      setDocks(dockArray);
    });
  }, []);

  return (
    <>
      <div>
        <h2>Ships</h2>
        {ships.map((ship) => {
          return (
            <div key={ship.id}>
              {/* don't need to map haulers here because we expanded ships to have the hauler info in the back end so fetch just needs to be updated */}
              <div>name: {ship.name}</div>
            </div>
          );
        })}
      </div>
      <div>
        <h2>Haulers</h2>
        {haulers.map((hauler) => {
          return (
            <div key={hauler.id}>
              <div>name: {hauler.name}</div>
            </div>
          );
        })}
      </div>
      <div>
        <h2>Docks</h2>
        {docks.map((dock) => {
          return (
            <div key={dock.id}>
              <div>location: {dock.location}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};
