import { IoIosStar } from "react-icons/io";
import type { Iproducts } from "../type";
import { type Dispatch, type SetStateAction } from "react";
import { FaCheck } from "react-icons/fa";
import { Bounce, toast } from "react-toastify";

export interface CardProps {
  item: Iproducts;
  addedCard: Iproducts[];
  setaddedCard: Dispatch<SetStateAction<Iproducts[]>>;
}

const Card = ({ item, addedCard, setaddedCard }: CardProps) => {
  const handlebtncart = (item: Iproducts) => {
    const allradyadded = addedCard.find((i) => i.id === item.id);

    if (!allradyadded) {
      setaddedCard([...addedCard, item]);
      
      toast.success(`${item.name} is added successful !`, {
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
    } else {
      const rimainingdata = addedCard.filter((i) => i.id !== item.id);
      setaddedCard(rimainingdata);
    }
  };

  return (
    <div
      className={`${addedCard.find((i) => i.id === item.id) ? "border-2 border-amber-300 shadow-2xl rounded-xl p-4 my-4" : "border-2 border-gray-200 shadow-2xl rounded-xl p-4 my-4"}`}
      key={item.id}
    >
      <div className="flex justify-between">
        <img src={item.icon} alt="reactimg" className="h-10 w-10" />
        <button className="bg-[#61DAFB] py-1 px-4 rounded-3xl">
          {item.badge}
        </button>
      </div>
      <h2 className="text-[18px] font-bold font-jakarta mt-4">{item.name}</h2>
      <p className="text-[12px] font-medium font-jakarta my-2">
        {item.description}
      </p>
      <hr className="text-gray-300 my-4" />
      <div className="flex justify-between items-center my-4">
        <button className="bg-[#F1F5F9] py-2 px-4 text-[14px] rounded-xl">
          {item.category}
        </button>
        <h3 className="font-medium font-jakarta text-[16px]">
          {item.difficulty}
        </h3>

        <span className="flex items-center gap-1">
          <IoIosStar className="text-yellow-500" /> {item.rating}
        </span>
      </div>

      <button
        onClick={() => handlebtncart(item)}
        className={`${addedCard.find((i) => i.id === item.id) ? "bg-amber-200 text-[#f51818] py-2 w-full rounded-3xl shadow-2xl font-semibold" : "bg-[#DB2777] text-[#FFFFFF] py-2 w-full rounded-3xl"}`}
      >
        {addedCard.find((i) => i.id === item.id) ? (
          <span className="flex justify-center items-center gap-2">
            <FaCheck />
            Added to Stack
          </span>
        ) : (
          <span>Add to Stack</span>
        )}
      </button>
    </div>
  );
};

export default Card;
