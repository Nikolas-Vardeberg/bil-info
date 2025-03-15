import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/ui/card';
import Label from '@/ui/label';
import Input from '@/ui/input';
import Button from '@/ui/button';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { signup } from '../login/actions';
import { Checkbox } from '@/ui/checkbox';

export default function Page() {
    return (    
        <div className='bg-green-100 h-screen items-center justify-center flex py-12 sm:py-20'>
            <Link href='/'>
                <Button className='top-10 left-10 absolute' variant='outline'>
                    <ArrowLeft />
                    Gå tilbake
                </Button>
            </Link>
            <div className='flex mx-auto max-w-[1200px] px-8'>
                <Card className='w-full'>
                    <CardHeader>
                        <CardTitle className='text-3xl !font-normal'>Opprett Konto ✨🚀</CardTitle>
                        <CardDescription>Bli en del av vårt fellesskap og få full kontroll over bilen din!</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form className='space-y-5'>
                            <div className='grid w-full items-center gap-3'>
                                <Label htmlFor='email'>E-post</Label>
                                <Input id='email' name='email' type='email' placeholder='ola@nordmann.no' required />
                            </div>
                            <div className='grid w-full items-center gap-3'>
                                <Label htmlFor='password'>Passord</Label>
                                <Input id='passwor' name='password' type='password' placeholder='passord' required />
                            </div>
                            <div className='flex items-center space-x-2'>
                                <Checkbox id='terms' required />
                                <Label htmlFor='terms'>Accept terms and conditions</Label>
                            </div>
                            <Button formAction={signup} className='w-full'>
                                Registrer deg
                                <ArrowRight />
                            </Button>
                        </form>
                    </CardContent>
                    <CardFooter>
                        <p>Har allerede en bruker?{' '}<Link href='/login' className='font-bold underline'>Login</Link></p>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}