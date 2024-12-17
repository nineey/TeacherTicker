import {v4 as uuidv4} from "uuid";
import {useStore} from "~/composables/useStore";
import {createClient} from "@supabase/supabase-js";

export async function insertDateToDB(timeIn: string, timeOut: string) {

    const supabase = await createClient(useRuntimeConfig().public.SUPABASE_URL , useRuntimeConfig().public.SUPABASE_KEY)
    const user: any = await useSupabaseUser()
    const uuid = await uuidv4()

    const { error } = await supabase
        .from('time_entries')
        .upsert({'uuid': uuid, 'user_id': user.value.id, 'date': useStore.selectedDate.toLocaleDateString('en-CA'), 'timeIn': timeIn,'timeOut': timeOut})
        .select()
   return error
}