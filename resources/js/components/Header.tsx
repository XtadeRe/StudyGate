// src/components/Header.tsx
import React, { useEffect, useState } from 'react';
import { Link } from '@inertiajs/react';

type StateType = boolean | null;

const Header = () => {
    const [isAuthenticated, setIsAuthenticated] = useState<StateType>(null);

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (token) {
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
        }
    }, []);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
            {/* Контейнер для контента с отступами */}
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
                    </ul>

                    <div className="flex items-center space-x-6">
                        {!isAuthenticated ? (
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
                            <Link
                                href="/profile"
                                className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
                            >
                                Профиль
                            </Link>
                        )}
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
