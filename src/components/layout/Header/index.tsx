import { Link } from "react-router-dom";
import Container from "../../Container";

const Header = () => {
    return (
        <div className="bg-main mb-[30px]">
            <Container>
                <div className="w-full flex justify-center py-[20px]">
                    <ul className="flex gap-x-[50px]">
                        <li>
                            <Link
                                to="/"
                                className="font-medium text-[16px] text-white cursor-pointer"
                            >
                                Заметки
                            </Link>
                        </li>
                    </ul>
                </div>
            </Container>
        </div>
    );
};

export default Header;
