import './globals.scss';

const assetBasePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const metadata = {
  title: 'ÉLAN | Women’s Private Gym',
  description:
    'Privatni prostor za trening namenjen ženama koje žele da grade snagu u mirnom, fokusiranom i prefinjenom okruženju.',
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
};

export default function RootLayout({ children }) {
  return (
    <html lang="sr">
      <body>{children}</body>
    </html>
  );
}
