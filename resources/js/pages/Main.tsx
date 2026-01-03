import React from 'react';
import DefaultLayout from '../layouts/DefaultLayouts';
import osakaSchool from '../../images/osakaSchool.jpeg'
import mainImage from "../../images/main.webp"
import { steps, processSectionText } from '@/data/steps';
import {schools} from '@/data/schools';
import "../../css/Main.css"
import {ArrowRightIcon} from '@heroicons/react/20/solid';

const Main = () => {
    return (
        <DefaultLayout>
            <section className="preview" id="preview">
                <div className="main_container">
                    <div className="preview_text">
                        <h1>StudyGate</h1>
                        <p>Открываем врата знаний - учеба без границ!</p>
                    </div>
                    <div className="preview_image">
                        <img src={mainImage} alt="Фото" />
                    </div>
                </div>
            </section>

            <section id="process" className="process-section">
                <div className="container">
                    <h2>
                        {processSectionText.title} <span className="text-blue-600">{processSectionText.highlightedTitle}</span>
                    </h2>
                    <p className="subtitle">{processSectionText.subtitle}</p>

                    <div className="steps-grid">
                        {steps.map((step) => (
                            <div key={step.id} className="step-card fade-in-up">
                                <div className="step-card-header">
                                    <div className="step-number">{step.number}</div>
                                    <div className="step-icon">{step.icon}</div>
                                </div>
                                <h3>{step.title}</h3>
                                <p className="step-description">{step.description}</p>
                                <ul className="step-details">
                                    {step.details.map((detail, idx) => (
                                        <li key={idx} className="step-detail-item">
                                            <span className="step-detail-marker"></span>
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="process-cta">
                        <button className="cta-button">{processSectionText.cta}</button>
                    </div>
                </div>
            </section>

            <section id="help">
                <div className="help_container flex flex-col items-center justify-center">
                    <h2 className="mb-8 text-center text-3xl font-bold">Нужна помощь с выбором?</h2>
                    <p>Мы вам поможем! Укажите страну и категорию</p>
                    <div className="search_block">
                        <select className="help_select1">
                            <option>Выберите страну</option>
                            <option>1</option>
                            <option>1</option>
                        </select>
                        <select className="help_select2">
                            <option value="1">Категория</option>
                            <option value="2">Языковая школа</option>
                            <option value="3">Колледж</option>
                            <option value="4">Университет</option>
                        </select>
                        <button>
                            <ArrowRightIcon className="w-7 h-7 ml-1"></ArrowRightIcon>
                        </button>
                    </div>
                </div>
            </section>

            <section className="popular-section">
                <div className="popular-container">
                    <div className="popular-header">
                        <span className="popular-badge">🔥 Топ выбора</span>
                        <h2>Часто просматриваемые</h2>
                        <p className="subtitle">Здесь собраны популярные училища на нашем сайте! Эти школы выбирают большинство наших пользователей.</p>
                    </div>

                    <div className="popular-grid" id="popular-schools-container">
                        {schools.map((school) => (
                            <div key={school.id} className="">
                                <img src={school.image} />
                                <h3>{school.name}</h3>
                                <p>{school.city}</p>
                                <p>{school.district}</p>
                                <p>{school.description}</p>
                                <p>{school.price} {school.currency}/{school.period}</p>
                                <p>{school.rating}</p>
                                <p>{school.views}</p>
                                <div>{school.tags.map(() => (
                                    <li>tag</li>
                                ))}</div>
                                <p>Количество посещений страницы: {school.click_count}</p>
                            </div>
                        ))}

                    </div>
                </div>
            </section>
        </DefaultLayout>
    );
};

export default Main;
