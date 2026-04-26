import React from 'react';
import { usePage, Link } from '@inertiajs/react';
import DefaultLayout from '@/layouts/DefaultLayouts';
import "../../css/catalog.css";

const Catalog = () => {
    const { institutions } = usePage().props;

    return (
        <DefaultLayout>
            <div className="catalog-container">
                <div>
                    <h1 className="catalog-title">Учебные заведения</h1>
                    <p className="catalog-subtitle">Найдите подходящее учебное заведение по всему миру</p>

                    <div className="text-gray-600 mb-6">
                        Всего учебных заведений: {institutions.length}
                    </div>
                </div>

                <div className="catalog-grid">
                    {institutions.map((institution) => (
                        <div key={institution.id} className="institution-card flex flex-col h-full">
                            {/* Изображение остается сверху */}
                            <div className="card-image-container">
                                <img
                                    src={institution.image_url || 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'}
                                    alt={institution.name}
                                    className="card-image"
                                />
                                {institution.featured && (
                                    <div className="featured-badge">
                                        Рекомендуем
                                    </div>
                                )}
                                <div className="rating-badge">
                                    {institution.rating} ★
                                </div>
                            </div>

                            {/* Контент карточки с flex-растяжением */}
                            <div className="card-content flex flex-col flex-grow">
                                <h3 className="card-title">{institution.name}</h3>

                                <div className="location-container">
            <span className="location-text">
                {institution.city}, {institution.country}
            </span>
                                </div>

                                {/* Фиксированная высота для контейнера программ */}
                                <div className="programs-container min-h-[3.5rem] mb-4">
            <span className="type-badge">
                {institution.type}
            </span>
                                    {institution.programs && institution.programs.slice(0, 2).map((program, index) => (
                                        <span key={index} className="program-badge">
                    {program}
                </span>
                                    ))}
                                </div>

                                {/* Блок с ценой прижимается к низу */}
                                <div className="mt-auto">
                                    <div className="text-lg font-bold text-blue-600 mb-2">
                                        {institution.price_from ?
                                            `${institution.currency === 'USD' ? '$' : institution.currency}${institution.price_from.toLocaleString()}` +
                                            (institution.price_to ? ` - ${institution.currency === 'USD' ? '$' : institution.currency}${institution.price_to.toLocaleString()}` : '')
                                            : 'Цена не указана'
                                        }
                                    </div>
                                </div>

                                <div className="card-actions mt-4">
                                    <Link className="apply-button cursor-pointer" href={`/catalog/${institution.id}`}>
                                        Подробнее →
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </DefaultLayout>
    )
}

export default Catalog;
