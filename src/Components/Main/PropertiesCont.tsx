import React from "react";
interface Props {
  heading1: string;
  heading2: String;
  heading3: string;
}

const PropertiesCont: React.FC<Props> = (Props) => {
  return (
    <div className="flex flex-col gap-1 bg-[#202124] rounded-[10px] text-sm py-[10px] pl-4">
      <p className="text-secondary">{Props.heading1}</p>
      <p className="text-primary">{Props.heading2}</p>
      <p className="text-secondary">{Props.heading3}</p>
    </div>
  );
};

export default PropertiesCont;
