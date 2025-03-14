import { withAuth, WithAuthProps } from '@/lib/withAuth';

function Page({ user }: WithAuthProps) {
  return(
    <div className='bg-green-100'>
      <div className='flex flex-1 flex-col space-y-2 overflow-hidden md:space-y-2 lg:flex-row lg:space-x-12 lg:space-y-0'>
          <div className='flex w-full overflow-y-hidden p-1 pr-4'>
            Content
            <pre>
              {JSON.stringify(user, undefined, 2)}
            </pre>
          </div>
        </div>
    </div>
  )
}

export default withAuth(Page);