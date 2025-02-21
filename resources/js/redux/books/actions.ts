import { BookApiResponse } from "@/types/Book/BookApiResponse";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { getBooksByCursorRequest } from "./types";

export const getBooksByCursor = createAsyncThunk<
    BookApiResponse | undefined,
    getBooksByCursorRequest
>("books/getBooksByCursor", async (request, thunkApi) => {
    try {
        const response: AxiosResponse<BookApiResponse> = await axios.get(
            `/api/books/all?cursor=${request.cursor}`,
            {
                params: {
                    perPage: request.perPage,
                },
            },
        );
        return response.data as BookApiResponse;
    } catch (e) {
        if (e instanceof Error) {
            return thunkApi.rejectWithValue(e.message);
        }
    }
});
