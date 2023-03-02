import React, { Dispatch, SetStateAction } from "react";
import { RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";

interface Props {
  heading: string;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const ContainerTogler: React.FC<Props> = (Props) => {
  return (
    <div
      className="flex justify-between items-center cursor-pointer"
      onClick={() => Props.setOpen((prev) => !prev)}
    >
      <p className="text-[15px] font-semibold leading-[22px]">
        {Props.heading}
      </p>
      {Props.open ? (
        <RiArrowUpSLine size={20} className="text-secondary" />
      ) : (
        <RiArrowDownSLine size={20} className="text-secondary" />
      )}
    </div>
  );
};

export default ContainerTogler;
