import type { Dispatch, SetStateAction } from "react";
import type { Iproducts } from "../type";
import AddedcardUi from "./AddedcardUi";
import { Bounce, toast } from "react-toastify";

export interface AddedCardProps {
  addedCard: Iproducts[];
  setaddedCard: Dispatch<SetStateAction<Iproducts[]>>;
}

const AddedCard = ({ addedCard, setaddedCard }: AddedCardProps) => {
  const handleremove = () => {
    setaddedCard([]);

    toast.warn(`All cart remove from cartStack !`, {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  return (
    <div className="border-2 border-gray-200 shadow-2xl rounded-xl p-4 my-4">
      <h2 className="text-[18px] font-bold font-jakarta mt-4">Your Stack</h2>
      {addedCard.length === 0 ? (
        <div>
          <p className="text-[12px] font-medium font-jakarta my-2">
            No technologies selected yet.
          </p>
          <div className="border-2 border-dashed p-8">
            <p className="text-[12px] font-medium font-jakarta my-2 text-center">
              Your stack is empty.
            </p>
          </div>
        </div>
      ) : (
        <div>
          <p className="text-[16px] font-semibold font-jakarta my-2">
            {addedCard.length} Technology Selected
          </p>
          {addedCard.map((item) => (
            <AddedcardUi
              key={item.id}
              item={item}
              addedCard={addedCard}
              setaddedCard={setaddedCard}
            />
          ))}
          <div className="">
            <button
              className="bg-amber-200 text-[#f51818] py-2 w-full rounded-xl shadow-2xl font-semibold"
              onClick={handleremove}
            >
              Remove All
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddedCard;
