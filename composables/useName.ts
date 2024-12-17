import {reactive} from "vue";

export function useSuperHero(){
    const name = reactive({first: new Date(), last: "Gordan"});

    return name;
}