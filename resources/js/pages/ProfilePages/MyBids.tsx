import DefaultLayout from '@/layouts/DefaultLayouts';
import "../../../css/Profile.css";
interface Bid {
    id: number,
    user_id: number,
    institution_id: number,
    name: string,
    phone: string,
    tg_username: string,
    buy_method: string,
    created_at: string
}

type Props = {
    bids: Array<Bid>;
}
const MyBids = ({bids}: Props) => {

    return (
        <DefaultLayout>
            <div className="profile-container">
                <div className="profile-content">
                    {bids.map((bid) => (
                        <div>{bid.name}</div>
                        ))}
                </div>
            </div>
        </DefaultLayout>
    );
};

export default MyBids;
