export const isProd = process.env.NODE_ENV === 'production';
export const postgresURL = getPostgresUrl();

function getPostgresUrl(): string {
    if (isProd) {
        const url = process.env.DATABASE_URL;

        if (!url) throw new Error('Please set DATABASE_URL environment variable');
        return url;
    }

    const url = new URL('postgresql://127.0.0.1');

    url.username = process.env.DEV_PG_USER ?? 'dev';
    url.password = process.env.DEV_PG_PASSWORD ?? 'devpassword';
    url.port = process.env.DEV_PG_PORT ?? '5432';
    url.pathname = process.env.DEV_PG_DB ?? 'devdb';

    return url.toString();
}
