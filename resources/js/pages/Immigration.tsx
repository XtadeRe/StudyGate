import DefaultLayout from '@/layouts/DefaultLayouts';
import {
    AcademicCapIcon,
    BanknotesIcon,
    ChatBubbleLeftRightIcon,
    CheckCircleIcon,
    ClockIcon,
    CreditCardIcon,
    DevicePhoneMobileIcon,
    DocumentTextIcon,
    GlobeAltIcon,
    HomeIcon,
    IdentificationIcon,
    MapPinIcon,
    PaperAirplaneIcon,
    ShieldCheckIcon,
} from '@heroicons/react/24/outline';
import { Link, usePage } from '@inertiajs/react';

const Immigration = () => {
    const { countries } = usePage().props;

    const phases = [
        {
            title: 'Фаза 1: Выбор страны и учебного заведения',
            parallel: false,
            steps: [
                {
                    icon: <GlobeAltIcon className="h-8 w-8" />,
                    title: 'Выбор страны и программы',
                    content:
                        'Используйте наш каталог с фильтрами по странам, языкам обучения, стоимости программ, рейтингам университетов и проценту одобрения виз. Система автоматически генерирует персональные чек-листы требований.',
                    techNote: 'БД: countries, universities, programs, requirements',
                },
                {
                    icon: <AcademicCapIcon className="h-8 w-8" />,
                    title: 'Подбор учебного заведения',
                    content:
                        'На основе ваших критериев мы подбираем 3-5 оптимальных вариантов. Детальный анализ вступительных требований, сроков подачи и условий зачисления.',
                    techNote: 'matching_algorithm, admission_deadlines',
                },
                {
                    icon: <DocumentTextIcon className="h-8 w-8" />,
                    title: 'Оплата депозита и старт процесса',
                    content:
                        'После внесения депозита активируется личный кабинет с трекером процесса, доступ к персональному менеджеру и запускается подготовка документов.',
                    techNote: "payments.status = 'deposit_paid'; applications.status = 'in_progress'",
                },
            ],
        },
        {
            title: 'Фаза 2: Параллельная подготовка документов',
            parallel: true,
            threads: [
                {
                    name: 'Академическая подготовка',
                    color: 'green',
                    steps: [
                        {
                            icon: <DocumentTextIcon className="h-6 w-6" />,
                            title: 'Академические документы',
                            content:
                                'Сбор, легализация и перевод дипломов, транскриптов, сертификатов. Подготовка мотивационных писем, резюме и рекомендаций согласно требованиям выбранного вуза.',
                        },
                        {
                            icon: <ChatBubbleLeftRightIcon className="h-6 w-6" />,
                            title: 'Подача документов в вуз',
                            content:
                                'Официальная подача заявки в университет. Отслеживание статуса в реальном времени. Подготовка к возможным собеседованиям или дополнительным тестам.',
                        },
                    ],
                },
                {
                    name: 'Иммиграционная подготовка',
                    color: 'blue',
                    steps: [
                        {
                            icon: <BanknotesIcon className="h-6 w-6" />,
                            title: 'Финансовое подтверждение',
                            content:
                                'Подготовка финансовых документов: выписки со счетов, спонсорские письма, подтверждение доходов. Требования варьируются в зависимости от страны.',
                        },
                        {
                            icon: <IdentificationIcon className="h-6 w-6" />,
                            title: 'Получение предварительного одобрения',
                            content:
                                'Подача документов в иммиграционные службы. Получение подтверждения о приеме документов или предварительного разрешения на обучение.',
                        },
                    ],
                },
            ],
        },
        {
            title: 'Фаза 3: Визовый процесс',
            parallel: false,
            steps: [
                {
                    icon: <CheckCircleIcon className="h-8 w-8" />,
                    title: 'Получение приглашения',
                    content:
                        'После зачисления в учебное заведение вы получаете официальное приглашение или подтверждение о зачислении, необходимое для визы.',
                    techNote: 'university_confirmation, invitation_letters',
                },
                {
                    icon: <IdentificationIcon className="h-8 w-8" />,
                    title: 'Визовая подача',
                    content:
                        'Помощь в заполнении визовой анкеты, записи в консульство/визовый центр, подготовке пакета документов. Репетиция собеседования при необходимости.',
                    techNote: 'visa_appointments, consulate_checklists',
                },
                {
                    icon: <ClockIcon className="h-8 w-8" />,
                    title: 'Отслеживание визового процесса',
                    content: 'Мониторинг статуса визовой заявки. Своевременное реагирование на запросы дополнительных документов.',
                    techNote: 'visa_tracking, status_updates',
                },
            ],
        },
        {
            title: 'Фаза 4: Подготовка к переезду',
            parallel: false,
            steps: [
                {
                    icon: <HomeIcon className="h-8 w-8" />,
                    title: 'Проживание и логистика',
                    content:
                        'Помощь в поиске жилья: общежитие, аренда квартиры, хоумстей. Бронирование авиабилетов с оптимальными стыковками и нашими скидками.',
                    techNote: 'housing_options, flight_bookings, partner_discounts',
                },
                {
                    icon: <ShieldCheckIcon className="h-8 w-8" />,
                    title: 'Страхование и здоровье',
                    content:
                        'Оформление медицинской страховки, соответствующей требованиям страны назначения. Консультации по вакцинации и медицинским требованиям.',
                    techNote: 'insurance_providers, health_requirements',
                },
            ],
        },
        {
            title: 'Фаза 5: Прибытие и адаптация',
            parallel: false,
            steps: [
                {
                    icon: <PaperAirplaneIcon className="h-8 w-8" />,
                    title: 'Встреча и трансфер',
                    content: 'Встреча в аэропорту, помощь с прохождением паспортного контроля и получением багажа. Трансфер к месту проживания.',
                },
                {
                    icon: <DevicePhoneMobileIcon className="h-8 w-8" />,
                    title: 'Первые дни в новой стране',
                    content:
                        'Помощь в регистрации по месту пребывания, открытии банковского счёта, получении SIM-карты и оформлении проездных документов. Экскурсия по району и знакомство с инфраструктурой.',
                },
                {
                    icon: <MapPinIcon className="h-8 w-8" />,
                    title: 'Регистрация в учебном заведении',
                    content: 'Сопровождение на регистрацию в университете, помощь в выборе курсов и ориентационной программе.',
                },
                {
                    icon: <CreditCardIcon className="h-8 w-8" />,
                    title: 'Завершение оплаты и дальнейшая поддержка',
                    content:
                        'После успешного прибытия и регистрации — оплата оставшейся части услуг. Далее: поддержка в течение 90 дней, помощь с поиском подработки, продлением визы, решением бытовых вопросов.',
                },
            ],
        },
    ];

    return (
        <DefaultLayout>
            <div className="container mx-auto px-4 py-12">
                <div className="mb-16 text-center">
                    <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">Полное сопровождение обучения за рубежом</h1>
                    <p className="mx-auto mb-8 max-w-4xl text-xl text-gray-600">
                        От выбора страны и университета до адаптации на месте. Мы управляем параллельными процессами подготовки документов и
                        обеспечиваем поддержку в первые критические месяцы.
                    </p>
                    <div className="inline-flex items-center rounded-full bg-blue-50 px-6 py-3 font-medium text-blue-700">
                        <ShieldCheckIcon className="mr-2 h-5 w-5" />
                        Гарантия возврата средств при отказе по нашей вине
                    </div>
                </div>

                <div className="mb-20">
                    <h2 className="mb-12 text-center text-3xl font-bold">Поддерживаемые страны</h2>
                    <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                        {countries.map((country, index) => (
                            <div
                                key={index}
                                className="group relative flex justify-center overflow-hidden rounded-xl p-1 transition-shadow duration-300 hover:shadow-lg"
                            >
                                <div className="absolute inset-0 bg-blue-600 transition-opacity duration-500 group-hover:opacity-0" />

                                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-400 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                                <div className="relative flex w-full items-center rounded-[11px] bg-white p-5">
                                    <h3 className="text-lg font-bold">{country}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mb-20">
                    <h2 className="mb-12 text-center text-3xl font-bold">Этапы процесса</h2>

                    {phases.map((phase, phaseIndex) => (
                        <div key={phaseIndex} className="mb-16">
                            {/* Phase Header */}
                            <div className="mb-8 flex flex-col justify-between md:flex-row md:items-center">
                                <div className="mb-4 flex items-center md:mb-0">
                                    <div className="rounded-full bg-blue-500 px-6 py-2 font-bold text-white">Фаза {phaseIndex + 1}</div>
                                    <h2 className="ml-4 text-2xl font-bold">{phase.title}</h2>
                                </div>
                                {phase.parallel && (
                                    <span className="rounded-full bg-gradient-to-r from-green-100 to-blue-100 px-4 py-2 text-sm font-medium text-gray-800">
                                        Параллельные процессы
                                    </span>
                                )}
                            </div>

                            {phase.parallel ? (
                                <div className="grid gap-8 md:grid-cols-2">
                                    {phase.threads?.map((thread, threadIndex) => (
                                        <div
                                            key={threadIndex}
                                            className={`rounded-2xl border-2 p-6 ${
                                                thread.color === 'green' ? 'border-green-200 bg-green-50' : 'border-blue-200 bg-blue-50'
                                            }`}
                                        >
                                            <div className="mb-6 flex items-center">
                                                <div
                                                    className={`h-4 w-4 rounded-full ${thread.color === 'green' ? 'bg-green-500' : 'bg-blue-500'}`}
                                                ></div>
                                                <h3 className="ml-3 text-xl font-bold">{thread.name}</h3>
                                            </div>
                                            <div className="space-y-6">
                                                {thread.steps.map((step, stepIndex) => (
                                                    <div key={stepIndex} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                                                        <div className="flex items-start">
                                                            <div
                                                                className={`mr-4 rounded-lg p-3 ${
                                                                    thread.color === 'green'
                                                                        ? 'bg-green-100 text-green-600'
                                                                        : 'bg-blue-100 text-blue-600'
                                                                }`}
                                                            >
                                                                {step.icon}
                                                            </div>
                                                            <div className="flex-1">
                                                                <h4 className="mb-2 text-lg font-bold">{step.title}</h4>
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
                                    <div className="absolute top-0 bottom-0 left-1/2 hidden w-0.5 -translate-x-1/2 transform bg-gradient-to-b from-blue-300 to-purple-300 md:block"></div>

                                    <div className="space-y-12">
                                        {phase.steps?.map((step, stepIndex) => (
                                            <div
                                                key={stepIndex}
                                                className={`relative flex flex-col md:flex-row ${
                                                    stepIndex % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                                }`}
                                            >
                                                <div className="absolute left-0 z-10 flex h-12 w-12 transform items-center justify-center md:left-1/2 md:-translate-x-1/2">
                                                    <div className="h-6 w-6 rounded-full border-4 border-blue-600 bg-white"></div>
                                                </div>

                                                <div
                                                    className={`ml-0 md:ml-0 md:w-5/12 ${
                                                        stepIndex % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                                                    }`}
                                                >
                                                    <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
                                                        <div className="mb-4 flex items-center">
                                                            <div className="rounded-lg bg-blue-100 p-2 text-blue-600">{step.icon}</div>
                                                            <h4 className="ml-3 text-xl font-bold">{step.title}</h4>
                                                        </div>
                                                        <p className="mb-4 text-gray-700">{step.content}</p>
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
                <div className="mt-20 rounded-3xl bg-gradient-to-r from-gray-900 to-blue-900 p-10 text-white">
                    <div className="mx-auto max-w-6xl">
                        <h2 className="mb-10 text-center text-3xl font-bold">Наши гарантии</h2>
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {[
                                {
                                    icon: <ShieldCheckIcon className="h-8 w-8" />,
                                    title: 'Финансовая безопасность',
                                    desc: 'Эскроу-счета с гарантией возврата 100% средств при отказе по нашей вине',
                                },
                                {
                                    icon: <ClockIcon className="h-8 w-8" />,
                                    title: '90 дней поддержки',
                                    desc: 'Три месяца адаптационной поддержки после вашего прибытия в новую страну',
                                },
                                {
                                    icon: <GlobeAltIcon className="h-8 w-8" />,
                                    title: 'Прозрачность процесса',
                                    desc: 'Личный кабинет с трекером статусов, Telegram-чат с менеджером и регулярные отчёты',
                                },
                                {
                                    icon: <DocumentTextIcon className="h-8 w-8" />,
                                    title: 'Параллельная подготовка',
                                    desc: 'Две независимые ветки документов: академическая и иммиграционная',
                                },
                                {
                                    icon: <ChatBubbleLeftRightIcon className="h-8 w-8" />,
                                    title: 'Персональный менеджер',
                                    desc: 'Выделенный специалист, который ведёт ваш кейс от начала до завершения адаптации',
                                },
                                {
                                    icon: <BanknotesIcon className="h-8 w-8" />,
                                    title: 'Контроль бюджета',
                                    desc: 'Детальная смета расходов без скрытых платежей и комиссий',
                                },
                            ].map((item, idx) => (
                                <div
                                    key={idx}
                                    className="rounded-xl bg-white/10 p-6 backdrop-blur-sm transition-colors duration-300 hover:bg-white/20"
                                >
                                    <div className="mb-4 text-blue-300">{item.icon}</div>
                                    <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
                                    <p className="text-gray-300">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="mt-16 text-center">
                    <div className="mx-auto max-w-2xl">
                        <h3 className="mb-6 text-2xl font-bold">Готовы начать путь к обучению за рубежом?</h3>
                        <p className="mb-8 text-gray-600">Оставьте заявку, и наш специалист свяжется с вами для бесплатной консультации</p>
                        <div className="flex flex-col justify-center gap-4 sm:flex-row">
                            <Link
                                href="/catalog"
                                className="cursor-pointer rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-3 font-medium text-white transition-all duration-300 hover:from-blue-700 hover:to-purple-700"
                            >
                                Получить консультацию
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
};

export default Immigration;
