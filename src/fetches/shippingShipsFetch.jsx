export const getShippingShips = () => {
  return fetch(`http://localhost:8000/ships`).then((response) =>
    response.json()
  );
};
