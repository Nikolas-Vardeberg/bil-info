import Button from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardDescription } from '@/components/ui/card';
import { Car, CaseSensitive, Info, Check } from 'lucide-react';
import PageWrapper from '@/components/layout/PageWrapper';

export default function Page() {
    const renderHero = () => (
        <div className='grid grid-cols-1 md:grid-cols-2 items-center justify-between w-full gap-8'>
            <div className='flex flex-col gap-8'>
                <h1 className='text-3xl sm:text-5xl'>Få Full Kontroll Over Bilen Din 🚗💡</h1>
                <p>Sjekk bilens historikk, spesifikasjoner og verdi på sekunder. Enkelt, raskt og nøyaktig - alt du trenger på ett sted.</p>
                <Link href='/bil' className='max-w-fit'>
                    <Button>
                        Søk opp bilen din nå
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
            <h2 className='text-2xl sm:text-4xl'>Slik fungerer det</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 w-full lg:grid-cols-4 gap-8 justify-between'>
            
                    <Card className='w-full bg-yellow-100 items-center group text-center p-10 justify-center flex flex-col gap-4'>
                        <div className='p-4 rounded-full border-none'>
                            <Car />
                         </div>
                        <CardDescription>
                            <p className='text-black text-base group-hover:underline'>Skriv inn registreringsnummer</p>
                        </CardDescription>
                    </Card>

                    <Card className='w-full bg-blue-100 items-center group text-center p-10 justify-center flex flex-col gap-4'>
                        <div className='p-4 rounded-full border-none'>
                            <CaseSensitive />
                        </div>
                        <CardDescription>
                            <p className='text-black text-base group-hover:underline'>Få detaljer om bilen</p>
                        </CardDescription>
                    </Card>

                    <Card className='w-full bg-green-100 items-center group text-center p-10 justify-center flex flex-col gap-4'>
                        <div className=' p-4 rounded-full border-none'>
                            <Info />
                        </div>
                        <CardDescription>
                            <p className='text-black text-base group-hover:underline'>Sjekk bilens verdi</p>
                        </CardDescription>
                    </Card>

                    <Card className='w-full bg-red-100 items-center group text-center p-10 justify-center flex flex-col gap-4'>
                        <div className='p-4 rounded-full border-none'>
                            <Check />
                        </div>
                        <CardDescription>
                            <p className='text-black text-base group-hover:underline'>Ta smartere beslutninger</p>
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