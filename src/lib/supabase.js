import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://uvsomknjaybektnwpyei.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV2c29ta25qYXliZWt0bndweWVpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM5NjI1MTQsImV4cCI6MjA1OTUzODUxNH0.WqbMdHtOgS1Mvsw4fz_Ik1d2f9VPXzC75eYd2-sqb1A'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
