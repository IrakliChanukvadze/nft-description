import React from "react";
import { TbArrowsLeftRight } from "react-icons/tb";

const ActivityTransfer = () => {
  return (
    <div className="flex flex-col gap-[10px] py-4 border-t-[1px] border-b-[1px] border-border">
      <div className="py-1 pl-2 w-[86px] flex gap-[6px] items-center text-[#EF8031] bg-bgOrange rounded-md">
        <TbArrowsLeftRight size={15} />
        <p className="text-[12px] leading-[18px]">Transfer</p>
      </div>
      <div className="flex gap-6 items-end">
        <div className="flex gap-1 items-end">
          <p className="text-secondary text-[13px] leading-5 font-normal">
            From{"  "}
            <span className="text-primary font-medium text-[15px] leading-[22px]">
              Katama{"  "}
            </span>
          </p>
        </div>
        <div className="flex gap-1 items-end">
          <p className="text-secondary text-[13px] leading-5 font-normal">
            To{" "}
            <span className="text-primary font-medium text-[15px] leading-[22px]">
              Zamara
            </span>
          </p>
        </div>
        <p className="text-secondary text-[13px] leading-5 font-normal">
          1 day ago
        </p>
      </div>
    </div>
  );
};

export default ActivityTransfer;
