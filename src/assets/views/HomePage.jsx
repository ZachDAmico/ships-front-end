import { DocksList } from "../../vessels/Docks";
import { HaulersList } from "../../vessels/Haulers";
import { ShippingShipList } from "../../vessels/ShippingShipsList";

export const HomePage = () => {
  return (
    <div>
      <ShippingShipList />
      <HaulersList />
      <DocksList />
    </div>
  );
};
