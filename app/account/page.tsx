import SidebarNav from '@/components/sidebar-nav';
import { createClient } from '@/utils/supabase/server'
import { User } from 'lucide-react';

export default async function Account() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return(
    <div className='bg-green-100'>
      <div className='flex flex-1 flex-col space-y-2 overflow-hidden md:space-y-2 lg:flex-row lg:space-x-12 lg:space-y-0'>
          <aside className='top-0 lg:sticky lg:w-1/5'>
            <SidebarNav items={sidebarNavItems}/>
          </aside>
          <div className='flex w-full overflow-y-hidden p-1 pr-4'>
            Content
          </div>
        </div>
    </div>
  )
}
const sidebarNavItems = [
  {
    title: 'Profile',
    icon: <User size={18} />,
    href: '/settings',
  },
  {
    title: 'Account',
    icon: <User size={18} />,

    href: '/settings/account',
  },
  {
    title: 'Appearance',
    icon: <User size={18} />,

    href: '/settings/appearance',
  },
  {
    title: 'Notifications',
    icon: <User size={18} />,

    href: '/settings/notifications',
  },
  {
    title: 'Display',
    icon: <User size={18} />,
    href: '/settings/display',
  },
]