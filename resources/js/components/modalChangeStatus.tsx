import { router } from '@inertiajs/react';
import { useState } from 'react';

interface StatusModalProps {
    bid: {
        id: number;
        name?: string;
        status?: string;
    } | null;
    onClose: () => void;
}

export default function StatusModal({ bid, onClose }: StatusModalProps) {
    const changeStatus = (status: string) => {
        router.patch(
            `/profile/manager_menu/${bid.id}/status`,
            {
                status: status,
            },
            {
                onSuccess: () => {
                    setStage(0);
                    onClose();
                },
            },
        );
    };

    const [stage, setStage] = useState(0);

    const handleRejectClick = () => {
        if (stage === 1) {
            changeStatus('rejected');
        } else {
            setStage(1);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-none">
            <div className="mx-4 w-full max-w-md gap-5 rounded-2xl bg-white p-8 not-italic shadow-2xl">
                <h2 className="mb-6 text-2xl font-bold text-gray-900">Изменить статус заявки #{bid.id}</h2>
                <div className="flex flex-col space-y-4">
                    <button onClick={() => changeStatus('approved')} className="cursor-pointer rounded-xl border p-2">
                        Одобрить
                    </button>
                    <button onClick={() => changeStatus('pending')} className="cursor-pointer rounded-xl border p-2">
                        В ожидании
                    </button>
                    <button
                        onClick={handleRejectClick}
                        className={`cursor-pointer rounded-xl border p-2 ${stage === 1 ? 'border-red-500 bg-red-100 text-red-500' : ''}`}
                    >
                        {stage === 1 ? 'Вы уверены?' : 'Отклонить'}
                    </button>
                </div>
                <button onClick={onClose} className="mt-4 w-full cursor-pointer rounded-xl border p-2 text-gray-500 hover:bg-gray-50">
                    Закрыть
                </button>
            </div>
        </div>
    );
}
