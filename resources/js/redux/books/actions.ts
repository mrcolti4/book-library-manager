import { BookApiResponse } from "@/types/Book/BookApiResponse";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";

export const getAllBooks = createAsyncThunk<
    BookApiResponse | undefined,
    string | undefined
>("books/getAllBooks", async (cursor, thunkApi) => {
    try {
        const response: AxiosResponse<BookApiResponse> = await axios.get(
            `/api/books/all?cursor=${cursor}`,
        );
        return response.data as BookApiResponse;
    } catch (e) {
        if (e instanceof Error) {
            return thunkApi.rejectWithValue(e.message);
        }
    }
});
