import { use, useState } from "react";
import type { Iproducts } from "../type";
import Technologiescard from "./Technologiescard";
import AddedCard from "./AddedCard";

interface Ipromisedata {
  Promisedata: Promise<Iproducts[]>;
}

const Products = ({ Promisedata }: Ipromisedata) => {
  const [addedCard, setaddedCard] = useState<Iproducts[]>([]);

  const info = use(Promisedata);

  return (
    <>
      <div className="p-2">
        <div className="container mx-auto">
          <h2 className="font-inter font-extrabold text-center md:text-start md:text-[36px] my-2">
            Explore the
            <span className="text-[#DB2777]"> Technologies</span>
          </h2>
          <p className="font-medium font-jakarta text-center md:text-start md:text-[16px] text-[#64748B] my-2">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 container mx-auto mt-10 gap-4">
          <div className="col-span-9">
            <Technologiescard
              info={info}
              addedCard={addedCard}
              setaddedCard={setaddedCard}
            />
          </div>

          <div className="col-span-3">
            <AddedCard addedCard={addedCard} setaddedCard={setaddedCard} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
