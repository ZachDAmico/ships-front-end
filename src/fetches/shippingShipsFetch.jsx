export const getShippingShips = () => {
  return fetch(` http://localhost:8000/ships?_expand=hauler`).then((response) =>
    response.json()
  );
};

export const deleteShip = (id) => {
  return fetch(`http://localhost:8000/ships/${id}`, {
    method: "DELETE",
  });
};
