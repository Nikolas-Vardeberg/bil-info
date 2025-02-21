import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { createClient } from '@/utils/supabase/server'
import { ArrowRight, ChevronRight, FileText, Info, Mail, MessageSquare, Settings, Share } from 'lucide-react'
import Link from 'next/link'

export default async function Account() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return(
    <div className='bg-green-100 min-h-screen justify-center items-center flex py-12 sm:py-20'>
      <div className='max-w-[1200px] px-8 mx-auto flex flex-col gap-8'>
        <h2 className='text-2xl sm:text-4xl'>Hei! {" "}<span className='underline'>{user?.email}</span></h2>
        <Card>
          <Button
            variant="ghost"
            className="w-full !rounded-none justify-between h-12 px-4"
            asChild
          >
            <Link href="/">
              <div className="flex items-center">
                <Share className="mr-2 h-4 w-4" />
                <span>Del med andre</span>
              </div>
              <ChevronRight className="h-4 w-4" />
            </Link>
          </Button>

          <Separator />  

          <Button
            variant="ghost"
            className="w-full !rounded-none justify-between h-12 px-4"
            asChild
          >
            <Link href="/">
              <div className="flex items-center">
                <Settings className="mr-2 h-4 w-4" />
                <span>Konto innstillinger</span>
              </div>
              <ChevronRight className="h-4 w-4" />
            </Link>
          </Button>

          <Separator />  
          <Button className='w-full h-12 !rounded-none justify-start' variant="ghost">
            <MessageSquare /> Send Tilbakemeling
          </Button>
        </Card>

        <Card>
          <Button
            variant="ghost"
            className="w-full !rounded-none justify-between h-12 px-4"
            asChild
          >
            <Link href="/">
              <div className="flex items-center">
                <Info className="mr-2 h-4 w-4" />
                <span>Om Bil Info</span>
              </div>
              <ChevronRight className="h-4 w-4" />
            </Link>
          </Button>

          <Separator />  

          <Button
            variant="ghost"
            className="w-full !rounded-none justify-between h-12 px-4"
            asChild
          >
            <Link href="/">
              <div className="flex items-center">
                <FileText className="mr-2 h-4 w-4" />
                <span>Personervernerklæring</span>
              </div>
              <ChevronRight className="h-4 w-4" />
            </Link>
          </Button>

          <Separator />

          <Button
            variant="ghost"
            className="w-full !rounded-none justify-between h-12 px-4"
            asChild
          >
            <Link href="/">
              <div className="flex items-center">
                <Info className="mr-2 h-4 w-4" />
                <span>Informasjonskapsler</span>
              </div>
              <ChevronRight className="h-4 w-4" />
            </Link>
          </Button>
          
          <Separator />  

          <Button
            variant="ghost"
            className="w-full !rounded-none justify-between h-12 px-4"
            asChild
          >
            <Link href="/">
              <div className="flex items-center">
                <FileText className="mr-2 h-4 w-4" />
                <span>Vilkår</span>
              </div>
              <ChevronRight className="h-4 w-4" />
            </Link>
          </Button>

          <Separator />

          <Button className='w-full h-12 !rounded-none justify-start' variant="ghost">
            <Mail /> Kontakt oss
          </Button>
        </Card>
        
        <Button variant="destructive" className='w-full h-12'>
          Log ut <ArrowRight />
        </Button>
      </div>
    </div>
  )
}