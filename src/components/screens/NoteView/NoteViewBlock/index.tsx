import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getNotesId } from "../../../../services/useEndpoints";
import Container from "../../../Container";
import TitleField from "../../../ui/Field/TitleField/titleField";
import NoteViewForm from "../NoteViewForm";

const NoteViewBlock = () => {
    const { id } = useParams();
    const { data } = useQuery([`NotesId${id}`], () => getNotesId(Number(id)));

    return (
        <div>
            <Container>
                <div>
                    <TitleField text={`Заметка: ${data && data?.id}`} />
                    <div>
                        <NoteViewForm />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default NoteViewBlock;
