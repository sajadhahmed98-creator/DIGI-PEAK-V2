import { NextResponse } from 'next/server';
import { readFileSync } from 'fs';
import { join } from 'path';

// Serve the BIMI-compliant SVG logo with correct MIME type.
// BIMI requires: Content-Type: image/svg+xml, no redirects, HTTPS only.
export async function GET() {
  try {
    const svgPath = join(process.cwd(), 'public', 'bimi-logo.svg');
    const svgContent = readFileSync(svgPath, 'utf-8');

    return new NextResponse(svgContent, {
      status: 200,
      headers: {
        'Content-Type': 'image/svg+xml',
        'Cache-Control': 'public, max-age=86400, s-maxage=86400',
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch {
    return NextResponse.json({ error: 'Logo not found' }, { status: 404 });
  }
}
