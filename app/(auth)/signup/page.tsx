"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/ui/card';
import Label from '@/ui/label';
import Input from '@/ui/input';
import Button from '@/ui/button';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Checkbox } from '@/ui/checkbox';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import useFetchUser from '@/hooks/useFetchUser';
import { redirect } from 'next/navigation';
import { signup } from '@/actions/auth';

export default function Page() {
    const t = useTranslations();
    const [successEmail, setSuccessEmail] = useState<string | null>(null);
    const { user } = useFetchUser();

    if (user) {
        redirect('/account');
    }

    async function handleSignup(formData: FormData) {
        const result = await signup(formData);
        setSuccessEmail(result.email);
    }

    if (successEmail) {
        return (
            <div className='bg-green-100 h-screen items-center justify-center flex py-12 sm:py-20'>
                <Link href='/'>
                    <Button className='top-10 left-10 absolute' variant='outline'>
                        <ArrowLeft />
                        {t('navigation.back')}
                    </Button>
                </Link>
                <Card className='w-full max-w-md'>
                    <CardHeader>
                        <div className='flex items-center justify-center mb-4'>
                            <CheckCircle2 className='w-12 h-12 text-green-500' />
                        </div>
                        <CardTitle className='text-3xl !font-normal text-center'>{t('signup.success_title')}</CardTitle>
                        <CardDescription className='text-center'>{t('signup.success_description', { email: successEmail })}</CardDescription>
                    </CardHeader>
                    <CardContent className='text-center'>
                        <p className='text-sm text-muted-foreground'>{t('signup.check_spam')}</p>
                    </CardContent>
                </Card>
            </div>
        );
    }

    return (    
        <div className='bg-green-100 h-screen items-center justify-center flex'>
            <PageWrapper>
                <div>
                    <Link href='/'>
                        <Button className='top-10 left-10 absolute' variant='outline'>
                            <ArrowLeft />
                            {t('navigation.back')}
                        </Button>
                    </Link>

                    <Card className='w-full'>
                        <CardHeader>
                            <CardTitle className='text-3xl !font-normal'>{t('signup.title')}</CardTitle>
                            <CardDescription>{t('signup.description')}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form action={handleSignup} className='space-y-5'>
                                <div className='grid w-full items-center gap-3'>
                                    <Label htmlFor='email'>{t('signup.email')}</Label>
                                    <Input id='email' name='email' type='email' placeholder='ola@nordmann.no' required />
                                </div>
                                <div className='grid w-full items-center gap-3'>
                                    <Label htmlFor='password'>{t('signup.password')}</Label>
                                    <Input id='password' name='password' type='password' placeholder='passord' required />
                                </div>
                                <div className='flex items-center space-x-2'>
                                    <Checkbox id='terms' required />
                                    <Label htmlFor='terms'>Accept terms and conditions</Label>
                                </div>
                                <Button type='submit' className='w-full'>
                                    {t('signup.sign_up')}
                                    <ArrowRight />
                                </Button>
                            </form>
                        </CardContent>
                        <CardFooter>
                            <p>{t('signup.already_have_account')}{' '}<Link href='/login' className='font-bold underline'>{t('signup.login')}</Link></p>
                        </CardFooter>
                    </Card>
                </div>
            </PageWrapper>
        </div>
    )
}