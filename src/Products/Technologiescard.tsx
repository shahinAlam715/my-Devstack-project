import type { Iproducts } from "../type";
import { type Dispatch, type SetStateAction } from "react";
import Card from "./Card";

export interface TechnologiescardProps {
  info: Iproducts[];
  addedCard: Iproducts[];
  setaddedCard: Dispatch<SetStateAction<Iproducts[]>>;
}

const Technologiescard = ({
  info,
  addedCard,
  setaddedCard,
}: TechnologiescardProps) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {info.map((item) => (
          <Card
            key={item.id}
            item={item}
            addedCard={addedCard}
            setaddedCard={setaddedCard}
          />
        ))}
      </div>
    </>
  );
};

export default Technologiescard;
