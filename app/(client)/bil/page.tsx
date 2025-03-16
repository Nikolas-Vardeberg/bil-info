'use client';

import useFetchVehicle from "@/lib/hooks/useFetchVechile";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/ui/card";
import Input from "@/ui/input";
import Button from "@/ui/button";
import { ArrowLeft, Loader2 } from "lucide-react";
import { useState } from "react";
import { VehicleDetails } from "@/components/vechile-details";
import { useTranslations } from "next-intl";

export default function Page() {
    const [regNumber, setRegNumber] = useState("");
    const { vehicleData, error, isLoading, fetchVehicle } = useFetchVehicle();
    const t = useTranslations();

    const handleSubmit = () => {
      fetchVehicle(regNumber);
    }

    return (
        <div className='min-h-screen bg-green-100'>
            {vehicleData ? (
                <div className='max-w-[1200px] mx-auto p-4'>
                    <Button className='mb-6'>
                        <ArrowLeft className='w-4 h-4 mr-2' />
                        {t("navigation.back")}
                    </Button>
                    {vehicleData && <VehicleDetails data={vehicleData} />}
               </div>
            ): (
                <div className='max-w-[1200px] mx-auto flex items-center justify-center min-h-screen p-4'>
                    <Card className='w-full max-w-md'>
                        <CardHeader>
                            <CardTitle>Søk etter kjøretøy</CardTitle>
                            <CardDescription>Skriv inn registreringsnummeret for å hente kjøretøydetaljer</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className='space-y-4'>
                                <div className='space-y-2'>
                                    <label htmlFor='regNumber' className='text-sm font-medium'>
                                        Registreringsnummer
                                    </label>
                                    <Input
                                        id='regNumber'
                                        type='text'
                                        value={regNumber}
                                        onChange={(e) => setRegNumber(e.target.value)}
                                        placeholder='F.eks. AB12345'
                                        className='w-full'
                                    />
                                </div>
                                <Button 
                                    onClick={handleSubmit} 
                                    className='w-full' 
                                    disabled={isLoading}
                                >
                                    {isLoading ? <Loader2 className='ml-2 h-4 w-4' /> : 'Søk'}
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            )}
            {error && <p className='text-red-500'>{error}</p>}
        </div>
    );
}