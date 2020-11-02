import { createSlice } from "@reduxjs/toolkit";
let lastId = 0;
const usersSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    addUser: (users, action) => {
      users.push({
        id: ++lastId,
        name: action.payload.name,
      });
    },

    removeUser: (users, action) => {
      users.filter((user) => user.id !== action.payload.id);
    },
  },
});

export const { addUser } = usersSlice.actions;
export default usersSlice.reducer;
