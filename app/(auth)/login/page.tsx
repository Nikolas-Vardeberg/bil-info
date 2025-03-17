"use client"

import { login } from './actions';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Button from '@/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/ui/card';
import Label from '@/ui/label';
import Input from '@/ui/input';
import { useTranslations } from 'next-intl';
import useFetchUser from '@/lib/hooks/useFetchUser';
import { redirect } from 'next/navigation';

export default function Page() {
    const t = useTranslations();
    const { user } = useFetchUser();

    if (user) {
        redirect('/account');
    }

    return (
        <div className='bg-green-100 relative h-screen items-center justify-center flex py-12 sm:py-20'>
            <Link href='/'>
                <Button className='top-10 left-10 absolute' variant='outline'>
                    <ArrowLeft />
                    {t('navigation.back')}
                </Button>
            </Link>
           
            <div className='flex mx-auto max-w-[1200px] px-8'>
                <Card>
                    <CardHeader>
                        <CardTitle className='text-3xl !font-normal'>{t('login.welcome')}</CardTitle>
                        <CardDescription>{t('login.description')}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form className='space-y-5'>
                            <div className='grid w-full items-center gap-3'>
                                <Label htmlFor='email'>{t('login.email')}</Label>
                                <Input id='email' name='email' type='email' placeholder='ola@nordmann.no' required />
                            </div>
                            <div className='grid w-full items-center gap-3'>
                                <Label htmlFor='password'>{t('login.password')}</Label>
                                <Input id='passwor' name='password' type='password' placeholder='passord' required />
                            </div>
                            <Button formAction={login} className='w-full'>
                                Login
                                <ArrowRight />
                            </Button>
                        </form>
                    </CardContent>
                    <CardFooter>
                        <p>{t('login.dont_have_account')}{' '}<Link href='/signup' className='font-bold underline'>{t('login.sign_up')}</Link></p>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}