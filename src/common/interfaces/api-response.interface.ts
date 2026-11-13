import { ErrorApiResponse } from "./error-api-response.interface.js";

interface ApiResponse<T> {
    success: boolean;
    message: string;
    data: T | null;
    timestamp: string;
    error: ErrorApiResponse[];
}