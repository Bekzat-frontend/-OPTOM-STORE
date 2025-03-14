import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { act } from "react";

export const getAll = createAsyncThunk("data/getAll", async () => {
  try {
    return await fetch("http://10.10.10.12:9091/product/getAll", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => data)
      .catch((error) => error);
  } catch (error) {
    return error;
  }
});
export const findById = createAsyncThunk("data/findById", async (id) => {
  try {
    return await fetch("http://10.10.10.12:9091/product/findById/" + id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => data)
      .catch((error) => error);
  } catch (error) {
    return error;
  }
});

export const searchAPI = createAsyncThunk("data/searchAPI", async (value) => {
  try {
    const data = await fetch(
      "http://10.10.10.12:9091/product/search?query=" + value,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => data)
      .catch((error) => error);

    return data;
  } catch (error) {
    // console.error(error);
    return error;
  }
});

const Db = createSlice({
  name: "data",
  initialState: {
    data: [],
    find_db: {},
    search_result: [],
    error: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAll.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAll.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(getAll.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
        state.data = [];
      })
      .addCase(findById.fulfilled, (state, action) => {
        state.find_db = action.payload;
      })

      .addCase(searchAPI.fulfilled, (state, action) => {
        console.log(action);

        state.data = action.payload;
      })
      .addCase(searchAPI.rejected, (state, action) => {
        state.error = action.payload;
        state.data = [];
      });
  },
});
export const DataBase = Db.actions;
export default Db;
// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// // Бардык продуктыларды алуу
// export const getAll = createAsyncThunk(
//   "data/getAll",
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await fetch("http://10.10.10.12:9091/product/getAll", {
//         method: "GET",
//         headers: { "Content-Type": "application/json" },
//       });

//       if (!response.ok) {
//         throw new Error("Серверден ката келип чыкты!");
//       }

//       return await response.json();
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// // Белгилүү бир продуктуну алуу
// export const findById = createAsyncThunk(
//   "data/findById",
//   async (id, { rejectWithValue }) => {
//     try {
//       const response = await fetch(
//         `http://10.10.10.12:9091/product/findById/${id}`,
//         {
//           method: "GET",
//           headers: { "Content-Type": "application/json" },
//         }
//       );

//       if (!response.ok) {
//         throw new Error("Серверден ката келип чыкты!");
//       }

//       return await response.json();
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// // Издөө функциясы
// export const searchAPI = createAsyncThunk(
//   "data/searchAPI",
//   async (value, { rejectWithValue }) => {
//     try {
//       const response = await fetch(
//         `http://10.10.10.12:9091/product/search?query=${value}`,
//         {
//           method: "GET",
//           headers: { "Content-Type": "application/json" },
//         }
//       );

//       if (!response.ok) {
//         throw new Error("Издөө катасы!");
//       }

//       return await response.json();
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// // Redux Slice
// const Db = createSlice({
//   name: "data",
//   initialState: {
//     data: [],
//     find_db: {},
//     search_result: [],
//     error: null,
//     status: "idle",
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(getAll.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(getAll.fulfilled, (state, action) => {
//         state.status = "succeeded";
//         state.data = action.payload;
//       })
//       .addCase(getAll.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.payload;
//         state.data = [];
//       })
//       .addCase(findById.fulfilled, (state, action) => {
//         state.find_db = action.payload;
//       })
//       .addCase(searchAPI.fulfilled, (state, action) => {
//         state.search_result = action.payload;
//       })
//       .addCase(searchAPI.rejected, (state, action) => {
//         state.error = action.payload;
//         state.search_result = [];
//       });
//   },
// });

// export const DataBase = Db.actions;
// export default Db;
