import { useEffect, useState } from 'react';

interface checkboxInterface2 {
    defaultState?: boolean;
    rounded?: boolean;
    disabled? : boolean;
    gray?: boolean;
    emitChangeEvent: (isChecked: boolean) => void;
}

const BaseCheckBox2 = ({ emitChangeEvent, rounded = false, gray = false, defaultState = false, disabled=false }: checkboxInterface2) => {
  const [isChecked, setChecked] = useState(defaultState);

  const handleCheckboxChange = () => {
    const newCheckedState = !isChecked;

    setChecked(newCheckedState);
    emitChangeEvent(newCheckedState)
  };

  useEffect(() => {
    setChecked(defaultState);
  }, [defaultState]);

  return (
    <div className="flex items-center space-x-2">
      <input
        type="checkbox"
        disabled={disabled}
        id="myCheckbox"
        className={` form-checkbox h-4 w-4 border border-1  transition ease-in-out delay-150 ${gray ? 'border-gray-300' : 'border-blue-700'} ${rounded ? 'rounded-full' : 'rounded-md'} `}
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
    </div>
  );
};

export default BaseCheckBox2;
