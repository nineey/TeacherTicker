import { reactive } from 'vue'

export const useStore = reactive({
    selectedDate: new Date()
})

// export function useStore() {
//     const selectedDate = reactive({
//         date: new Date()
//     })
//     return selectedDate
// }