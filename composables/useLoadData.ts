import {createClient} from "@supabase/supabase-js";

const user: any = useSupabaseUser()
const supabase = createClient(useRuntimeConfig().public.SUPABASE_URL, useRuntimeConfig().public.SUPABASE_KEY)

export async function getTimes() {
    const { data } = await supabase
        .from('time_entries')
        .select()
        .eq('user_id', user.value.id)
        .order('date', { ascending: true })
        .limit(10)
    return data
}
