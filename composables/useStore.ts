import { reactive } from 'vue'

export const useStore = reactive({
    selectedDate: new Date()
})

export function useStore2() {
    let getSelectedDate = reactive({
        selectedDate: new Date()
    })
    return getSelectedDate
}



// import {reactive} from "vue";
//
// export function useSuperHero(){
//     const name = reactive({first: new Date(), last: "Gordan"});
//
//     return name;
// }