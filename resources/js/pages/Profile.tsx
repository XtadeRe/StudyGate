import DefaultLayout from '@/layouts/DefaultLayouts';
import { PageProps } from '@inertiajs/core';
import { UserIcon, EnvelopeIcon, PhoneIcon, ShieldCheckIcon, CalendarIcon } from '@heroicons/react/24/outline';
import "../../css/Profile.css";

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

interface Props extends PageProps {
    user: User;
}

const Profile = ({ user }: Props) => {
    return (
        <DefaultLayout>
            <div className="profile-container">
                <div className="profile-content">
                    {/* Заголовок */}
                    <div className="profile-header mb-8">
                        <h1 className="profile-title">Личный кабинет</h1>
                        <p className="profile-subtitle">Управление вашими данными и настройками</p>
                    </div>

                    <div className="profile-grid">
                        {/* Левая колонка - Аватар и основная информация */}
                        <div className="lg:col-span-1">
                            <div className="profile-card">
                                <div className="avatar-section">
                                    {user.avatar ? (
                                        <img
                                            src={user.avatar}
                                            alt={user.login}
                                            className="avatar-image"
                                        />
                                    ) : (
                                        <div className="avatar-placeholder">
                                            <UserIcon className="w-12 h-12 text-gray-400" />
                                        </div>
                                    )}
                                    <div className="avatar-info">
                                        <h2 className="username">{user.login}</h2>
                                        <span className="user-status">
                                            <ShieldCheckIcon className="w-4 h-4" />
                                            Активный аккаунт
                                        </span>
                                    </div>
                                </div>

                                <div className="info-grid">
                                    <div className="info-item">
                                        <div className="info-label">
                                            <EnvelopeIcon className="info-icon" />
                                            Email
                                        </div>
                                        <div className="info-value">{user.email}</div>
                                    </div>

                                    <div className="info-item">
                                        <div className="info-label">
                                            <PhoneIcon className="info-icon" />
                                            Телефон
                                        </div>
                                        <div className="info-value">{user.phone}</div>
                                    </div>

                                    {user.created_at && (
                                        <div className="info-item">
                                            <div className="info-label">
                                                <CalendarIcon className="info-icon" />
                                                Дата регистрации
                                            </div>
                                            <div className="info-value">
                                                {new Date(user.created_at).toLocaleDateString('ru-RU')}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Правая колонка - Настройки и действия */}
                        <div className="lg:col-span-2">
                            <div className="settings-card">
                                <h3 className="settings-title">Безопасность</h3>
                                <div className="security-section">
                                    <div className="security-item">
                                        <div className="security-info">
                                            <h4 className="security-title">Пароль</h4>
                                            <p className="security-description">Измените ваш пароль для повышения безопасности</p>
                                        </div>
                                        <button className="security-button">
                                            Изменить пароль
                                        </button>
                                    </div>
                                </div>

                                <div className="divider"></div>

                                <h3 className="settings-title">Действия с аккаунтом</h3>
                                <div className="actions-grid">
                                    <button className="action-button action-primary">
                                        Редактировать профиль
                                    </button>
                                    <button className="action-button action-secondary">
                                        Выйти из аккаунта
                                    </button>
                                </div>
                            </div>

                            {/* Статистика (если будет нужно) */}
                            <div className="stats-card">
                                <h3 className="stats-title">Статистика аккаунта</h3>
                                <div className="stats-grid">
                                    <div className="stat-item">
                                        <div className="stat-label">ID пользователя</div>
                                        <div className="stat-value">#{user.id}</div>
                                    </div>
                                    <div className="stat-item">
                                        <div className="stat-label">Заявок подано</div>
                                        <div className="stat-value">0</div>
                                    </div>
                                    <div className="stat-item">
                                        <div className="stat-label">В избранном</div>
                                        <div className="stat-value">0</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
};

export default Profile;
