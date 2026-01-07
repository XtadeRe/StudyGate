import React from 'react';
import { usePage } from '@inertiajs/react';
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
                        <div key={institution.id} className="institution-card">

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

                            <div className="card-content">
                                <h3 className="card-title">{institution.name}</h3>

                                <div className="location-container">
                                    <svg className="location-icon" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                    </svg>
                                    <span className="location-text">
                                        {institution.city}, {institution.country}
                                    </span>
                                </div>

                                <div className="programs-container">
                                    <span className="type-badge">
                                        {institution.type}
                                    </span>
                                    {institution.programs && institution.programs.slice(0, 2).map((program, index) => (
                                        <span key={index} className="program-badge">
                                            {program}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-4">
                                    <div className="text-lg font-bold text-blue-600 mb-2">
                                        {institution.price_from ?
                                            `${institution.currency === 'USD' ? '$' : institution.currency}${institution.price_from.toLocaleString()}` +
                                            (institution.price_to ? ` - ${institution.currency === 'USD' ? '$' : institution.currency}${institution.price_to.toLocaleString()}` : '')
                                            : 'Цена не указана'
                                        }
                                    </div>
                                </div>

                                <div className="card-actions">
                                    <button className="details-button">
                                        Подробнее →
                                    </button>
                                    <button className="apply-button">
                                        Подать заявку
                                    </button>
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
