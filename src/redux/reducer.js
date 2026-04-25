// import { combineReducers } from "redux";
// import statusFilters from "./constans";

// const tasksInitialState = [
//   { id: 0, text: "Learn HTML and CSS", completed: true },
//   { id: 1, text: "Get good at JavaScript", completed: true },
//   { id: 2, text: "Master React", completed: false },
//   { id: 3, text: "Discover Redux", completed: false },
//   { id: 4, text: "Build amazing apps", completed: false },
// ];

// const tasksReducer = (state = tasksInitialState, action) => {
//   switch (action.type) {
//     case "tasks/addTask":
//       return [...state, action.payload];

//     case "tasks/deleteTask":
//       return state.filter((task) => task.id !== action.payload);

//     case "tasks/toggleCompleted":
//       return state.map((task) => {
//         if (task.id !== action.payload) {
//           return task;
//         } else {
//           return { ...task, completed: !task.completed };
//         }
//       });

//     case "tasks/toggleAllCompleted":
//       return state.map((task) => {
//         if (task.completed) {
//           return task;
//         } else {
//           return { ...task, completed: true };
//         }
//       });

//     case "tasks/deleteAllCompleted":
//       return state.filter((task) => !task.completed);

//     default:
//       return state;
//   }
// };

// const statusFilterInitialState = {
//   status: statusFilters.all,
// };

// const filtersReducer = (state = statusFilterInitialState, action) => {
//   switch (action.type) {
//     case "filters/setStatusFilter":
//       return { ...state, status: action.payload };

//    default:
//       return state;
//   }
// };


// export const rootReducer = combineReducers({
//   tasks: tasksReducer,
//   filters: filtersReducer,
// });