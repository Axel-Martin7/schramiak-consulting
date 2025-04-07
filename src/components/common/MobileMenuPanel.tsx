import React from 'react';
import ReactDOM from 'react-dom';
import styles from './MobileMenuPanel.module.scss';

interface MobileMenuPanelProps {
  isOpen: boolean;
  children: React.ReactNode;
}

export default function MobileMenuPanel({
  isOpen,
  children,
}: MobileMenuPanelProps) {
  return ReactDOM.createPortal(
    <div className={`${styles.menuPanel} ${isOpen ? styles.openPanel : ''}`}>
      {children}
    </div>,
    document.body
  );
}
