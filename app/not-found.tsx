'use client'

import Button from '@/ui/button';
import { ArrowLeft, Home } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Notfound() {
    const router = useRouter();

    return(
        <div className='h-screen flex flex-col items-center justify-center'>
            <h1 className='text-4xl md:text-6xl font-bold text-black mb-2'>
                404
            </h1>
            <p className='text-2xl text-black mb-5'>
                Siden du leter etter finnes ikke.
            </p>

            <div className='flex items-center justify-center gap-x-3'>
                <Button variant='default' onClick={() => router.back()}>
                    <ArrowLeft />
                    Tilbake
                </Button>

                <Link href='/'>
                    <Button variant='secondary'>
                        <Home />
                        Hjem
                    </Button>
                </Link>
            </div>

        </div>
    )
}