import { createClient } from '@supabase/supabase-js'

// สร้างฟังก์ชันเพื่อเชื่อมต่อ Supabase
export const useSupabase = () => {
    const config = useRuntimeConfig()
    const supabase = createClient(config.public.supabaseUrl, config.public.supabaseKey)
    return supabase
}
