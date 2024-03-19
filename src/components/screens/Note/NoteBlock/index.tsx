import { FC } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks";
import { setPageNumber } from "../../../../redux/slices/filterSlice";
import Container from "../../../Container";
import TitleField from "../../../ui/Field/TitleField/titleField";
import NoteTable from "../NoteTable";

const NoteBlock: FC = () => {
    const { pageNumber } = useAppSelector((state) => state.filter);
    const dispatch = useAppDispatch();
    const onChangePagination = (ev: number) => {
        dispatch(setPageNumber(ev));
    };

    return (
        <div>
            <Container>
                <div>
                    <TitleField text="Все заметки" />
                    <div className="mb-[20px]">
                        <NoteTable />
                    </div>
                    <div className="flex justify-end">
                        <Link
                            to="/Notes/create"
                            className="font-normal text-14 text-main underline"
                        >
                            Новая заметка
                        </Link>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default NoteBlock;
