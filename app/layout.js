import './globals.scss';

export const metadata = {
  title: 'ÉLAN | Women’s Private Gym',
  description:
    'Privatni prostor za trening namenjen ženama koje žele da grade snagu u mirnom, fokusiranom i prefinjenom okruženju.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="sr">
      <body>{children}</body>
    </html>
  );
}
