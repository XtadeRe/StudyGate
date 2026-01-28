import { ArrowsPointingInIcon, XMarkIcon, FaceSmileIcon, FaceFrownIcon } from '@heroicons/react/16/solid';
import { useState, FormEvent } from 'react';
import { router, usePage, Link } from '@inertiajs/react';
interface User {
    id: number;
}

interface ModalProps {
    onClose: () => void;
    initialData?: {
        institution_id: number;
        institution_name: string;
    };
}

const ModalForInstitutionPage = ({ onClose, initialData }: ModalProps) => {

    const { auth } = usePage().props;
    const user = auth.user as User | null;
    const [step, setStep] = useState(0);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        tg_username: '',
        buy_method: ''
    });
    const [loading, setLoading] = useState(false);

    if (!user) {
        return (
            <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
                onClick={onClose}
            >
                <div
                    className="w-full max-w-md rounded-lg bg-white p-6"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-xl font-bold">Требуется авторизация</h2>
                        <XMarkIcon
                            onClick={onClose}
                            className="w-8 cursor-pointer text-gray-300 hover:text-gray-400"
                        />
                    </div>

                    <div className="text-center py-8 flex items-center flex-col gap-4">
                        <FaceFrownIcon className="text-gray-200 w-36" />
                        <p className="mb-4">Для оформления заявки необходимо авторизоваться</p>
                        <Link
                            href="/login"
                            className="inline-block w-full rounded-2xl py-2 px-5 text-white bg-blue-500 hover:bg-blue-600"
                        >
                            Войти
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);



        router.post(`/catalog/${initialData.institution_id}/bids`, {
            ...formData,
            user_id: user.id,
        }, {
            onSuccess: () => {
                setStep(3);
            },
            onError: (errors) => {
                alert('Ошибка при отправке заявки');
                console.error(errors);
            },
            onFinish: () => setLoading(false),
            preserveScroll: true,
        });
    };

    const formatPhone = (value: string) => {
        const digits = value.replace(/\D/g, '');


        if (!digits) return '';

        const limitedDigits = digits.substring(0, 11);

        let formatted = '';
        if (limitedDigits.length > 0) {
            formatted = '+7';
        }
        if (limitedDigits.length > 1) {
            formatted += ` (${limitedDigits.substring(1, 4)}`;
        }
        if (limitedDigits.length > 4) {
            formatted += `) ${limitedDigits.substring(4, 7)}`;
        }
        if (limitedDigits.length > 7) {
            formatted += `-${limitedDigits.substring(7, 9)}`;
        }
        if (limitedDigits.length > 9) {
            formatted += `-${limitedDigits.substring(9, 11)}`;
        }
        return formatted;
    };

    const formatTelegram = (value: string)=> {

        let cleaned = value.replace(/^@+/, '');
        cleaned = cleaned.substring(0, 35);
        cleaned = cleaned.replace(/\s/g, '');
        return cleaned ? `@${cleaned}` : '';
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        if (name === 'phone') {
            setFormData(prev => ({...prev, [name]: formatPhone(value)}))
        } else if (name === 'tg_username') {
            setFormData(prev => ({...prev, [name]: formatTelegram(value)}))
        } else {
            setFormData(prev => ({...prev, [name]: value}))
        }
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
            onClick={onClose}
        >
            <div
                className="w-full max-w-md rounded-lg bg-white p-6"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex items-center justify-between mb-4">
                    {step < 3 ?
                        (<h2 className="text-xl font-bold">Оформление</h2>) : (
                            <h2 className="text-xl font-bold">Всё отлично!</h2>
                        )}

                    <XMarkIcon
                        onClick={onClose}
                        className="w-8 cursor-pointer text-gray-300 hover:text-gray-400"
                    />
                </div>

                {step < 2 ? (
                    <div className="flex flex-col gap-4">
                        <a
                            href="/immigration"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setStep(1)}
                            className="text-blue-500 underline text-sm"
                        >
                            Перед началом ознакомьтесь с тем как будет проходить наша работа
                            <ArrowsPointingInIcon className="ml-2 inline h-4 w-4" />
                        </a>
                        <span className="text-xs text-red-500">*Обязательно к прочтению*</span>

                        <button
                            onClick={() => setStep(2)}
                            className="rounded-2xl py-2 px-5 text-white bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300"
                            disabled={step < 1}
                        >
                            Далее
                        </button>
                    </div>
                ) : step === 2 ? (
                    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                        <div className="space-y-3">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Ваше имя
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="mt-1 w-full border rounded-md p-2"
                                    placeholder="Иван"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Номер телефона
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className="mt-1 w-full border rounded-md p-2"
                                    placeholder="+7 (999) 999-99-99"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Ваш @username в телеграмм
                                </label>
                                <input
                                    type="text"
                                    name="tg_username"
                                    value={formData.tg_username}
                                    onChange={handleInputChange}
                                    className="mt-1 w-full border rounded-md p-2"
                                    placeholder="@user"
                                    required
                                />
                                <p className="text-sm text-gray-500 mt-1">
                                    *Придет сообщение от нашего сотрудника*
                                </p>
                            </div>

                            <div>
                                <select
                                    name="buy_method"
                                    value={formData.buy_method}
                                    onChange={handleInputChange}
                                    className="w-full border rounded-md p-2"
                                    required
                                >
                                    <option value="">Способ оплаты</option>
                                    <option value="Наличными в офис">Наличными в офис</option>
                                    <option value="Картой">Картой</option>
                                </select>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 disabled:bg-blue-300"
                        >
                            {loading ? 'Отправка...' : 'Продолжить'}
                        </button>
                    </form>
                ) : (
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col items-center text-center gap-6">
                            <div className="flex flex-col items-center gap-3">
                                <FaceSmileIcon className="text-gray-200 w-36 h-36" />
                                <p className="text-xl font-semibold text-gray-800">
                                    Скоро с вами свяжется наш оператор.
                                </p>
                            </div>

                            <div className="w-full max-w-xs space-y-4">
                                <hr className="border-t border-gray-300" />

                                <div className="px-4">
                                    <span className="text-gray-700 text-sm leading-relaxed">
                                     Ваша заявка появилась уже у вас в личном кабинете!
                                    </span>
                                </div>

                                <hr className="border-t border-gray-300" />
                            </div>

                            <p className="text-gray-600 italic mt-2">
                                Подождите сообщения в Telegram пожалуйста!
                            </p>
                        </div>
                        <Link href="/profile/bids" className="rounded-2xl cursor-pointer py-3 px-10 text-white bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 transition-colors shadow-sm">
                        <button
                                className="w-full cursor-pointer"
                                disabled={step < 1}>
                                 Просмотреть заявку
                         </button>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ModalForInstitutionPage;
