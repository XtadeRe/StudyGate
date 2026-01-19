import DefaultLayout from '@/layouts/DefaultLayouts';
import { AcademicCapIcon, DocumentTextIcon, ChatBubbleLeftRightIcon, BanknotesIcon, CheckCircleIcon, PaperAirplaneIcon, HomeIcon, DevicePhoneMobileIcon, IdentificationIcon, CreditCardIcon } from '@heroicons/react/24/outline';

const Immigration = () => {
    const phases = [
        {
            title: "Фаза 1: Выбор и подготовка",
            parallel: false,
            steps: [
                {
                    icon: <AcademicCapIcon className="w-8 h-8" />,
                    title: "Выбор института",
                    content: "Каталог StudyGate с фильтрами: язык преподавания, стоимость, локация, процент одобрения виз. При выборе — автоматическая генерация двух чек-листов: для вуза и для иммиграции.",
                    techNote: "БД: universities, university_requirements, immigration_requirements"
                },
                {
                    icon: <DocumentTextIcon className="w-8 h-8" />,
                    title: "Оплата 50% и старт",
                    content: "После оплаты депозита активируется личный кабинет с трекером и доступ к менеджеру. Система создаёт две параллельные ветки задач.",
                    techNote: "payments.status = 'deposit_paid'; applications.status = 'in_progress'"
                }
            ]
        },
        {
            title: "Фаза 2: Параллельная подготовка (ВУЗ + Иммиграция)",
            parallel: true,
            threads: [
                {
                    name: "Ветка ВУЗа",
                    steps: [
                        {
                            icon: <DocumentTextIcon className="w-6 h-6" />,
                            title: "Академические документы",
                            content: "Сбор и перевод транскриптов, диплома, мотивационного письма. Проверка менеджером на соответствие требованиям конкретного вуза.",
                        },
                        {
                            icon: <ChatBubbleLeftRightIcon className="w-6 h-6" />,
                            title: "Подача и отслеживание",
                            content: "Официальная подача в университет. Трекер статусов в реальном времени. Автоматические уведомления при изменении статуса.",
                        }
                    ]
                },
                {
                    name: "Ветка Иммиграции",
                    steps: [
                        {
                            icon: <BanknotesIcon className="w-6 h-6" />,
                            title: "Финансовые гарантии",
                            content: "Подготовка выписок со счетов (1.5-2 года), спонсорских писем, объяснений источников дохода. Критически важно для Certificate of Eligibility (CoE).",
                        },
                        {
                            icon: <CheckCircleIcon className="w-6 h-6" />,
                            title: "Получение CoE",
                            content: "Подача документов в иммиграцию Японии через университет. Отслеживание номера заявки. Получение CoE — ключевой этап.",
                        }
                    ]
                }
            ]
        },
        {
            title: "Фаза 3: Виза и предотъезд",
            parallel: false,
            steps: [
                {
                    icon: <IdentificationIcon className="w-8 h-8" />,
                    title: "Визовая подготовка",
                    content: "Помощь с заполнением визовой анкеты, записью в консульство, подготовкой к собеседованию (если требуется). Чек-лист документов для визы.",
                    techNote: "visa_appointments, consulate_checklists"
                },
                {
                    icon: <HomeIcon className="w-8 h-8" />,
                    title: "Жильё и логистика",
                    content: "Три варианта: 1) Общежитие вуза 2) Sharehouse через партнёров 3) Аренда с гарантийной компанией (保証会社). Бронирование авиабилетов с нашими скидками.",
                    techNote: "housing_options, flight_bookings, partner_discounts"
                }
            ]
        },
        {
            title: "Фаза 4: 再臨 Перелёт и первые 72 часа в Японии",
            parallel: false,
            steps: [
                {
                    icon: <PaperAirplaneIcon className="w-8 h-8" />,
                    title: "Встреча и карта резидента",
                    content: "Встреча в аэропорту Narita/Haneda. Помощь в получении 在留カード (карты резидента) прямо в аэропорту.",
                },
                {
                    icon: <DevicePhoneMobileIcon className="w-8 h-8" />,
                    title: "Базовые услуги за 72 часа",
                    content: "1) Регистрация в муниципалитете (住民票) 2) Открытие счёта в Japan Post Bank 3) SIM-карта с интернетом 4) Транспортная карта Suica/Pasmo 5) Экскурсия по району.",
                },
                {
                    icon: <CreditCardIcon className="w-8 h-8" />,
                    title: "Оплата 50% и поддержка",
                    content: "После успешного получения карты резидента — оплата оставшихся 50%. Далее: 90 дней поддержки, помощь с поиском работы, продлением визы, решением бытовых проблем.",
                    techNote: "support_tickets, community_access, job_board_integration"
                }
            ]
        }
    ];

    return (
        <DefaultLayout>
            <div className="container mx-auto px-4 py-12">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Система <span className="text-red-600">再臨</span> Migration Gateway
                    </h1>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                        От выбора университета до карты резидента. Две параллельные ветки документов,
                        полное сопровождение в первые критические 72 часа в Японии.
                    </p>
                </div>

                {phases.map((phase, phaseIndex) => (
                    <div key={phaseIndex} className="mb-20">
                        <div className="flex items-center mb-8">
                            <div className="bg-red-600 text-white px-6 py-2 rounded-full font-bold">
                                Фаза {phaseIndex + 1}
                            </div>
                            <h2 className="text-2xl font-bold ml-4">{phase.title}</h2>
                            {phase.parallel && (
                                <span className="ml-4 px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                  Параллельные процессы
                </span>
                            )}
                        </div>

                        {phase.parallel ? (
                            // Parallel phase layout
                            <div className="grid md:grid-cols-2 gap-8">
                                {phase.threads?.map((thread, threadIndex) => (
                                    <div key={threadIndex} className="border-2 border-gray-300 rounded-2xl p-6">
                                        <div className="flex items-center mb-6">
                                            <div className={`w-4 h-4 rounded-full ${threadIndex === 0 ? 'bg-green-500' : 'bg-blue-500'}`}></div>
                                            <h3 className="text-xl font-bold ml-3">{thread.name}</h3>
                                        </div>
                                        <div className="space-y-6">
                                            {thread.steps.map((step, stepIndex) => (
                                                <div key={stepIndex} className="bg-white p-6 rounded-xl shadow border border-gray-200">
                                                    <div className="flex items-start">
                                                        <div className="p-2 bg-gray-100 rounded-lg mr-4">
                                                            {step.icon}
                                                        </div>
                                                        <div>
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
                                <div className="absolute left-8 top-0 bottom-0 w-1 bg-gray-300 md:left-1/2 md:-ml-0.5"></div>
                                <div className="space-y-12">
                                    {phase.steps?.map((step, stepIndex) => (
                                        <div key={stepIndex} className={`relative flex ${stepIndex % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                                            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white border-4 border-red-600 z-10">
                                                <div className="text-red-600">
                                                    {step.icon}
                                                </div>
                                            </div>
                                            <div className={`ml-8 md:ml-12 md:w-5/12 ${stepIndex % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                                                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
                                                    <h4 className="text-xl font-bold mb-3">{step.title}</h4>
                                                    <p className="text-gray-700 mb-4">{step.content}</p>
                                                    {step.techNote && (
                                                        <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-300">
                                                            <p className="text-sm font-mono text-gray-600">
                                                                <span className="font-bold">БД:</span> {step.techNote}
                                                            </p>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                ))}

                <div className="mt-20 bg-gradient-to-r from-gray-900 to-red-900 rounded-3xl p-10 text-white">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold mb-10 text-center">Технические гарантии системы</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { title: "Две независимые ветки", desc: "Вуз и иммиграция отслеживаются параллельно. Ничего не упущено." },
                                { title: "72-часовой онбординг", desc: "Критически важные процедуры в первые три дня под нашим контролем." },
                                { title: "Прозрачность статусов", desc: "API интеграция с вузами для отслеживания статуса подачи в реальном времени." },
                                { title: "Финансовая безопасность", desc: "Эскроу-счета. Возврат 100% при отказе по нашей вине." }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                                    <h3 className="font-bold text-xl mb-3">{item.title}</h3>
                                    <p className="text-gray-300">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
};

export default Immigration;
