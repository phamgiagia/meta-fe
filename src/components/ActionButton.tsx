
type ActionButtonProps = {
    text: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({ text }) => <button type="button" className="action-button">
    {text}
</button>
export default ActionButton;