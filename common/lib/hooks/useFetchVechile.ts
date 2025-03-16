'use client';

import { Vehicle } from "@/types/root.types";
import { useState, useCallback } from "react";

/**
 * useFetchVehicle Hook
 * @description: Hook for fetching vehicle data
 */
export default function useFetchVehicle() {
    const [vehicleData, setVehicleData] = useState<Vehicle | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchVehicle = useCallback(async (regNumber: string) => {
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
    }, []);

    return { vehicleData, error, isLoading, fetchVehicle };
}