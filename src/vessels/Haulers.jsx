import { useState, useEffect } from "react";
import { getHaulers } from "../fetches/haulersFetch";
import { useNavigate } from "react-router-dom";
export const HaulersList = () => {
  const navigate = useNavigate();
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
            <button
              onClick={() => {
                navigate(`/edit-hauler/${hauler.id}`);
              }}
            >
              Edit
            </button>
          </div>
        );
      })}
    </div>
  );
};
