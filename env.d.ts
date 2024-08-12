declare namespace NodeJS {
  interface ProcessEnv {
    SERVER_PORT: number;
    DB_HOST: string;
    DB_PORT: number;
    DB_USERNAME: string;
    DB_PASSWORD: string;
    API_FRETE_URL: string;
    API_FRETE_KEY: string;
    IMAGE_PUBLIC_KEY: string;
    IMAGE_PRIVATE_KEY: string;
    IMAGE_URL: string;
    ADMIN_USERNAME: string;
    ADMIN_EMAIL: string;
    ADMIN_PASSWORD: string;
    ADMIN_FUNCTION: string;
  }
}
