import AccountSummary from '@/components/account-summary';
import PageWrapper from '@/components/layout/PageWrapper';
import { withAuth, WithAuthProps } from '@/wrappers/withAuth';

function Page({ user }: WithAuthProps) {
  return(
    <div className='bg-green-100'>
      <PageWrapper>
        <AccountSummary user={user}  />
      </PageWrapper>
    </div>
  )
}

export default withAuth(Page);