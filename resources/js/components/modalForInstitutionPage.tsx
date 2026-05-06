import { ArrowsPointingInIcon, FaceFrownIcon, FaceSmileIcon, XMarkIcon } from '@heroicons/react/16/solid';
import { Link, router, usePage } from '@inertiajs/react';
import { FormEvent, useState } from 'react';
import { IMaskInput } from 'react-imask';

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
        buy_method: '',
    });
    const [loading, setLoading] = useState(false);

    if (!user) {
        return (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" onClick={onClose}>
                <div className="w-full max-w-md rounded-lg bg-white p-6" onClick={(e) => e.stopPropagation()}>
                    <div className="mb-4 flex items-center justify-between">
                        <h2 className="text-xl font-bold">Требуется авторизация</h2>
                        <XMarkIcon onClick={onClose} className="w-8 cursor-pointer text-gray-300 hover:text-gray-400" />
                    </div>

                    <div className="flex flex-col items-center gap-4 py-8 text-center">
                        <FaceFrownIcon className="w-36 text-gray-200" />
                        <p className="mb-4">Для оформления заявки необходимо авторизоваться</p>
                        <Link href="/login" className="inline-block w-full rounded-2xl bg-blue-500 px-5 py-2 text-white hover:bg-blue-600">
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

        router.post(
            `/catalog/${initialData.institution_id}/bids`,
            {
                ...formData,
                user_id: user.id,
            },
            {
                onSuccess: () => {
                    setStep(3);
                },
                onError: (errors) => {
                    alert('Ошибка при отправке заявки');
                    console.error(errors);
                },
                onFinish: () => setLoading(false),
                preserveScroll: true,
            },
        );
    };

    const formatTelegram = (value: string) => {
        let cleaned = value.replace(/^@+/, '');
        cleaned = cleaned.substring(0, 35);
        cleaned = cleaned.replace(/\s/g, '');
        return cleaned ? `@${cleaned}` : '';
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

        if (name === 'tg_username') {
            setFormData((prev) => ({ ...prev, [name]: formatTelegram(value) }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handlePhoneChange = (value: string) => {
        setFormData((prev) => ({ ...prev, phone: value }));
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" onClick={onClose}>
            <div className="w-full max-w-md rounded-lg bg-white p-6" onClick={(e) => e.stopPropagation()}>
                <div className="mb-4 flex items-center justify-between">
                    {step < 3 ? <h2 className="text-xl font-bold">Оформление</h2> : <h2 className="text-xl font-bold">Всё отлично!</h2>}

                    <XMarkIcon onClick={onClose} className="w-8 cursor-pointer text-gray-300 hover:text-gray-400" />
                </div>

                {step < 2 ? (
                    <div className="flex flex-col gap-4">
                        <a
                            href="/immigration"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setStep(1)}
                            className="text-sm text-blue-500 underline"
                        >
                            Перед началом ознакомьтесь с тем как будет проходить наша работа
                            <ArrowsPointingInIcon className="ml-2 inline h-4 w-4" />
                        </a>
                        <span className="text-xs text-red-500">*Обязательно к прочтению*</span>

                        <button
                            onClick={() => setStep(2)}
                            className="rounded-2xl bg-blue-500 px-5 py-2 text-white hover:bg-blue-600 disabled:bg-blue-300"
                            disabled={step < 1}
                        >
                            Далее
                        </button>
                    </div>
                ) : step === 2 ? (
                    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                        <div className="space-y-3">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Как вас зовут?</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="mt-1 w-full rounded-md border p-2"
                                    placeholder="Иван Иванович"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Номер телефона</label>
                                <IMaskInput
                                    mask="+7 (000) 000-00-00"
                                    value={formData.phone}
                                    onAccept={handlePhoneChange}
                                    className="mt-1 w-full rounded-md border p-2"
                                    placeholder="+7 (999) 999-99-99"
                                    required
                                    type="tel"
                                    name="phone"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Ваш @username в телеграмм</label>
                                <input
                                    type="text"
                                    name="tg_username"
                                    value={formData.tg_username}
                                    onChange={handleInputChange}
                                    className="mt-1 w-full rounded-md border p-2"
                                    placeholder="@user"
                                    required
                                />
                                <p className="mt-1 text-sm text-gray-500">*Придет сообщение от нашего сотрудника*</p>
                            </div>

                            <div>
                                <select
                                    name="buy_method"
                                    value={formData.buy_method}
                                    onChange={handleInputChange}
                                    className="w-full rounded-md border p-2"
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
                            className="rounded-xl bg-blue-600 py-2 text-white hover:bg-blue-700 disabled:bg-blue-300"
                        >
                            {loading ? 'Отправка...' : 'Продолжить'}
                        </button>
                    </form>
                ) : (
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col items-center gap-6 text-center">
                            <div className="flex flex-col items-center gap-3">
                                <FaceSmileIcon className="h-36 w-36 text-gray-200" />
                                <p className="text-xl font-semibold text-gray-800">Скоро с вами свяжется наш оператор.</p>
                            </div>

                            <div className="w-full max-w-xs space-y-4">
                                <hr className="border-t border-gray-300" />

                                <div className="px-4">
                                    <span className="text-sm leading-relaxed text-gray-700">Ваша заявка появилась уже у вас в личном кабинете!</span>
                                </div>

                                <hr className="border-t border-gray-300" />
                            </div>

                            <p className="mt-2 text-gray-600 italic">Подождите сообщения в Telegram пожалуйста!</p>
                        </div>
                        <Link
                            href="/profile/bids"
                            className="cursor-pointer rounded-2xl bg-blue-500 px-10 py-3 text-white shadow-sm transition-colors hover:bg-blue-600 disabled:bg-blue-300"
                        >
                            <button className="w-full cursor-pointer" disabled={step < 1}>
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
