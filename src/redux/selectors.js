import statusFilters from "./constans";


export const selectTask = state => state.tasks.items;
export const selectStatusFilter = state => state.filters.status;
export const selectError = state => state.tasks.error;
export const selectIsLoading = state => state.filters.status;
export const selectTaskCount = state => {
    const tasks = selectTask(state)

    return tasks.reduce((count, task) => {
        if (task.completed) {
            count.completed += 1
        } else {
            count.active += 1
        }
         return count
    }, {completed: 0 , active: 0})
}


