import DefaultLayout from '@/layouts/DefaultLayouts';
import {
    AcademicCapIcon,
    DocumentTextIcon,
    ChatBubbleLeftRightIcon,
    BanknotesIcon,
    CheckCircleIcon,
    PaperAirplaneIcon,
    HomeIcon,
    DevicePhoneMobileIcon,
    IdentificationIcon,
    CreditCardIcon,
    MapPinIcon,
    GlobeAltIcon,
    ClockIcon,
    ShieldCheckIcon
} from '@heroicons/react/24/outline';
import { usePage } from '@inertiajs/react';

const Immigration = () => {
    const { countries } = usePage().props;


    const phases = [
        {
            title: "Фаза 1: Выбор страны и учебного заведения",
            parallel: false,
            steps: [
                {
                    icon: <GlobeAltIcon className="w-8 h-8" />,
                    title: "Выбор страны и программы",
                    content: "Используйте наш каталог с фильтрами по странам, языкам обучения, стоимости программ, рейтингам университетов и проценту одобрения виз. Система автоматически генерирует персональные чек-листы требований.",
                    techNote: "БД: countries, universities, programs, requirements"
                },
                {
                    icon: <AcademicCapIcon className="w-8 h-8" />,
                    title: "Подбор учебного заведения",
                    content: "На основе ваших критериев мы подбираем 3-5 оптимальных вариантов. Детальный анализ вступительных требований, сроков подачи и условий зачисления.",
                    techNote: "matching_algorithm, admission_deadlines"
                },
                {
                    icon: <DocumentTextIcon className="w-8 h-8" />,
                    title: "Оплата депозита и старт процесса",
                    content: "После внесения депозита активируется личный кабинет с трекером процесса, доступ к персональному менеджеру и запускается подготовка документов.",
                    techNote: "payments.status = 'deposit_paid'; applications.status = 'in_progress'"
                }
            ]
        },
        {
            title: "Фаза 2: Параллельная подготовка документов",
            parallel: true,
            threads: [
                {
                    name: "Академическая подготовка",
                    color: "green",
                    steps: [
                        {
                            icon: <DocumentTextIcon className="w-6 h-6" />,
                            title: "Академические документы",
                            content: "Сбор, легализация и перевод дипломов, транскриптов, сертификатов. Подготовка мотивационных писем, резюме и рекомендаций согласно требованиям выбранного вуза.",
                        },
                        {
                            icon: <ChatBubbleLeftRightIcon className="w-6 h-6" />,
                            title: "Подача документов в вуз",
                            content: "Официальная подача заявки в университет. Отслеживание статуса в реальном времени. Подготовка к возможным собеседованиям или дополнительным тестам.",
                        }
                    ]
                },
                {
                    name: "Иммиграционная подготовка",
                    color: "blue",
                    steps: [
                        {
                            icon: <BanknotesIcon className="w-6 h-6" />,
                            title: "Финансовое подтверждение",
                            content: "Подготовка финансовых документов: выписки со счетов, спонсорские письма, подтверждение доходов. Требования варьируются в зависимости от страны.",
                        },
                        {
                            icon: <IdentificationIcon className="w-6 h-6" />,
                            title: "Получение предварительного одобрения",
                            content: "Подача документов в иммиграционные службы. Получение подтверждения о приеме документов или предварительного разрешения на обучение.",
                        }
                    ]
                }
            ]
        },
        {
            title: "Фаза 3: Визовый процесс",
            parallel: false,
            steps: [
                {
                    icon: <CheckCircleIcon className="w-8 h-8" />,
                    title: "Получение приглашения",
                    content: "После зачисления в учебное заведение вы получаете официальное приглашение или подтверждение о зачислении, необходимое для визы.",
                    techNote: "university_confirmation, invitation_letters"
                },
                {
                    icon: <IdentificationIcon className="w-8 h-8" />,
                    title: "Визовая подача",
                    content: "Помощь в заполнении визовой анкеты, записи в консульство/визовый центр, подготовке пакета документов. Репетиция собеседования при необходимости.",
                    techNote: "visa_appointments, consulate_checklists"
                },
                {
                    icon: <ClockIcon className="w-8 h-8" />,
                    title: "Отслеживание визового процесса",
                    content: "Мониторинг статуса визовой заявки. Своевременное реагирование на запросы дополнительных документов.",
                    techNote: "visa_tracking, status_updates"
                }
            ]
        },
        {
            title: "Фаза 4: Подготовка к переезду",
            parallel: false,
            steps: [
                {
                    icon: <HomeIcon className="w-8 h-8" />,
                    title: "Проживание и логистика",
                    content: "Помощь в поиске жилья: общежитие, аренда квартиры, хоумстей. Бронирование авиабилетов с оптимальными стыковками и нашими скидками.",
                    techNote: "housing_options, flight_bookings, partner_discounts"
                },
                {
                    icon: <ShieldCheckIcon className="w-8 h-8" />,
                    title: "Страхование и здоровье",
                    content: "Оформление медицинской страховки, соответствующей требованиям страны назначения. Консультации по вакцинации и медицинским требованиям.",
                    techNote: "insurance_providers, health_requirements"
                }
            ]
        },
        {
            title: "Фаза 5: Прибытие и адаптация",
            parallel: false,
            steps: [
                {
                    icon: <PaperAirplaneIcon className="w-8 h-8" />,
                    title: "Встреча и трансфер",
                    content: "Встреча в аэропорту, помощь с прохождением паспортного контроля и получением багажа. Трансфер к месту проживания.",
                },
                {
                    icon: <DevicePhoneMobileIcon className="w-8 h-8" />,
                    title: "Первые дни в новой стране",
                    content: "Помощь в регистрации по месту пребывания, открытии банковского счёта, получении SIM-карты и оформлении проездных документов. Экскурсия по району и знакомство с инфраструктурой.",
                },
                {
                    icon: <MapPinIcon className="w-8 h-8" />,
                    title: "Регистрация в учебном заведении",
                    content: "Сопровождение на регистрацию в университете, помощь в выборе курсов и ориентационной программе.",
                },
                {
                    icon: <CreditCardIcon className="w-8 h-8" />,
                    title: "Завершение оплаты и дальнейшая поддержка",
                    content: "После успешного прибытия и регистрации — оплата оставшейся части услуг. Далее: поддержка в течение 90 дней, помощь с поиском подработки, продлением визы, решением бытовых вопросов.",
                }
            ]
        }
    ];

    return (
        <DefaultLayout>
            <div className="container mx-auto px-4 py-12">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Полное сопровождение обучения за рубежом
                    </h1>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
                        От выбора страны и университета до адаптации на месте.
                        Мы управляем параллельными процессами подготовки документов
                        и обеспечиваем поддержку в первые критические месяцы.
                    </p>
                    <div className="inline-flex items-center bg-blue-50 text-blue-700 px-6 py-3 rounded-full font-medium">
                        <ShieldCheckIcon className="w-5 h-5 mr-2" />
                        Гарантия возврата средств при отказе по нашей вине
                    </div>
                </div>

                <div className="mb-20">
                    <h2 className="text-3xl font-bold text-center mb-12">Поддерживаемые страны</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {countries.map((country, index) => (
                            <div
                                key={index}
                                className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-lg transition-shadow duration-300"
                            >
                                <div className="flex items-center mb-3">
                                    <span className="text-2xl mr-3">{country.flag}</span>
                                    <h3 className="font-bold text-lg">{country.name}</h3>
                                </div>
                                <p className="text-gray-600 text-sm">{country.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mb-20">
                    <h2 className="text-3xl font-bold text-center mb-12">Этапы процесса</h2>

                    {phases.map((phase, phaseIndex) => (
                        <div key={phaseIndex} className="mb-16">
                            {/* Phase Header */}
                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
                                <div className="flex items-center mb-4 md:mb-0">
                                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-bold">
                                        Фаза {phaseIndex + 1}
                                    </div>
                                    <h2 className="text-2xl font-bold ml-4">{phase.title}</h2>
                                </div>
                                {phase.parallel && (
                                    <span className="px-4 py-2 bg-gradient-to-r from-green-100 to-blue-100 text-gray-800 rounded-full text-sm font-medium">
                    Параллельные процессы
                  </span>
                                )}
                            </div>

                            {phase.parallel ? (
                                <div className="grid md:grid-cols-2 gap-8">
                                    {phase.threads?.map((thread, threadIndex) => (
                                        <div
                                            key={threadIndex}
                                            className={`border-2 rounded-2xl p-6 ${
                                                thread.color === 'green'
                                                    ? 'border-green-200 bg-green-50'
                                                    : 'border-blue-200 bg-blue-50'
                                            }`}
                                        >
                                            <div className="flex items-center mb-6">
                                                <div className={`w-4 h-4 rounded-full ${
                                                    thread.color === 'green' ? 'bg-green-500' : 'bg-blue-500'
                                                }`}></div>
                                                <h3 className="text-xl font-bold ml-3">{thread.name}</h3>
                                            </div>
                                            <div className="space-y-6">
                                                {thread.steps.map((step, stepIndex) => (
                                                    <div
                                                        key={stepIndex}
                                                        className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
                                                    >
                                                        <div className="flex items-start">
                                                            <div className={`p-3 rounded-lg mr-4 ${
                                                                thread.color === 'green'
                                                                    ? 'bg-green-100 text-green-600'
                                                                    : 'bg-blue-100 text-blue-600'
                                                            }`}>
                                                                {step.icon}
                                                            </div>
                                                            <div className="flex-1">
                                                                <h4 className="font-bold text-lg mb-2">{step.title}</h4>
                                                                <p className="text-gray-700">{step.content}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="relative">
                                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-300 to-purple-300"></div>

                                    <div className="space-y-12">
                                        {phase.steps?.map((step, stepIndex) => (
                                            <div
                                                key={stepIndex}
                                                className={`relative flex flex-col md:flex-row ${
                                                    stepIndex % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                                }`}
                                            >
                                                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-12 h-12 flex items-center justify-center z-10">
                                                    <div className="w-6 h-6 rounded-full bg-white border-4 border-blue-600"></div>
                                                </div>

                                                <div className={`ml-0 md:ml-0 md:w-5/12 ${
                                                    stepIndex % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                                                }`}>
                                                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 mt-6">
                                                        <div className="flex items-center mb-4">
                                                            <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                                                                {step.icon}
                                                            </div>
                                                            <h4 className="text-xl font-bold ml-3">{step.title}</h4>
                                                        </div>
                                                        <p className="text-gray-700 mb-4">{step.content}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Guarantees Section */}
                <div className="mt-20 bg-gradient-to-r from-gray-900 to-blue-900 rounded-3xl p-10 text-white">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold mb-10 text-center">Наши гарантии</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: <ShieldCheckIcon className="w-8 h-8" />,
                                    title: "Финансовая безопасность",
                                    desc: "Эскроу-счета с гарантией возврата 100% средств при отказе по нашей вине"
                                },
                                {
                                    icon: <ClockIcon className="w-8 h-8" />,
                                    title: "90 дней поддержки",
                                    desc: "Три месяца адаптационной поддержки после вашего прибытия в новую страну"
                                },
                                {
                                    icon: <GlobeAltIcon className="w-8 h-8" />,
                                    title: "Прозрачность процесса",
                                    desc: "Личный кабинет с трекером статусов, Telegram-чат с менеджером и регулярные отчёты"
                                },
                                {
                                    icon: <DocumentTextIcon className="w-8 h-8" />,
                                    title: "Параллельная подготовка",
                                    desc: "Две независимые ветки документов: академическая и иммиграционная"
                                },
                                {
                                    icon: <ChatBubbleLeftRightIcon className="w-8 h-8" />,
                                    title: "Персональный менеджер",
                                    desc: "Выделенный специалист, который ведёт ваш кейс от начала до завершения адаптации"
                                },
                                {
                                    icon: <BanknotesIcon className="w-8 h-8" />,
                                    title: "Контроль бюджета",
                                    desc: "Детальная смета расходов без скрытых платежей и комиссий"
                                },
                            ].map((item, idx) => (
                                <div key={idx} className="bg-white/10 p-6 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-colors duration-300">
                                    <div className="mb-4 text-blue-300">
                                        {item.icon}
                                    </div>
                                    <h3 className="font-bold text-xl mb-3">{item.title}</h3>
                                    <p className="text-gray-300">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="mt-16 text-center">
                    <div className="max-w-2xl mx-auto">
                        <h3 className="text-2xl font-bold mb-6">Готовы начать путь к обучению за рубежом?</h3>
                        <p className="text-gray-600 mb-8">
                            Оставьте заявку, и наш специалист свяжется с вами для бесплатной консультации
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                                Получить консультацию
                            </button>
                            <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-medium hover:bg-blue-50 transition-colors duration-300">
                                Подобрать страну
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
};

export default Immigration;
