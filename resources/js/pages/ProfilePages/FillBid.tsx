import DefaultLayout from '@/layouts/DefaultLayouts';
import "../../../css/FillBid.css";
import { PageProps } from '@inertiajs/core';

interface User {
    id: number;
    avatar: string;
    login: string;
    email: string;
    phone: string;
    password: string;
    created_at?: string;
    updated_at?: string;
}
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
interface Props extends PageProps {
    user: User;
    bid: Bid;
}

const FillBid = ({user, bid}: Props) => {
    return (
        <DefaultLayout>
            <div className="FillBid-container">
                <div className="FillBid-content">
                    <h1 className="text-2xl font-bold mb-6">Заполнение заявки</h1>

                    <form className="bid-info-form max-w-2xl mx-auto">
                        <div className="w-full mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Имя
                            </label>
                            <input
                                className="FillBid-input w-full px-3 py-2 border-2 border-black rounded-lg focus:outline-none focus:border-blue-500"
                                defaultValue={bid.name}
                                placeholder="Введите ваше имя"
                            />
                        </div>

                        <div className="w-full mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Телефон
                            </label>
                            <input
                                className="FillBid-input w-full px-3 py-2 border-2 border-black rounded-lg focus:outline-none focus:border-blue-500"
                                defaultValue={bid.phone}
                                placeholder="Введите номер телефона"
                            />
                        </div>

                        <div className="w-full mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Telegram username
                            </label>
                            <input
                                className="FillBid-input w-full px-3 py-2 border-2 border-black rounded-lg focus:outline-none focus:border-blue-500"
                                defaultValue={bid.tg_username}
                                placeholder="@username"
                            />
                        </div>

                        <div className="w-full mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Способ покупки
                            </label>
                            <select className="FillBid-input w-full px-3 py-2 border-2 border-black rounded-lg focus:outline-none focus:border-blue-500"></select>
                        </div>

                        <div className="user-documents">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Приложите сюда свои документы
                            </label>
                            <input
                                className="FillBid-input w-full px-3 py-2 border-2 border-black rounded-lg focus:outline-none focus:border-blue-500"
                                defaultValue={bid.buy_method}
                                type="file"
                            />
                        </div>

                        {bid.institution && (
                            <div className="w-full mb-6 p-4 bg-gray-100 rounded-lg">
                                <h3 className="font-bold text-lg mb-2">Информация об учебном заведении</h3>
                                <p className="text-gray-700"><span className="font-medium">Название:</span> {bid.institution.name}</p>
                                <p className="text-gray-700"><span className="font-medium">Город:</span> {bid.institution.city}, {bid.institution.country}</p>
                                <p className="text-gray-700"><span className="font-medium">Стоимость от:</span> {bid.institution.price_from} {bid.institution.currency}</p>
                            </div>
                        )}

                        <div className="w-full flex gap-4 mt-6">
                            <button
                                type="submit"
                                className="flex-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300"
                            >
                                Отправить заявку
                            </button>
                            <button
                                type="button"
                                className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-4 rounded-lg transition duration-300"
                            >
                                Отмена
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </DefaultLayout>
    )
}

export default FillBid;
