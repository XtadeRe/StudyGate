import DefaultLayout from '@/layouts/DefaultLayouts';
import { PageProps } from '@inertiajs/core';
import { ClockIcon, PhoneIcon, UserIcon, CurrencyDollarIcon, CalendarIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

interface Bid {
    id: number,
    user_id: number,
    institution_id: number,
    name: string,
    phone: string,
    tg_username: string,
    buy_method: string,
    files: FileInfo[] | null,
    created_at: string,
    status?: 'pending' | 'approved' | 'rejected' | 'completed' | 'cancelled',
    institution?: Institution;
}

interface Props extends PageProps {
    bids: Bid[]
}

const Manager = ({bids}: Props) => {
    const getStatusColor = (status?: string) => {
        switch(status) {
            case 'pending': return 'bg-yellow-100 text-yellow-800';
            case 'approved': return 'bg-green-100 text-green-800';
            case 'rejected': return 'bg-red-100 text-red-800';
            case 'completed': return 'bg-blue-100 text-blue-800';
            case 'cancelled': return 'bg-gray-100 text-gray-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    const getStatusText = (status?: string) => {
        switch(status) {
            case 'pending': return 'В ожидании';
            case 'approved': return 'Одобрено';
            case 'rejected': return 'Отклонено';
            case 'completed': return 'Завершено';
            case 'cancelled': return 'Отменено';
            default: return 'Не указан';
        }
    };

    return (
        <DefaultLayout>
            <div className="profile-container">
                <div className="profile-content">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                        <div className="stat-item">
                            <div className="stat-label">Всего заявок</div>
                            <div className="stat-value">{bids.length}</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-label">В ожидании</div>
                            <div className="stat-value text-yellow-600">
                                {bids.filter(b => b.status === 'pending').length}
                            </div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-label">Одобрено</div>
                            <div className="stat-value text-green-600">
                                {bids.filter(b => b.status === 'approved').length}
                            </div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-label">Завершено</div>
                            <div className="stat-value text-blue-600">
                                {bids.filter(b => b.status === 'completed').length}
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4">
                        {bids.length > 0 ? (
                            bids.map((bid) => (
                                <div key={bid.id} className="profile-card hover:shadow-2xl transition-shadow duration-300">
                                    <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                                        <div className="flex-1">
                                            <div className="flex items-start justify-between mb-4">
                                                <div>
                                                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                                                        Заявка #{bid.id}
                                                    </h2>
                                                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(bid.status)}`}>
                                                        {getStatusText(bid.status)}
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="space-y-3">
                                                    <div className="flex items-center gap-3">
                                                        <UserIcon className="w-5 h-5 text-gray-400" />
                                                        <div>
                                                            <p className="text-sm text-gray-500">Имя клиента</p>
                                                            <p className="text-base font-semibold text-gray-900">{bid.name}</p>
                                                        </div>
                                                    </div>

                                                    <div className="flex items-center gap-3">
                                                        <PhoneIcon className="w-5 h-5 text-gray-400" />
                                                        <div>
                                                            <p className="text-sm text-gray-500">Телефон</p>
                                                            <p className="text-base font-semibold text-gray-900">{bid.phone}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="space-y-3">
                                                    <div className="flex items-center gap-3">
                                                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                        </svg>
                                                        <div>
                                                            <p className="text-sm text-gray-500">Telegram</p>
                                                            <p className="text-base font-semibold text-gray-900">{bid.tg_username}</p>
                                                        </div>
                                                    </div>

                                                    <div className="flex items-center gap-3">
                                                        <CurrencyDollarIcon className="w-5 h-5 text-gray-400" />
                                                        <div>
                                                            <p className="text-sm text-gray-500">Метод оплаты</p>
                                                            <p className="text-base font-semibold text-gray-900">{bid.buy_method}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {bid.institution && (
                                                <div className="mt-4 pt-4 border-t border-gray-100">
                                                    <p className="text-sm text-gray-500 mb-1">Учебное заведение</p>
                                                    <p className="text-base font-semibold text-gray-900">{bid.institution.name}</p>
                                                </div>
                                            )}
                                        </div>

                                        <div className="lg:w-64 flex flex-col items-end">
                                            <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                                                <CalendarIcon className="w-4 h-4" />
                                                <span>{new Date(bid.created_at).toLocaleDateString('ru-RU', {
                                                    day: 'numeric',
                                                    month: 'long',
                                                    year: 'numeric',
                                                    hour: '2-digit',
                                                    minute: '2-digit'
                                                })}</span>
                                            </div>

                                            <div className="flex flex-col gap-2 w-full">
                                                <button className="action-button action-primary w-full text-center">
                                                    Просмотреть детали
                                                </button>
                                                <button className="action-button action-secondary w-full text-center">
                                                    Изменить статус
                                                </button>
                                            </div>

                                            {bid.files && bid.files.length > 0 && (
                                                <div className="mt-4 w-full">
                                                    <p className="text-sm text-gray-500 mb-2 flex items-center gap-1">
                                                        <DocumentTextIcon className="w-4 h-4" />
                                                        Файлы: {bid.files.length}
                                                    </p>
                                                    <div className="flex flex-wrap gap-2">
                                                        {bid.files.slice(0, 3).map((file, index) => (
                                                            <span key={index} className="text-xs bg-gray-100 px-2 py-1 rounded">
                                                                📎 Файл {index + 1}
                                                            </span>
                                                        ))}
                                                        {bid.files.length > 3 && (
                                                            <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                                                                +{bid.files.length - 3}
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="profile-card text-center py-16">
                                <div className="avatar-placeholder mx-auto mb-4">
                                    <DocumentTextIcon className="w-12 h-12 text-gray-400" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Нет заявок</h3>
                                <p className="text-gray-600">На данный момент заявки отсутствуют</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
}

export default Manager;
