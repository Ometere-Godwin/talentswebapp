import { useState } from "react";
import styles from "../../styles/Components.module.css";
import BasePillButton from "../Table/BasePillButton";
import SvgComponent from "../SVGShape";
import BaseCheckBox2 from "./BaseCheckbox2";

interface multiselectInterface {
  textField?: string;
  availableOptions: string[];
}

const CustomMultiselect = ({
  textField,
  availableOptions,
}: multiselectInterface) => {
  // finish this later
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedList, setSelectedList] = useState<string[]>([
    "Javascript",
    "CSS",
  ]);
  const [open, setOpen] = useState(false);

  //   const handleCheckboxChange = () => {
  //     setChecked(!isChecked);
  //   };

  return (
    <div
      className={`flex flex-col w-full transition ease-in-out delay-150 gap-2 justify-center items-center ${styles.multiselectContainer}`}
    >
      <div
        className={`w-full flex flex-row gap-2 relative flex-wrap justify-start items-center ${styles.valueField}`}
        onClick={() => setOpen(!open)}
      >
        {/* <p className='pl-4'>Select</p> */}
        {availableOptions.map((value) => (
          <BasePillButton blue={true} handleEngagement={(e) => void e}>
            <div className="flex items-center justify-center">
              <p>{value}</p>
              <SvgComponent icon="cancel" />
            </div>
          </BasePillButton>
        ))}
        <div className="absolute right-3">
          <SvgComponent icon="caret-down" />
        </div>
      </div>
      {open && (
        <div
          className={`flex flex-col w-full justify-start p-2 ${styles.customDropdown}`}
        >
          {selectedList.map((item) => (
            <div className={`${styles.customDropdownItem}`}>
              <p className={styles.formSubTextubTextBlue}>{item}</p>
              <BaseCheckBox2 emitChangeEvent={(value) => console.log(value)} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomMultiselect;
