import PageWrapper from '@/components/layout/PageWrapper';
import { withAuth, WithAuthProps } from '@/wrappers/withAuth';

function Page({ user }: WithAuthProps) {
  return(
    <div className='bg-green-100'>
      <PageWrapper>
        <pre>
          {JSON.stringify(user, null, 2)}
        </pre>
      </PageWrapper>
    </div>
  )
}

export default withAuth(Page);