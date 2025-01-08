type ActionButtonProps = {
  text: string;
};

const ActionButton: React.FC<ActionButtonProps> = ({ text }) => (
  <a href="#" className="action-button">
    {text}
  </a>
);
export default ActionButton;
