import DefaultLayout from '@/layouts/DefaultLayouts';
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
        
    </DefaultLayout>
    )
}

export default FillBid;
