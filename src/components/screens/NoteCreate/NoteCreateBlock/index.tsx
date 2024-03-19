import { FC } from "react";
import Container from "../../../Container";
import TitleField from "../../../ui/Field/TitleField/titleField";
import NoteTable from "../NoteCreateForm";

const NoteCreateBlock: FC = () => {
    return (
        <div>
            <Container>
                <div>
                    <TitleField text="Новая заметка" />
                    <div>
                        <NoteTable />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default NoteCreateBlock;
