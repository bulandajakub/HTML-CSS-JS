import clsx from "clsx";
import styles from "./SidebarButton.module.css";
import Tooltip from "./Tooltip";

interface SidebarButtonProps {
  children: React.ReactNode;
  tooltip: string;
  className?: string;
}

const SidebarButton: React.FC<SidebarButtonProps> = ({
  children,
  tooltip,
  className = "",
}) => (
  <Tooltip content={tooltip} placement="right">
    <button className={clsx("button-sidebar", styles.sidebarButton, className)}>
      {children}
    </button>
  </Tooltip>
);

export default SidebarButton;
