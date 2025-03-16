'use client'

import { ArrowLeft } from "lucide-react"
import { Home } from "lucide-react"
import Button from "@/ui/button"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useTranslations } from "next-intl"
 
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const router = useRouter();
  const t = useTranslations('error');

  return (
    <html>
      <body>
        <div className='h-screen flex flex-col items-center justify-center'>
            <h1 className='text-4xl md:text-6xl font-bold text-black mb-2'>{t('title')}</h1>

            <p className='text-2xl text-black mb-5'>{t('description')}</p>

            <div className='flex items-center justify-center gap-x-3'>
                <Button variant='default' onClick={() => router.back()}>
                    <ArrowLeft />
                    {t('back')}
                </Button>

                <Link href='/'>
                    <Button variant='secondary'>
                        <Home />
                        {t('home')}
                    </Button>
                </Link>
            </div>

        </div>
      </body>
    </html>
  )
}