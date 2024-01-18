import { ChangeEvent, FC, useState } from 'react';
import styles from '../../styles/Components.module.css'

interface CustomToggleInputProps {
    onToggleChange: (isChecked: boolean) => void;
    defaultState?: boolean;
  }

const CustomToggleInput: FC<CustomToggleInputProps> = ({ onToggleChange, defaultState=false }) => {
    const [isChecked, setIsChecked] = useState(defaultState)

    const handleToggleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const isChecked = event.target.checked;
        onToggleChange(isChecked);
        setIsChecked(isChecked);
      };

    return <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
        <input onChange={handleToggleChange} checked={isChecked} type="checkbox" name="toggle" id="toggle" className={`${styles['toggle-checkbox']} absolute block w-6 h-6 rounded-full bg-white border-2 appearance-none cursor-pointer`}/>
        <label htmlFor="toggle" className={`${styles['toggle-label']} block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer`}></label>
    </div>
}

export default CustomToggleInput