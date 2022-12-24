import Login from "./Login";

interface IProps {
    isLoggedIn: boolean;
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
    children: JSX.Element;
}

const ProtectedWrapper = ({ isLoggedIn, setIsLoggedIn, children }: IProps) => {
    return (
        <>
            {isLoggedIn ? children :
                <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            }
        </>
    )
};

export default ProtectedWrapper;