/* [Footer] */
import Image from 'next/image';
import styles from './page.module.scss';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <a
                href='https://vercel.com'
                target='_blank'
                rel='noopener noreferrer'
            > Powered by{' '}

                <span className={styles.logo}>
                    <Image
                        src='/vercel.svg'
                        alt='Vercel Logo'
                        width={72}
                        height={16}
                    />
                </span>

            </a>
        </footer>
    );
}
