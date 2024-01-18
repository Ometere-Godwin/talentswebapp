import BaseText from "../BaseText";
import SvgComponent from "../SVGShape";

interface TipBoxProps {}

const BaseTipBox: React.FC<TipBoxProps> = () => {
  return (
    <div
      className={` shadow-md mb-4 w-full flex flex-col items-center p-4 rounded-2xl justify-start gap-5 border border-1 border-gray-200`}
    >
      <div className="flex px-4 py-2 w-full justify-between items-center">
        <div className="flex flex-col items-start gap-4 justify-start">
          <BaseText weight="medium" color="gray">
            #1 Tips for success
          </BaseText>
          <BaseText weight="semibold">How to create a strong profile</BaseText>
        </div>

        <div className="flex w-min px-4 py-2 justify-center gap-3 items-center">
          <div className=" cursor-pointer hover:bg-sky-200 rounded-full">
            <SvgComponent icon="circle-arrow-left-black" />
          </div>
          <div className=" cursor-pointer hover:bg-sky-200 rounded-full">
            <SvgComponent icon="circle-arrow-right-black" />
          </div>
        </div>
      </div>
      
      <BaseText extraClasses="px-4 pb-4" weight="light" size="small">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum. Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum. Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum.</BaseText>
    </div>
  );
};

export default BaseTipBox;
