import DefaultLayout from '../layouts/DefaultLayouts';
import { useForm, Head } from '@inertiajs/react';
import { FormEvent } from 'react';
import {IMaskInput} from 'react-imask';

const Register = () => {
    const { data, setData, post, processing, errors } = useForm({
        login: '',
        email: '',
        phone: '',
        password: '',
        password_confirmation: '' // Изменено с password_confirmed
    });

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post('/register');
    };

    return (
        <DefaultLayout>
            <Head title="Регистрация" />

            <div className="auth_container">
                <form className="auth_form" onSubmit={handleSubmit}>
                    <label>Логин</label>
                    <input
                        type="text"
                        value={data.login}
                        onChange={(e) => setData('login', e.target.value)}
                        autoComplete="username"
                    />
                    {errors.login && <div className="error">{errors.login}</div>}

                    <label>Почта</label>
                    <input
                        type="email"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        autoComplete="email"
                    />
                    {errors.email && <div className="error">{errors.email}</div>}

                    <label>Телефон</label>
                    <IMaskInput
                        mask="+7 (000) 000-00-00"
                        value={data.phone}
                        onAccept={(value) => setData('phone', value)}
                        placeholder="+7 (999) 999-99-99"
                        autoComplete="tel"
                        className="tel"
                    />
                    {errors.phone && <div className="error">{errors.phone}</div>}

                    <label>Пароль</label>
                    <input
                        type="password"
                        value={data.password}
                        onChange={(e) => setData('password', e.target.value)}
                        autoComplete="new-password"
                    />

                    <label>Повторите пароль</label>
                    <input
                        type="password"
                        value={data.password_confirmation} // Изменено
                        onChange={(e) => setData('password_confirmation', e.target.value)} // Изменено
                        autoComplete="new-password"
                    />

                    {errors.password && <div className="error">{errors.password}</div>}
                    {errors.password_confirmation && <div className="error">{errors.password_confirmation}</div>}

                    <button type="submit" disabled={processing}>
                        {processing ? 'Регистрация...' : 'Зарегистрироваться'}
                    </button>
                </form>
            </div>
        </DefaultLayout>
    );
};

export default Register;
