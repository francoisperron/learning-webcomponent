export interface AppConfig {
    apiBaseUrl: string;
    environment: string;
}

const load = async (): Promise<AppConfig> => {
    const response = await fetch('/config.json');
    const env = await response.json();

    return {
        apiBaseUrl: env.API_BASE_URL,
        environment: env.ENVIRONMENT
    }
}

export const AppConfig = {
    load: load
}
