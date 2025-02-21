import { createClient } from '@/utils/supabase/server'

export default async function Account() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <pre>
        {JSON.stringify(user, undefined, 2)}
    </pre>
  )
}