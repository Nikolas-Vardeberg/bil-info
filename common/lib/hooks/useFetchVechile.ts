'use client';

import { Vehicle } from "@/types/root.types";
import { useState, useCallback } from "react";
import useFetchUser from "./useFetchUser";

/**
 * useFetchVehicle Hook
 * @description: Hook for fetching vehicle data
 */
export default function useFetchVehicle() {
    const [vehicleData, setVehicleData] = useState<Vehicle | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const { user, isLoading: isUserLoading } = useFetchUser();

    const fetchVehicle = useCallback(async (regNumber: string) => {
        if (!user) {
            setError("Please log in to search for vehicles");
            return;
        }

        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch("/api/vehicle", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ regNumber }),
            });
            
            const data = await response.json();
            setVehicleData(data.kjoretoydataListe[0]);
        } catch {
            setError("Something went wrong");
        } finally {
            setIsLoading(false);
        }
    }, [user]);

    return { vehicleData, error, isLoading: isLoading || isUserLoading, fetchVehicle };
}