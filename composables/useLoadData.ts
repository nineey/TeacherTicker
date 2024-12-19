import {createClient} from "@supabase/supabase-js";

export async function getTimes() {
    const user: any = await useSupabaseUser()
    const supabase = await createClient(useRuntimeConfig().public.SUPABASE_URL, useRuntimeConfig().public.SUPABASE_KEY)

    const session = await supabase.auth.getSession()
    console.log(session)
    const { data } = await supabase
        .from('time_entries')
        .select()
        .eq('user_id', user.value.id)
        .order('date', { ascending: true })
    return data
}
