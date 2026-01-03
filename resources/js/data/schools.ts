import osakaSchool from "../../images/osakaSchool.jpeg"

export const schools = [
    {
        id: 1,
        name: 'Tokyo International Japanese School',
        city: 'Токио',
        district: 'Синдзюку',
        description: 'Интенсивные курсы японского языка с акцентом на бизнес-коммуникацию и подготовку к JLPT N1. Современные аудитории в самом центре Токио.',
        price: 85000,
        currency: '¥',
        period: 'месяц',
        rating: 4.8,
        views: 1247,
        image: osakaSchool,
        tags: ['N1 Подготовка', 'Бизнес-японский', 'Общежитие', 'Онлайн-курсы'],
        featured: true,
        click_count: 156
    },
    {
        id: 2,
        name: 'Kyoto Language Academy',
        city: 'Киото',
        district: 'Хигасияма',
        description: 'Традиционная школа с культурным погружением. Уникальная программа включает чайные церемонии, каллиграфию и исторические экскурсии.',
        price: 78000,
        currency: '¥',
        period: 'месяц',
        rating: 4.9,
        views: 987,
        image: osakaSchool,
        tags: ['Культурная программа', 'N2-N3', 'История Японии', 'Маленькие группы'],
        featured: true,
        click_count: 132
    },
    {
        id: 3,
        name: 'Osaka Communication School',
        city: 'Осака',
        district: 'Намба',
        description: 'Специализация на разговорном японском и диалекте Кансай. Идеально для тех, кто хочет работать в западной Японии.',
        price: 72000,
        currency: '¥',
        period: 'месяц',
        rating: 4.6,
        views: 845,
        image: osakaSchool,
        tags: ['Разговорный', 'Диалект Кансай', 'Стажировки', 'Нетворкинг'],
        featured: false,
        click_count: 98
    }
];
