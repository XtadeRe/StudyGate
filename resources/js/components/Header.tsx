import React from 'react';
import { Link, router, usePage } from '@inertiajs/react';


interface User {
    id: number;
    login: string;
    email: string;
}

interface PageProps {
    auth: {
        user: User | null;
    };
}
const Header = () => {
    const { auth } = usePage<PageProps>().props;
    const { user } = auth;

    const handleLogout = (e: React.FormEvent) => {
        e.preventDefault();

        router.post('/logout');
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
            <div className="container mx-auto px-4 py-4">
                <nav className="flex justify-between items-center">
                    <Link href="/">
                        <h1 className="text-2xl font-bold tracking-widest uppercase text-gray-900">
                            StudyGate
                        </h1>
                    </Link>

                    <ul className="hidden md:flex space-x-8">
                        <li>
                            <Link
                                href="/catalog"
                                className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
                            >
                                Учебные заведения
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/about"
                                className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
                            >
                                О компании
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/immigration"
                                className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
                            >
                                Правила
                            </Link>
                        </li>
                    </ul>

                    <div className="flex items-center space-x-6">
                        {!user ? (
                            <>
                                <Link
                                    href="/register"
                                    className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
                                >
                                    Регистрация
                                </Link>
                                <Link
                                    href="/login"
                                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium"
                                >
                                    Вход
                                </Link>
                            </>
                        ) : (
                            <>
                                <div className="flex flex-col items-end">
                                    <span className="text-gray-900 font-medium">
                                        {user.login}
                                    </span>
                                    <span className="text-sm text-gray-500">
                                        {user.email}
                                    </span>
                                </div>
                            <Link
                                href="/profile"
                                className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
                            >
                                Профиль
                            </Link>
                                <form onSubmit={handleLogout}>
                                <button type="submit" className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors duration-300 font-medium">Выйти</button>
                                </form>
                            </>
                            )}
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
