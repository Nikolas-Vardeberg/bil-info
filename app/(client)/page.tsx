import Button from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardDescription } from '@/components/ui/card';
import { Car, CaseSensitive, Info, Check } from 'lucide-react';
import PageWrapper from '@/components/layout/PageWrapper';
import { useTranslations } from 'next-intl';

export default function Page() {
    const t = useTranslations();

    const renderHero = () => (
        <div className='grid grid-cols-1 md:grid-cols-2 items-center justify-between w-full gap-8'>
            <div className='flex flex-col gap-8'>
                <h1 className='text-3xl sm:text-5xl'>{t('home.hero.title')}</h1>
                <p>{t('home.hero.description')}</p>
                <Link href='/bil' className='max-w-fit'>
                    <Button>
                        {t('navigation.search_cta')}
                        <ArrowRight />
                    </Button>
                </Link>
            </div>
            <div className='flex justify-center items-center'>
                <Image
                    src='/mockup.png'
                    draggable={false}
                    height={300}
                    width={300}
                    alt='Bilde'
                />
            </div>
        </div>
    )

    const renderFeatures = () => (
        <>
            <h2 className='text-2xl sm:text-4xl'>{t('home.features.title')}</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 w-full lg:grid-cols-4 gap-8 justify-between'>
            
                    <Card className='w-full bg-yellow-100 items-center group text-center p-10 justify-center flex flex-col gap-4'>
                        <div className='p-4 rounded-full border-none'>
                            <Car />
                         </div>
                        <CardDescription>
                            <p className='text-black text-base group-hover:underline'>{t('home.features.step1')}</p>
                        </CardDescription>
                    </Card>

                    <Card className='w-full bg-blue-100 items-center group text-center p-10 justify-center flex flex-col gap-4'>
                        <div className='p-4 rounded-full border-none'>
                            <CaseSensitive />
                        </div>
                        <CardDescription>
                            <p className='text-black text-base group-hover:underline'>{t('home.features.step2')}</p>
                        </CardDescription>
                    </Card>

                    <Card className='w-full bg-green-100 items-center group text-center p-10 justify-center flex flex-col gap-4'>
                        <div className=' p-4 rounded-full border-none'>
                            <Info />
                        </div>
                        <CardDescription>
                            <p className='text-black text-base group-hover:underline'>{t('home.features.step3')}</p>
                        </CardDescription>
                    </Card>

                    <Card className='w-full bg-red-100 items-center group text-center p-10 justify-center flex flex-col gap-4'>
                        <div className='p-4 rounded-full border-none'>
                            <Check />
                        </div>
                        <CardDescription>
                            <p className='text-black text-base group-hover:underline'>{t('home.features.step4')}</p>
                        </CardDescription>
                    </Card>
                </div>
            </>
        )
  
    return(
        <PageWrapper className='bg-white'>
            {renderHero()}
            {renderFeatures()}
        </PageWrapper>
    )
}