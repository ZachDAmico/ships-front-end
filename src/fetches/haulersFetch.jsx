export const getHaulers = () => {
  return fetch(` http://localhost:8000/haulers`).then((response) =>
    response.json()
  );
};

// The id parameter in the getHaulerById function is used to specify which hauler you want to fetch from the API.
// When you call getHaulerById(id), you pass in the ID of the hauler as an argument. This ID is then inserted into the URL of the fetch request.
export const getHaulerById = (id) => {
  return fetch(`http://localhost:8000/haulers/${id}`).then((response) =>
    response.json()
  );
};

export const editHauler = (item) => {
  return fetch(`http://localhost:8000/haulers/${item.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });
};
