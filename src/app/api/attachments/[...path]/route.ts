import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const contentDirectory = path.join(process.cwd(), 'content', 'articles');

const mimeTypes: Record<string, string> = {
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.avif': 'image/avif',
};

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> },
) {
  const { path: pathSegments } = await params;
  const imagePath = decodeURIComponent(pathSegments.join('/'));
  const fullPath = path.join(contentDirectory, imagePath);
  const resolvedPath = path.resolve(fullPath);

  if (!resolvedPath.startsWith(contentDirectory)) {
    return new NextResponse('Forbidden', { status: 403 });
  }
  if (!fs.existsSync(resolvedPath)) {
    return new NextResponse('Not Found', { status: 404 });
  }

  const ext = path.extname(resolvedPath).toLowerCase();
  const mimeType = mimeTypes[ext];

  if (!mimeType) {
    return new NextResponse('Unsupported file type', { status: 415 });
  }

  const fileBuffer = fs.readFileSync(resolvedPath);
  return new NextResponse(fileBuffer, {
    headers: {
      'Content-Type': mimeType,
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
}
