import { RxCross2 } from "react-icons/rx";
import type { Iproducts } from "../type";
import type { Dispatch, SetStateAction } from "react";
import { Bounce, toast } from "react-toastify";

export interface AddedcardUiProps {
  item: Iproducts;
  addedCard: Iproducts[];
  setaddedCard: Dispatch<SetStateAction<Iproducts[]>>;
}

const AddedcardUi = ({ item, addedCard, setaddedCard }: AddedcardUiProps) => {
  const handleRemove = (item: Iproducts) => {
    const rimainingdata = addedCard.filter((i) => i.id !== item.id);
    setaddedCard(rimainingdata);

    toast.warn(`${item.name} is remove from cartStack !`, {
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
    <div>
      <div className="border-2 border-gray-300 p-2 rounded-2xl my-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src={item.icon} alt="icon" className="h-12 w-12" />
            <div className="">
              <h3 className="font-medium font-jakarta text-center md:text-start md:text-[12px] text-[#64748B] my-2">
                {item.name}
              </h3>
              <h3 className="font-medium font-jakarta text-center md:text-start md:text-[12px] text-[#64748B] my-2">
                {item.category}
              </h3>
            </div>
          </div>
          <div className="">
            <i>
              <RxCross2
                className="text-[24px]"
                onClick={() => handleRemove(item)}
              />
            </i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddedcardUi;
