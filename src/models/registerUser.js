import { supabase } from '@/lib/supabase'

export async function registerUser(form) {
  const { email, password } = form

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        username: form.username,
        name: form.name,
      },
    },
  })

  if (error) throw error
  return data

 

}
