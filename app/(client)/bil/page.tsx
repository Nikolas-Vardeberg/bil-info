'use client';

import useFetchVehicle from "@/lib/hooks/useFetchVechile";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/ui/card";
import Input from "@/ui/input";
import Button from "@/ui/button";
import { ArrowLeft, Printer } from "lucide-react";
import { useRef, useState } from "react";
import { VehicleDetails } from "@/components/vechile-details";
import { useTranslations } from "next-intl";
import { useReactToPrint } from "react-to-print";

export default function Page() {
    const [regNumber, setRegNumber] = useState("");
    const { vehicleData, error, isLoading, fetchVehicle } = useFetchVehicle();
    const contentRef = useRef<HTMLDivElement>(null);
    const reactToPrintFn = useReactToPrint({ contentRef });
    const t = useTranslations();

    const handleSubmit = () => {
      fetchVehicle(regNumber);
    }

    return (
        <div className='min-h-screen bg-green-100'>
            {vehicleData ? (
                <div className='max-w-[1200px] mx-auto p-4'>
                    <div className="flex gap-2 items-center mb-6">
                        <Button>
                            <ArrowLeft className='w-4 h-4 mr-2' />
                            {t("navigation.back")}
                        </Button>

                    <Button onClick={() => reactToPrintFn()} variant='outline'>
                        <Printer className='w-4 h-4 mr-2' />
                        Print
                    </Button>
                    </div>
                    {vehicleData && <VehicleDetails ref={contentRef} data={vehicleData} />}
               </div> 
            ): (
                <div className='max-w-[1200px] mx-auto flex items-center justify-center min-h-screen p-4'>
                    <Card className='w-full max-w-md'>
                        <CardHeader>
                            <CardTitle>{t('bil.search_title')}</CardTitle>
                            <CardDescription>{t('bil.search_description')}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className='space-y-4'>
                                <div className='space-y-2'>
                                    <label htmlFor='regNumber' className='text-sm font-medium'>
                                        {t('bil.search_placeholder')}
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
                                    loading={isLoading}
                                >
                                    Søk
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