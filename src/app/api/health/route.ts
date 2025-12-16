import { NextResponse } from 'next/server';

/**
 * Health check endpoint para Docker healthcheck
 * Usado por el contenedor para verificar que la aplicación responde correctamente
 */
export async function GET() {
  return NextResponse.json(
    {
      status: 'ok',
      timestamp: new Date().toISOString(),
      service: 'web-ia-frontend',
    },
    { status: 200 }
  );
}
