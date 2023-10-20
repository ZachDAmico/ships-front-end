import { useEffect, useState } from "react";
import { getDocks } from "../fetches/docksFetch";

export const DocksList = () => {
  const [docks, setDocks] = useState([]);

  useEffect(() => {
    getDocks().then((dockArray) => {
      setDocks(dockArray);
    });
  }, []);

  return (
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
  );
};
