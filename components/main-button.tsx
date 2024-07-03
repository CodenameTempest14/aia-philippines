import HeaderItem from "./header-item";

type MainButtonProps = {
    children?: React.ReactNode;
    onClick: () => void;
    className?: string;
}

const MainButton = ({children, onClick, className}: MainButtonProps) => {
    return (
        <div 
            onClick={onClick}
            className={"bg-red-500 hover:scale-105 duration-200 " + className}
        >
            <HeaderItem>{children}</HeaderItem>
        </div>
    );
};

export default MainButton;