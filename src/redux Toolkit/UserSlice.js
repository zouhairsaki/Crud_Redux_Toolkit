import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [
        { id: 1, nom: "Remdani", prenom: "Ayoub", filliere: "Infrastructure Digital" },
        { id: 2, nom: "Charif", prenom: "Mohammed", filliere: "Developppement digital" },
        { id: 3, nom: "Mohib", prenom: "Akram", filliere: "Application Mobile" },
    ]
}

export const UserSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        ADD_USER: (state, action) => {
            state.users = [...state.users, action.payload]
        },
        // ADD_USER: (state, action) => {
        //     state.push(action.payload)
        // },
        // UPDATE_USER: (state, action) => {
        //     const index = state.findIndex(item => item.id === action.payload.id)
        //     state[index] = action.payload
        // },
        UPDATE_USER: (state, action) => {
            const user = state.users.find(item => item.id === parseInt(action.payload.id))
            if(user){
                user.nom =action.payload.nom
                user.prenom =action.payload.prenom
                user.filliere =action.payload.filliere
            }
            return state
        },

        // DELETE_USER: (state, action) => {
        //     state.filter(u => u.id !== action.payload)
        // }
        DELETE_USER: (state, action) => {
            state.users = [...state.users.filter(u => u.id !== action.payload)]
        }

    }
})

export const { ADD_USER, UPDATE_USER, DELETE_USER } = UserSlice.actions
export default UserSlice.reducer