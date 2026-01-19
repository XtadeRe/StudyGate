import "../../css/InstitutionPage.css";
import { useState } from 'react';
import DefaultLayout from '../layouts/DefaultLayouts'
import ModalForInstitutionPage from '../components/modalForInstitutionPage';

interface Institution {
    name: string;
    image_url: string;
    city: string;
    country: string;
    featured: boolean;
    description: string;
    type: string;
    rating?: number;
    views: number;
    price_from?: number;
    price_to?: number;
    currency?: string;
    programs: string[];
}
interface Props {
    institution: Institution;
}
const InstitutionPage = ({ institution }: Props) => {

    const [modal, setModal] = useState<boolean>(false)

    const openModal = () => {
        setModal(true)
    }

    const closeModal = () => {
        setModal(false)
    }


    return (
        <DefaultLayout>
            <div className="institution-container">
                <div className="institution-content">
                    <div className="institution-grid">
                        <div className="lg:col-span-1">
                            <div className="institution-sidebar">
                                <div className="institution-photo-card mb-8">
                                    <img
                                        src={institution.image_url}
                                        alt={institution.name}
                                        className="institution-photo"
                                    />
                                    <div className="p-6">
                                        <div className="flex">
                                            <div>
                                                <div className="info-label">Местоположение</div>
                                                <div className="info-value">{institution.city}, {institution.country}</div>
                                            </div>
                                            {institution.featured && (
                                                <span className="featured-badge ">
                                                    Рекомендуем
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-2">
                            <div className="institution-info-card">
                                <h1 className="institution-title">{institution.name}</h1>
                                <div className="institution-location">
                                    <span>{institution.city}</span>
                                    <span>•</span>
                                    <span>{institution.country}</span>
                                </div>
                                <p className="institution-description">{institution.description}</p>

                                <div className="institution-stats-grid">
                                    <div className="stat-card">
                                        <div className="stat-label">Вид заведения</div>
                                        <div className="stat-value">{institution.type}</div>
                                    </div>
                                    <div className="stat-card">
                                        <div className="stat-label">Рейтинг</div>
                                        <div className="stat-value">{institution.rating || "—"}</div>
                                    </div>
                                    <div className="stat-card">
                                        <div className="stat-label">Просмотров</div>
                                        <div className="stat-value">{institution.views}</div>
                                    </div>
                                </div>

                                <div className="price-section">
                                    <h2 className="price-title">Стоимость обучения</h2>
                                    <div className="price-card">
                                        <div className="price-amount">
                                            {institution.price_from ? `${institution.price_from}` : "—"}
                                            {institution.price_to && ` – ${institution.price_to}`}
                                            {institution.currency && ` ${institution.currency}`}
                                        </div>
                                        <div className="price-period">в год</div>
                                    </div>
                                </div>

                                <div className="programs-section">
                                    <h2 className="programs-title">Направления обучения</h2>
                                    <div className="programs-container">
                                        {institution.programs?.map((program, index) => (
                                            <span key={index} className="program-tag">
                                                {program}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <button onClick={openModal} className="apply-button cursor-pointer">
                                    Начать подачу
                                </button>

                            </div>
                        </div>

                    </div>
                </div>
                {modal && <ModalForInstitutionPage onClose={closeModal} />}

            </div>
        </DefaultLayout>
    );
};

export default InstitutionPage;
