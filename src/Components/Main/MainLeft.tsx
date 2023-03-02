import React, { useState } from "react";
import nftImg from "../../assets/nft.png";
import ContainerTogler from "./ContainerTogler";
import TokenText from "./TokenText";
import PropertiesCont from "./PropertiesCont";
const tokenData = [
  { headingleft: "Contract Address", headingRight: "0x7E091b…031A" },
  { headingleft: "Token ID", headingRight: "4502665" },
  { headingleft: "Blockchain", headingRight: "BNB Chain" },
  { headingleft: "Token Standard", headingRight: "ERC-721" },
];

const propertiesData = [
  {
    heading1: "Backgorund",
    heading2: "Purple",
    heading3: "1.3%",
  },
  {
    heading1: "Clothes",
    heading2: "Robot",
    heading3: "24%",
  },
  {
    heading1: "Eyes",
    heading2: "Blue",
    heading3: "0.3%",
  },
  {
    heading1: "Hair",
    heading2: "White",
    heading3: "1.2%",
  },
  {
    heading1: "Mouth",
    heading2: "Smile",
    heading3: "1.3%",
  },
];

const MainLeft = () => {
  const [descriptionOpen, setDescriptionOpen] = useState<boolean>(true);
  const [tokenOpen, setTokenOpen] = useState<boolean>(true);
  const [propertiesOpen, setPropertiesOpen] = useState<boolean>(true);
  const containerStyle = "flex  flex-col gap-6 p-6 bg-bgSecondary";

  return (
    <div className="flex-1 flex flex-col gap-6">
      <img src={nftImg} alt="nft image" className="w-full aspect-square" />
      <div className={containerStyle}>
        <ContainerTogler
          heading={"Description"}
          open={descriptionOpen}
          setOpen={setDescriptionOpen}
        />
        {descriptionOpen && (
          <div>
            <p className="text-sm font-medium">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        )}
      </div>
      <div className={containerStyle}>
        <ContainerTogler
          heading="Token details"
          open={tokenOpen}
          setOpen={setTokenOpen}
        />
        {tokenOpen && (
          <div className="flex flex-col gap-4">
            {tokenData.map((item) => (
              <TokenText
                headingLeft={item.headingleft}
                headingRight={item.headingRight}
              />
            ))}
          </div>
        )}
      </div>
      <div className={containerStyle}>
        <ContainerTogler
          heading="Properties"
          open={propertiesOpen}
          setOpen={setPropertiesOpen}
        />
        {propertiesOpen && (
          <div className=" bg-bgSecondary grid grid-cols-3 gap-3">
            {propertiesData.map((item) => (
              <PropertiesCont
                heading1={item.heading1}
                heading2={item.heading2}
                heading3={item.heading3}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MainLeft;
