import BaseText from "../BaseText";
import SvgComponent from "../SVGShape";

interface InfoTextProps {
  title: string;
  value: number;
}

const BaseInfoText: React.FC<InfoTextProps> = ({ title, value }) => {
  return (
    <div className="w-full p-4 rounded-2xl bg-white shadow-md transition ease-in-out delay-150 hover:shadow-xl flex h-full flex-col align-start justify-between">
      <BaseText weight="semibold">{title}</BaseText>
      <div className="flex justify-between align-center ">
      <BaseText size="xx-large">{value}</BaseText>
<SvgComponent icon="yellow-clipboard"/>
      </div>
    </div>
  );
};

export default BaseInfoText;
