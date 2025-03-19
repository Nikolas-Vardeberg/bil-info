"use client";

import { AlertDialogCancel, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/ui/alert-dialog";
import { AlertDialogContent, AlertDialogTrigger } from "@/ui/alert-dialog";
import { AlertDialog } from "@/ui/alert-dialog";
import Button from "@/ui/button";
import { Card, CardDescription, CardHeader,  } from "@/ui/card";
import Input from "@/ui/input";
import { Separator } from "@/ui/separator";
import { Copy, Share, Check } from "lucide-react";
import { useState } from "react";


export default function SharePanel() {
    const [copied, setCopied] = useState(false);

    return(
        <Card>
            <CardHeader className="flex flex-row gap-2">
                <Share />
                Del
            </CardHeader>

            <Separator />

            <CardDescription className="p-4 flex flex-col gap-3">
                Del våre tjenester med dine venner og kolleger.
                <AlertDialog>
                    <AlertDialogTrigger className="flex items-start max-w-fit">
                        <Button>Del</Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Del våre tjenester</AlertDialogTitle>
                            <AlertDialogDescription>
                                Del våre tjenester med dine venner og kolleger.
                            </AlertDialogDescription>
                            <div className="flex items-center mt-2">
                                <Input 
                                  type="text" 
                                  value={window.location.host} 
                                  readOnly 
                                  className="pr-10 bg-gray-200"
                                />
                                <Button 
                                  className="ml-[-40px] h-8 w-8 p-0" 
                                  variant="ghost"
                                  onClick={() => {
                                    navigator.clipboard.writeText(window.location.host);
                                    setCopied(true);
                                  }}
                                >
                                    {copied ? <Check /> : <Copy />}
                                </Button>
                            </div>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Lukk</AlertDialogCancel>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </CardDescription>
      </Card>
    )
}