import { createSlice } from "@reduxjs/toolkit";
const initialState = [
    { id: 1, nomFilliere: "Infrastructure Digital" },
    { id: 2, nomFilliere: "Developppement digital" },
    { id: 3, nomFilliere: "Application Mobile" },
]
export const FilliereSlice = createSlice({
    name: "filliere",
    initialState,
    reducers: {

    }
})
export default FilliereSlice.reducer;