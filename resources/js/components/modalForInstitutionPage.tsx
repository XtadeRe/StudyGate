import { ArrowsPointingInIcon, XMarkIcon } from '@heroicons/react/16/solid';
import { useState, FC, MouseEvent } from 'react';

interface Props {
    onClose: () => void;
}

const ModalForInstitutionPage: FC<Props> = ({ onClose }) => {
    const [step, setStep] = useState<number>(0);

    const handleModalClick = (e: MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
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

                    <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Ваше имя</label>
                            <input
                                type="text"
                                className="mt-1 w-full border rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Иван"
                            />
                            <label className="block text-sm font-medium text-gray-700">Номер телефона</label>
                            <input
                                type="text"
                                className="mt-1 w-full border rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="+7 (999) 999-99-99"
                            />
                            <label className="block text-sm font-medium text-gray-700">Ваш @username в телеграмм</label>
                            <input
                                type="text"
                                className="mt-1 w-full border rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="@user"
                            />
                            *Придет сообщение от нашего сотрудника*
                            <select className="border rounded-md border-black mt-2 w-full p-2">
                                <option defaultValue="Не выбрано">Способ оплаты</option>
                                <option>Наличными в офис</option>
                                <option>Картой</option>
                            </select>
                        </div>
                        <button className="bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700">
                            Продолжить
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default ModalForInstitutionPage;
