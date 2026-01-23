import { ArrowsPointingInIcon, XMarkIcon } from '@heroicons/react/16/solid';
import { useState, FC, MouseEvent, FormEvent } from 'react';
import { router, usePage } from '@inertiajs/react';

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

interface Props {
    onClose: () => void;
}

interface ModalProps {
    onClose: () => void;
    initialData?: {
        institution_id: number;
        institution_name: string;
    };
}

const ModalForInstitutionPage: FC<Props> = ({ onClose, initialData }: ModalProps) => {
    const { auth } = usePage<PageProps>().props;
    const { user } = auth;
    const [step, setStep] = useState<number>(0);
    const [formData, setFormData] = useState({
        user_id: '',
        university_id: '',
        name: '',
        phone: '',
        tg_username: '',
        buy_method: ''
    })
    const [loading, setLoading] = useState(false);
    const handleModalClick = (e: MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>)=> {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);

        router.post(`/catalog/${initialData?.institution_id}/bids`, {
            ...formData,
            institution_id: initialData?.institution_id,
            user_id: user?.id
        }, {
            onSuccess: () => {
                alert('Заявка успешно отправлена!');
                onClose();
                setLoading(false);
            },
            onError: (errors) => {
                alert('Ошибка при отправке заявки');
                console.error(errors);
                setLoading(false);
            },
            preserveScroll: true,
        });
    };

    return (
        <div onClick={onClose} className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div onClick={handleModalClick} className="w-full max-w-md rounded-lg bg-white p-6">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-bold">Оформление</h2>
                    <XMarkIcon
                        onClick={onClose}
                        className="w-8 cursor-pointer text-gray-300 transition-colors hover:text-gray-400"
                    />
                </div>

                {step < 2 && (
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
                            disabled={step < 1}
                            onClick={() => setStep(2)}
                            className="rounded-2xl py-2 px-5 text-white transition-colors disabled:bg-blue-300 enabled:bg-blue-500"
                        >
                            Далее
                        </button>
                    </div>
                )}

                {step === 2 && (

                    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Ваше имя</label>
                            <input
                                type="text"
                                name="name"
                                onChange={handleInputChange}
                                className="mt-1 w-full border rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Иван"
                            />
                            <label className="block text-sm font-medium text-gray-700">Номер телефона</label>
                            <input
                                type="tel"
                                name="phone"
                                onChange={handleInputChange}
                                className="mt-1 w-full border rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="+7 (999) 999-99-99"
                            />
                            <label className="block text-sm font-medium text-gray-700">Ваш @username в телеграмм</label>
                            <input
                                type="text"
                                name="tg_username"
                                onChange={handleInputChange}
                                className="mt-1 w-full border rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="@user"
                            />
                            *Придет сообщение от нашего сотрудника*
                            <select name="buy_method" onChange={handleInputChange} className="border rounded-md border-black mt-2 w-full p-2">
                                <option defaultValue="Не выбрано">Способ оплаты</option>
                                <option>Наличными в офис</option>
                                <option>Картой</option>
                            </select>
                        </div>
                        <button type="submit" disabled={loading} className="bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700">
                            {loading ? 'Отправка...' : 'Продолжить'}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default ModalForInstitutionPage;
