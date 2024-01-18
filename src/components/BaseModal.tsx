import React, { useEffect, ReactNode } from 'react';

interface BaseModalProps {
  isOpen: boolean;
  boxWidth: 'max-w-xl' | 'max-w-l' | 'max-w-3xl' | 'max-w-2xl' | 'max-w-sm' | 'max-w-md' | 'max-w-lg';
  onClose: () => void;
  children: ReactNode;
}

const BaseModal: React.FC<BaseModalProps> = ({ isOpen, onClose, children, boxWidth }) => {
  useEffect(() => {
    const handleEscapeKeyPress = (event: KeyboardEvent) => {
      // if (event.key === 'Escape') {
      //  onClose();
      // }
    };

    const handleOutsideClick = (event: MouseEvent) => {
      // const modalContent = document.getElementById('modal-content');

      // if (modalContent && !modalContent.contains(event.target as Node)) {
      //  onClose();
      // }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscapeKeyPress);
      document.addEventListener('click', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKeyPress);
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpen, onClose]);

  return (
    <>
        <div className="fixed inset-0 flex items-center z-30 justify-center">
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div
            id="modal-content"
            className={`z-40 bg-white p-6 rounded-lg shadow-lg ${boxWidth}`}
          >
            {children}
          </div>
        </div>

    </>
  );
};

export default BaseModal;
