import './MyButton.scss'

const MyButton = ({title, accented = false} : {title: string, accented?: boolean}) => {
    return (
        <button className={accented ? "myButton myButton--accent" : "myButton"}>
            {title}
        </button>
    );
}

export default MyButton;
