/* [Root] Layout */
import './globals.scss';
import Nav from './nav';
import Footer from './footer';

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      {/*
        <head /> will contain the components 
        returned by the nearest parent head.jsx.
        https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
