import React, { Profiler } from "react";
import { FiUpload } from "react-icons/fi";
import profile from "../../assets/profileYellow.png";
import ActivityTransfer from "./ActivityTransfer";
import { TbArrowsLeftRight } from "react-icons/tb";

const MainRight = () => {
  return (
    <div className="flex-1 flex flex-col gap-6 tablet:gap-4">
      <div className="flex flex-col gap-4 p-6 bg-bgSecondary rounded-[10px]">
        <div className="flex flex-col ">
          <div className="flex justify-between ">
            <div className="flex flex-col gap-1">
              <h2 className="font-bold text-primary text-2xl ">CloneX #9378</h2>
              <h4 className=" font-medium text-[15px] leading-[22px]">
                CloneX
              </h4>
            </div>
            <div className=" h-[44px] aspect-square flex items-center justify-center bg-[#202124] rounded-full">
              <FiUpload size={20} className="text-secondary" />
            </div>
          </div>
        </div>
        <div className="flex gap-8 py-[21px]">
          <div className="flex gap-[10px]">
            <div className="w-9 aspect-square rounded bg-[#D9D9D9]"></div>
            <div className="flex flex-col gap-[2px]">
              <p className="text-secondary text-[13px] leading-5 font-normal">
                Collection
              </p>
              <p className="text-primary text-sm font-medium">0x423...32X3</p>
            </div>
          </div>
          <div className="flex gap-[10px]">
            <img
              src={profile}
              className="w-9 aspect-square rounded-full flex items-center justify-center"
            />
            <div className="flex flex-col gap-[2px]">
              <p className="text-secondary text-[13px] leading-5 font-normal">
                Owner
              </p>
              <p className="text-primary text-sm font-medium">0x423...32X3</p>
            </div>
          </div>
        </div>
        <div className="bg-[#202124] py-4 flex">
          <div className="flex flex-col gap-1 pl-8 flex-1">
            <p className="text-secondary text-[13px] leading-5 font-medium">
              Price
            </p>
            <p className="text-primary text-[18px] leading-6 font-bold">
              6.194 ETH
            </p>
            <p className="text-secondary text-[13px] leading-5 font-medium">
              $7,519
            </p>
          </div>
          <div className="flex flex-col gap-1 pl-8 border-l-[1px] border-border flex-1">
            <p className="text-secondary text-[13px] leading-5 font-medium">
              Highest bid
            </p>
            <p className="text-primary text-[18px] leading-6 font-bold">
              1.21 wETH
            </p>
            <p className="text-secondary text-[13px] leading-5 font-medium">
              By <span className="text-primary">Quark</span>
            </p>
          </div>
        </div>
        <button className="bg-primary w-full py-[13px] text-center text-[#000] font-semibold text-[15px] leading-[22px] rounded-lg ">
          Buy now for 6.194 ETH
        </button>
      </div>
      <div className="flex flex-col  p-6 bg-bgSecondary rounded-[10px]">
        <h2 className="text-primary font-bold text-[18px] leading-[24px] mb-6 ">
          Activity
        </h2>
        <ActivityTransfer />
        <ActivityTransfer />
        <div className="mt-5 flex flex-col gap-[10px]">
          <div className="py-1 pl-2 w-[64px] flex gap-[6px] items-center  rounded-md bg-[#2E2F32] text-primary">
            <TbArrowsLeftRight size={15} />
            <p className="text-[12px] leading-[18px]">Mint</p>
          </div>
          <div className="flex gap-6 items-end">
            <p className="text-secondary text-[13px] leading-5 font-normal">
              By{" "}
              <span className="text-primary font-medium text-[15px] leading-[22px]">
                Sakama
              </span>
            </p>
            <p className="text-secondary text-[13px] leading-5 font-normal">
              1 day ago
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainRight;
