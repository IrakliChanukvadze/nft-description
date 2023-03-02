import React from "react";

interface Props {
  headingLeft: string;
  headingRight: String;
}

const TokenText: React.FC<Props> = (Props) => {
  return (
    <div className="flex justify-between items-center text-sm">
      <p className="text-secondary ">{Props.headingLeft}</p>
      <p className="text-primary font-medium">{Props.headingRight}</p>
    </div>
  );
};

export default TokenText;
