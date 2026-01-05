import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Head } from '@inertiajs/react';

interface DefaultLayoutProps {
    children?: React.ReactNode;
    title?: string;
}

const DefaultLayout = ({children, title = 'StudyGate'}: DefaultLayoutProps) => {
    return (
        <>
            {/* Добавьте Head для мета-тегов */}
            <Head>
                <title>{title}</title>
                {/* CSRF токен будет автоматически добавлен Inertia */}
            </Head>

            <Header />
            <main className="min-h-screen pt-16">{children}</main>
            <Footer />
        </>
    )
};

export default DefaultLayout;
