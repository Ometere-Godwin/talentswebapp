import { useEffect, useState } from "react";
import SvgComponent from "../SVGShape";
import BaseText from "../BaseText";

interface CustomDropDownProps {
  color?: "blue" | "black";
  options?: string[];
  id: string;
  emitSelectedOption: (arg0: string) => void;
}

const opt = ["Email", "Phone"];

const CustomDropDown = ({
  color = "blue",
  id,
  emitSelectedOption,
  options = opt,
}: CustomDropDownProps) => {
  const [selectedValue, setSelectedValue] = useState("");

  useEffect(() => {
    emitSelectedOption(selectedValue);
  }, [emitSelectedOption, selectedValue]);

  useEffect(() => {
    const dropdownButton = document.getElementById(
      `dropdown-button-${id}`
    ) as HTMLButtonElement | null;
    const dropdownMenu = document.getElementById(
      `dropdown-menu-${id}`
    ) as HTMLDivElement | null;
    let isDropdownOpen = false;

    // Function to toggle the dropdown
    function toggleDropdown() {
      isDropdownOpen = !isDropdownOpen;
      if (isDropdownOpen && dropdownMenu) {
        dropdownMenu.classList.remove("hidden");
      } else if (dropdownMenu) {
        dropdownMenu.classList.add("hidden");
      }
    }

    // Initialize the dropdown state
    toggleDropdown();

    // Toggle the dropdown when the button is clicked
    if (dropdownButton) {
      dropdownButton.addEventListener("click", toggleDropdown);
    }
    // Close the dropdown when clicking outside of it
    window.addEventListener("click", (event) => {
      if (
        dropdownButton &&
        dropdownMenu &&
        !dropdownButton.contains(event.target as Node) &&
        !dropdownMenu.contains(event.target as Node)
      ) {
        dropdownMenu.classList.add("hidden");
        isDropdownOpen = false;
      }
    });
  }, [id]);

  return (
    <div className="flex">
      <div className="relative inline-block text-left">
        <button
          id={`dropdown-button-${id}`}
          className="inline-flex justify-center w-full px-4 py-2"
        >
          <div className="flex gap-4 justify-center items-center">
            <BaseText size="small" weight="medium" color={color}>
              {selectedValue || "Select"}
            </BaseText>
            <SvgComponent icon="caret-down" caretColor={color} />
          </div>
        </button>
        <div
          id={`dropdown-menu-${id}`}
          className="origin-top-right z-20 absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
        >
          <div
            className="py-2 p-2"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="dropdown-button"
          >
            {options.map((item) => (
              <p
                onClick={() => setSelectedValue(item)}
                className="flex block rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer"
                role="menuitem"
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomDropDown;
