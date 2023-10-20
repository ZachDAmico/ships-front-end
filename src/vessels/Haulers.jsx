import { useState, useEffect } from "react";
import { getHaulers } from "../fetches/haulersFetch";
export const HaulersList = () => {
  const [haulers, setHaulers] = useState([]);

  useEffect(() => {
    getHaulers().then((haulerArray) => {
      setHaulers(haulerArray);
    });
  }, []);

  return (
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
  );
};
