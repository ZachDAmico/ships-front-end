import { useEffect, useState } from "react";
import { getDocks } from "../fetches/docksFetch";
import { useNavigate, useParams } from "react-router-dom";
import { editHauler, getHaulerById } from "../fetches/haulersFetch";

export const EditHaulerForm = () => {
  const [hauler, setHauler] = useState({});
  const [docks, setDocks] = useState([]);
  //   Get the hauler's ID from the URL
  const { id } = useParams();
  const navigate = useNavigate();

  //   Fetch the hauler's data when the component mounts or the ID changes
  useEffect(() => {
    getHaulerById(id).then((haulerData) => {
      setHauler(haulerData);
    });
    getDocks().then((dockArray) => {
      setDocks(dockArray);
    });
  }, [id]);

  const handleSave = (event) => {
    event.preventDefault();

    const updatedHauler = {
      id: hauler.id,
      name: hauler.name,
      dock_id: hauler.dock_id,
    };
    editHauler(updatedHauler).then(() => {
      navigate("/");
    });
  };
  return (
    <form className="hauler-form">
      <h2 className="hauler-form-title">Edit Hauler Info</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="editHaulerName">Hauler Name: </label>
          <input
            value={hauler.name ? hauler.name : ""}
            name="haulerName"
            id="editHaulerName"
            type="text"
            className="form-control"
            placeholder="hauler name"
            onChange={(event) => {
              const haulerCopy = { ...hauler };
              haulerCopy.name = event.target.value;
              setHauler(haulerCopy);
            }}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="dock">Dock: </label>
          <select
            value={hauler.dock_id}
            name="dockId"
            id="dock"
            type="select"
            className="form-control"
            onChange={(event) => {
              const haulerCopy = { ...hauler };
              haulerCopy.dock_id = event.target.value;
              setHauler(haulerCopy);
            }}
          >
            <option value={0}>Please Select a Dock</option>
            {docks.map((dock) => {
              return (
                <option key={dock.id} value={dock.id}>
                  {dock.location}
                </option>
              );
            })}
          </select>
        </div>
      </fieldset>
      <button
        onClick={(event) => {
          handleSave(event);
        }}
      >
        Update Hauler
      </button>
    </form>
  );
};
