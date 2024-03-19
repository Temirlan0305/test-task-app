import { AxiosResponse } from "axios";
import { toast } from "react-toastify";
import * as serviseTypes from "../models/Services.module";
import anAxiosApi from "./axiosApi";

export const getNotesId = async (
    id: number
): Promise<serviseTypes.NotesState | undefined> => {
    const { data } = await anAxiosApi.get(`test/${id}`);
    return data as serviseTypes.NotesState;
};

export const getNotesAll = async (): Promise<
    serviseTypes.NotesState[] | undefined
> => {
    const { data } = await anAxiosApi.get("test");
    return data as serviseTypes.NotesState[];
};

export const postNoteCreate = async (data: {
    title: string;
    text: string;
}): Promise<AxiosResponse<any> | false | undefined> => {
    try {
        const response: AxiosResponse<any> = await anAxiosApi.post(
            "test",
            data
        );
        if (response) {
            toast.success("Вы успешно создали список");
            return response;
        }
        return undefined;
    } catch (e) {
        toast.error("Произошло ошибка");
        return false;
    }
};

export const postNoteDelete = async (id: number) => {
    try {
        await anAxiosApi.delete(`test/${id}`);
        toast.success(`Вы успешно удалили id: ${id}`);
    } catch (e) {
        toast.error("Произошло ошибка");
        return false;
    }
};

export const putNoteFix = async (id: number, title: string, text: string) => {
    try {
        const response: AxiosResponse<any> = await anAxiosApi.put(
            `test/${id}`,
            { id, title, text }
        );
        if (response) {
            toast.success("Успешно редактировался");
            return response;
        }
        return undefined;
    } catch (e) {
        toast.error("Произошло ошибка");
        return false;
    }
};
