// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import { Route, Routes } from "react-router-dom";

import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./assets/views/HomePage";
import { NavBar } from "./nav/NavBar";
import { ShippingShipList } from "./vessels/ShippingShipsList";
import { HaulersList } from "./vessels/Haulers";
import { DocksList } from "./vessels/Docks";
// import { getShippingShips } from "./fetches/shippingShipsFetch";

export const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavBar />
              <Outlet />
            </>
          }
        >
          <Route index element={<HomePage />} />
          <Route path="/shippingships" element={<ShippingShipList />} />
          <Route path="/haulers" element={<HaulersList />} />
          <Route path="/docks" element={<DocksList />} />
        </Route>
      </Routes>
    </>
  );
};

//   const [haulers, setHaulers] = useState([]);
//   const [docks, setDocks] = useState([]);

//   useEffect(() => {
//     getHaulers().then((haulerArray) => setHaulers(haulerArray));
//   }, []);

//   useEffect(() => {
//     getDocks().then((dockArray) => setDocks(dockArray));
//   }, []);

//   const getHaulers = () => {
//     return fetch(` http://localhost:8000/haulers`).then((response) =>
//       response.json()
//     );
//   };
//   const getDocks = () => {
//     return fetch(` http://localhost:8000/docks`).then((response) =>
//       response.json()
//     );
//   };

//   return (
//     <div>
//       <h2>Haulers</h2>
//       {haulers.map((hauler) => {
//         return (
//           <div key={hauler.id}>
//             <div>name: {hauler.name}</div>
//           </div>
//         );
//       })}
//       <h2>Docks</h2>
//       {docks.map((dock) => {
//         return (
//           <div key={dock.id}>
//             <div>location: {dock.location}</div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }
// why does this export need to be here? vite thing?
// export default App;
