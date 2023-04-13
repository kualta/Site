import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
    const hostname = request.headers.get('host') ?? ""
    const { pathname } = request.nextUrl;
    const url = request.nextUrl

    // xyz.kualta.dev 
    if (hostname.startsWith('vids')) {
        return NextResponse.redirect('https://kualta.dev/vids')
    }
    if (hostname.startsWith('arts')) {
        return NextResponse.redirect('https://kualta.dev/arts')
    }
    if (hostname.startsWith('noir')) {
        return NextResponse.redirect('https://kualta.dev/noir')
    }
    if (hostname.startsWith('noir')) {
        return NextResponse.redirect('https://kualta.dev/noir')
    }
    if (hostname.startsWith('bbdd')) {
        return NextResponse.redirect('https://kualta.dev/blackbox')
    }

    // ---------------------------------------------------------------
    // kualta.dev/xyz
    if (pathname.startsWith('/blog')) {
        url.hostname = 'blog.kualta.dev'
        return NextResponse.redirect(url)
    }
    if (pathname.startsWith("/_next")) return NextResponse.next();
}
