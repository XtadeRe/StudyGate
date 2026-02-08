import DefaultLayout from '@/layouts/DefaultLayouts';
import "../../../css/MyBids.css";
import {
    DocumentTextIcon,
    UserIcon,
    BuildingOfficeIcon,
    MapPinIcon,
    StarIcon,
    CalendarIcon,
    PencilIcon,
    TrashIcon,
    CheckCircleIcon,
    XCircleIcon,
    ClockIcon,
    FolderIcon
} from '@heroicons/react/24/outline';
import { FormEvent, useState } from 'react';
import { Link, router } from '@inertiajs/react';

interface Bid {
    id: number,
    user_id: number,
    institution_id: number,
    name: string,
    phone: string,
    tg_username: string,
    buy_method: string,
    created_at: string,
    status?: 'pending' | 'approved' | 'rejected' | 'completed' | 'cancelled',
    institution?: Institution;
}

interface Institution {
    id: number,
    name: string,
    description: string,
    country: string,
    city: string,
    type: string,
    image_url: string,
    rating: number,
    featured: number,
    programs: string,
    price_from: number,
    price_to: number,
    currency: string,
    views: number,
}

type Props = {
    bids: Array<Bid>;
}

const MyBids = ({ bids }: Props) => {
    const [processing, setProcessing] = useState<number | null>(null);
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('ru-RU', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    const getStatusStyles = (status: string = 'pending') => {
        switch (status) {
            case 'approved':
                return 'bg-green-100 text-green-800 border-green-300';
            case 'rejected':
                return 'bg-red-100 text-red-800 border-red-300';
            case 'completed':
                return 'bg-blue-100 text-blue-800 border-blue-300';
            case 'cancelled':
                return 'bg-gray-100 text-gray-800 border-gray-300';
            default:
                return 'bg-yellow-100 text-yellow-800 border-yellow-300';
        }
    };

    const getStatusText = (status: string = 'pending') => {
        switch (status) {
            case 'approved':
                return 'Одобрена';
            case 'rejected':
                return 'Отклонена';
            case 'completed':
                return 'Завершена';
            case 'cancelled':
                return 'Отменена';
            default:
                return 'На рассмотрении';
        }
    };

    const getStatusIcon = (status: string = 'pending') => {
        const iconClass = "w-4 h-4 mr-1";
        switch (status) {
            case 'approved':
                return <CheckCircleIcon className={`${iconClass} text-green-600`} />;
            case 'rejected':
                return <XCircleIcon className={`${iconClass} text-red-600`} />;
            case 'completed':
                return <CheckCircleIcon className={`${iconClass} text-blue-600`} />;
            case 'cancelled':
                return <XCircleIcon className={`${iconClass} text-gray-600`} />;
            default:
                return <ClockIcon className={`${iconClass} text-yellow-600`} />;
        }
    };


    const handleCancel = (bidId: number) => {
        if (!confirm('Вы уверены, что хотите отменить эту заявку?')) {
            return;
        }

        setProcessing(bidId);

        router.put(`/profile/bids/${bidId}`, {
            status: 'cancelled'
        }, {
            onSuccess() {
                setProcessing(null);
            },
            onError: (errors) => {
                setProcessing(null);
                alert('Ошибка при отмене заявки');
                console.error(errors);
            },
            preserveScroll: true
        })
    };

    return (
        <DefaultLayout>
            <div className="profile-container">
                <div className="profile-content">
                    <div className="mb-8">
                        <h2 className="user-bids-title">Ваши заявки</h2>
                        <p className="text-gray-600 text-sm mt-2">
                            Здесь вы можете отслеживать статус своих заявок и управлять ими
                        </p>
                    </div>

                    {bids.length === 0 ? (
                        <div className="text-center py-12">
                            <div className="text-gray-400 mb-4">
                                <FolderIcon className="w-16 h-16 mx-auto" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-700 mb-2">Заявок пока нет</h3>
                            <p className="text-gray-500">Создайте свою первую заявку на обучение</p>
                        </div>
                    ) : (
                        <div className="space-y-6">
                            {bids.map((bid) => (
                                <div key={bid.id} className="bid-card">
                                    <div className="bid-card-image-container">
                                        <img
                                            src={bid.institution?.image_url || '/default-institution.jpg'}
                                            alt={bid.institution?.name}
                                            className="bid-card-image"
                                        />
                                        <div className="bid-card-rating">
                                            <span className="flex items-center">
                                                <StarIcon className="w-4 h-4 text-yellow-400 mr-1" />
                                                {bid.institution?.rating || 'Н/Д'}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="bid-card-content">
                                        <div className="flex justify-between items-start mb-4">
                                            <div>
                                                <h3 className="bid-card-institution-name">
                                                    {bid.institution?.name || 'Учебное заведение'}
                                                </h3>
                                                <div className="flex items-center text-gray-600 text-sm mt-1">
                                                    <MapPinIcon className="w-4 h-4 mr-1" />
                                                    <span>{bid.institution?.city}, {bid.institution?.country}</span>
                                                </div>
                                            </div>
                                            <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusStyles(bid.status)} flex items-center`}>
                                                {getStatusIcon(bid.status)}
                                                {getStatusText(bid.status)}
                                            </span>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="bid-card-section">
                                                <h4 className="bid-card-section-title">
                                                    <BuildingOfficeIcon className="w-4 h-4 inline mr-2" />
                                                    Информация о месте
                                                </h4>
                                                <div className="space-y-2">
                                                    <div className="bid-card-info-item">
                                                        <span className="bid-card-info-label">Тип:</span>
                                                        <span className="bid-card-info-value">{bid.institution?.type || 'Не указано'}</span>
                                                    </div>
                                                    <div className="bid-card-info-item">
                                                        <span className="bid-card-info-label">Программы:</span>
                                                        <span className="bid-card-info-value">{bid.institution?.programs || 'Не указано'}</span>
                                                    </div>
                                                    <div className="bid-card-info-item">
                                                        <span className="bid-card-info-label">Стоимость:</span>
                                                        <span className="bid-card-info-value">
                                                            {bid.institution?.price_from ?
                                                                `${bid.institution.price_from} - ${bid.institution.price_to} ${bid.institution.currency}` :
                                                                'По запросу'}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="bid-card-section">
                                                <h4 className="bid-card-section-title">
                                                    <UserIcon className="w-4 h-4 inline mr-2" />
                                                    Ваши данные
                                                </h4>
                                                <div className="space-y-2">
                                                    <div className="bid-card-info-item">
                                                        <span className="bid-card-info-label">Имя:</span>
                                                        <span className="bid-card-info-value">{bid.name}</span>
                                                    </div>
                                                    <div className="bid-card-info-item">
                                                        <span className="bid-card-info-label">Телефон:</span>
                                                        <span className="bid-card-info-value">{bid.phone}</span>
                                                    </div>
                                                    <div className="bid-card-info-item">
                                                        <span className="bid-card-info-label">Telegram:</span>
                                                        <span className="bid-card-info-value">{bid.tg_username}</span>
                                                    </div>
                                                    <div className="bid-card-info-item">
                                                        <span className="bid-card-info-label">Метод оплаты:</span>
                                                        <span className="bid-card-info-value">{bid.buy_method}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-6 pt-6 border-t border-gray-100">
                                            <div className="flex justify-between items-center">
                                                <div className="text-sm text-gray-500">
                                                    <span className="flex items-center">
                                                        <CalendarIcon className="w-4 h-4 mr-1" />
                                                        Дата заявки: {formatDate(bid.created_at)}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {bid.status !== 'cancelled' && (
                                    <div className="bid-card-actions">
                                        <Link href={`/profile/bids/fillBid/${bid.id}`}>
                                            <button className="bid-card-action-primary">
                                                <PencilIcon className="w-4 h-4 mr-2" />
                                                Заполнить данные
                                            </button>
                                        </Link>
                                            <button
                                                onClick={() => handleCancel(bid.id)}
                                                disabled={processing === bid.id}
                                                className="bid-card-action-secondary flex items-center justify-center"
                                            >
                                                {processing === bid.id ? (
                                                    <>
                                                        <svg className="animate-spin w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24">
                                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                                        </svg>
                                                        Отмена...
                                                    </>
                                                ) : (
                                                    <>
                                                        <TrashIcon className="w-4 h-4 mr-2" />
                                                        Отменить заявку
                                                    </>
                                                )}
                                            </button>
                                    </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </DefaultLayout>
    );
};

export default MyBids;
