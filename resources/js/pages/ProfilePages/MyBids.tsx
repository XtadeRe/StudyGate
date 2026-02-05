import DefaultLayout from '@/layouts/DefaultLayouts';
import "../../../css/MyBids.css";
interface Bid {
    id: number,
    user_id: number,
    institution_id: number,
    name: string,
    phone: string,
    tg_username: string,
    buy_method: string,
    created_at: string
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
    return (
        <DefaultLayout>
            <div className="profile-container">
                <div className="profile-content">
                    <h2 className="user-bids-title">Ваши заявки</h2>
                    {bids.map((bid) => (
                        <div key={bid.id} className="bid-cart">
                            <img src={bid.institution?.image_url} alt="" className="bid-cart-photo" />
                            <div className="bid-cart-content">
                                <div>
                                    <h3>О месте:</h3>
                                    <p>Название: {bid.institution?.name}</p>
                                    <p>Страна: {bid.institution?.country}</p>
                                    <p>Город: {bid.institution?.city}</p>
                                    <p>Тип: {bid.institution?.type}</p>
                                    <p>Рейтинг: {bid.institution?.rating}</p>
                                    <p>Цена: {bid.institution?.price_from} - {bid.institution?.price_to} {bid.institution?.currency}</p>
                                </div>
                                <div>
                                    <h3>О вас:</h3>
                                <p>Ваше имя: {bid.name}</p>
                                <p>Указанный телефон: {bid.phone}</p>
                                <p>Указанный username: {bid.tg_username}</p>
                                <p>Метод оплаты: {bid.buy_method}</p>
                                <p>Дата заявки: {bid.created_at}</p>
                                </div>
                                </div>
                            <div className="bid-cart-buttons">
                                <button className="bid-cart-button-1">Заполнить данные</button>
                                <button className="bid-cart-button-2">Отменить заявку</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </DefaultLayout>
    );
};

export default MyBids;
