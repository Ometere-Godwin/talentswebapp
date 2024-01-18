import { ChangeEvent, FC } from 'react';
import { optionFormat } from '../../interfaces';

interface BaseSelectBoxProps {
    onSelection: (arg: string) => void;
    defaultState?: optionFormat;
    options: optionFormat[]
  }

const BaseSelectBox: FC<BaseSelectBoxProps> = ({ onSelection, options, defaultState }) => {
    const handleInputChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        onSelection(value);
      };

    return  <select onChange={(e) => handleInputChange(e)}
    className="w-full rounded-md border border-1 border-gray-300">
            <option value="" key={"index"}>
        Select
        </option>
        {
          defaultState && (<option value={defaultState.value} key={"index"}>
          { defaultState.label}
          </option>)
        }
        {
            options.map(item =>  <option key={item.value} value={item.value}>
            { item.label }
            </option>)
        }


   </select>
}

export default BaseSelectBox