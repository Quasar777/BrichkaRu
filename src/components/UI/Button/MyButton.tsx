import './MyButton.scss'

interface MyButtonProps {
    title: string;
    accented?: boolean;
    className?: string;
}

const MyButton = ({ title, accented = false, className = '' }: MyButtonProps) => {
    const baseClass = accented ? 'myButton myButton--accent' : 'myButton';

    return (
        <button className={`${baseClass} ${className}`.trim()}>
            {title}
        </button>
    );
};

export default MyButton;
