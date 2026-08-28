import './globals.scss';

const assetBasePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
const siteUrl = 'https://elanfit.rs';
const siteDescription =
  'Privatni prostor za trening namenjen ženama koje žele da grade snagu u mirnom, fokusiranom i prefinjenom okruženju.';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'ÉLAN | Women’s Private Gym',
    template: '%s | ÉLAN',
  },
  description: siteDescription,
  alternates: {
    canonical: '/',
  },
  manifest: `${assetBasePath}/site.webmanifest`,
  icons: {
    icon: [
      { url: `${assetBasePath}/favicon.ico` },
      { url: `${assetBasePath}/favicon-16x16.png`, sizes: '16x16', type: 'image/png' },
      { url: `${assetBasePath}/favicon-32x32.png`, sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: `${assetBasePath}/apple-touch-icon.png`, sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'ÉLAN | Women’s Private Gym',
    description: siteDescription,
    url: siteUrl,
    siteName: 'ÉLAN',
    locale: 'sr_RS',
    type: 'website',
    images: [
      {
        url: '/images/elan-hero-002.png',
        width: 1200,
        height: 630,
        alt: 'ÉLAN private women’s training space',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ÉLAN | Women’s Private Gym',
    description: siteDescription,
    images: ['/images/elan-hero-002.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="sr">
      <body>{children}</body>
    </html>
  );
}
