"use client";
import { useEffect, useRef, useState } from "react";
import { IoIosArrowDown, IoMdClose } from "react-icons/io";
import styles from "./Dropdown.module.css";

export interface DropdownItem {
  value: string | number;
  label: string;
}

interface DropdownProps {
  list: DropdownItem[];
  onSelect: (item: DropdownItem) => void;
  onClear?: () => void;
}

export default function Dropdown({ list, onSelect, onClear }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<DropdownItem | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleItemClick = (item: DropdownItem) => {
    setSelectedItem(item);
    onSelect(item);
    setIsOpen(false);
  };

  const handleClearClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedItem(null);
    if (onClear) {
      onClear();
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.dropdown} ref={dropdownRef}>
      <div className={styles.dropdownButtonContainer}>
        <button
          type="button"
          className={styles.dropdownButton}
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedItem ? selectedItem.label : "Select an option"}
        </button>
        <div className={styles.iconContainer}>
          {selectedItem ? (
            <button
              type="button"
              onClick={handleClearClick}
              className={styles.clearButton}
            >
              <IoMdClose />
            </button>
          ) : (
            <IoIosArrowDown />
          )}
        </div>
      </div>
      {isOpen && (
        <ul className={styles.dropdownList}>
          {list.map((item) => (
            <li key={item.value}>
              <button
                type="button"
                className={styles.dropdownItem}
                onClick={() => handleItemClick(item)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
