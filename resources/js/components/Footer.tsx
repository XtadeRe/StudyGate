import React from 'react';
import { Link } from '@inertiajs/react';
import { AcademicCapIcon, EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { FaTelegram, FaVk, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white pt-12 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    <div className="lg:col-span-1">
                        <Link href="/" className="inline-block mb-6">
                            <div className="flex items-center">
                                <AcademicCapIcon className="h-8 w-8 text-blue-400 mr-2" />
                                <h2 className="text-2xl font-bold tracking-widest uppercase">
                                    StudyGate
                                </h2>
                            </div>
                        </Link>
                        <p className="text-gray-400 mb-6 max-w-md">
                            Открываем врата знаний - учеба без границ! Помогаем студентам найти
                            идеальные учебные заведения по всему миру.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="#"
                                className="bg-gray-800 hover:bg-blue-600 p-2 rounded-full transition-colors duration-300"
                                aria-label="Telegram"
                            >
                                <FaTelegram className="h-5 w-5" />
                            </a>
                            <a
                                href="#"
                                className="bg-gray-800 hover:bg-blue-700 p-2 rounded-full transition-colors duration-300"
                                aria-label="VKontakte"
                            >
                                <FaVk className="h-5 w-5" />
                            </a>
                            <a
                                href="#"
                                className="bg-gray-800 hover:bg-green-600 p-2 rounded-full transition-colors duration-300"
                                aria-label="WhatsApp"
                            >
                                <FaWhatsapp className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Быстрые ссылки */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-white">Быстрые ссылки</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    href="/"
                                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center"
                                >
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                                    Главная
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/institutions"
                                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center"
                                >
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                                    Учебные заведения
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/about"
                                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center"
                                >
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                                    О компании
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center"
                                >
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                                    Контакты
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Контактная информация */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-white">Контакты</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <PhoneIcon className="h-5 w-5 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                                <div>
                                    <p className="text-gray-400">Телефон</p>
                                    <p className="font-medium">+7 (999) 123-45-67</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <EnvelopeIcon className="h-5 w-5 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                                <div>
                                    <p className="text-gray-400">Email</p>
                                    <p className="font-medium">info@studygate.ru</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <MapPinIcon className="h-5 w-5 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                                <div>
                                    <p className="text-gray-400">Адрес</p>
                                    <p className="font-medium">г. Москва, ул. Образования, д. 1</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Рассылка */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-white">Новостная рассылка</h3>
                        <p className="text-gray-400 mb-4">
                            Подпишитесь, чтобы получать информацию о новых учебных заведениях и акциях.
                        </p>
                        <div className="flex">
                            <input
                                type="email"
                                placeholder="Ваш email"
                                className="flex-grow px-4 py-2 bg-gray-800 text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button
                                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-lg transition-colors duration-300 font-medium"
                            >
                                Подписаться
                            </button>
                        </div>
                    </div>
                </div>

                {/* Нижняя часть */}
                <div className="pt-8 border-t border-gray-800">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-4 md:mb-0">
                            <p className="text-gray-500 text-sm">
                                © {currentYear} StudyGate. Все права защищены.
                            </p>
                        </div>

                        <div className="flex space-x-6">
                            <Link
                                href="/privacy"
                                className="text-gray-500 hover:text-white text-sm transition-colors duration-300"
                            >
                                Политика конфиденциальности
                            </Link>
                            <Link
                                href="/terms"
                                className="text-gray-500 hover:text-white text-sm transition-colors duration-300"
                            >
                                Условия использования
                            </Link>
                            <Link
                                href="/sitemap"
                                className="text-gray-500 hover:text-white text-sm transition-colors duration-300"
                            >
                                Карта сайта
                            </Link>
                        </div>
                    </div>

                    <div className="mt-4 text-center md:text-left">
                        <p className="text-gray-600 text-xs">
                            StudyGate — платформа для поиска учебных заведений по всему миру.
                            Мы не являемся официальными представителями учебных заведений.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
