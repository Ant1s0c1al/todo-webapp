/* [Root] Layout */
import './globals.scss';
import NavBar from './navbar';
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
                <NavBar />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
