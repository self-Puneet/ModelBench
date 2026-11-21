import { Injectable } from "@nestjs/common";

@Injectable()
class HealthService {
    public healthOfService(serviceName: String): object {
        var response: object = {
            "health": true,
            "message": `${serviceName} is healthy as fuck !!`
        };
        return response;
    }
}