import DefaultLayout from '../layouts/DefaultLayouts';
import { useForm, Head } from '@inertiajs/react';
import { FormEvent } from 'react';

const Register = () => {
    const { data, setData, post, processing, errors } = useForm({
        login: '',
        email: '',
        password: ''
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

                    <label>Пароль</label>
                    <input
                        type="password"
                        value={data.password}
                        onChange={(e) => setData('password', e.target.value)}
                        autoComplete="new-password"
                    />
                    {errors.password && <div className="error">{errors.password}</div>}

                    <button type="submit" disabled={processing}>
                        {processing ? 'Регистрация...' : 'Зарегистрироваться'}
                    </button>
                </form>
            </div>
        </DefaultLayout>
    );
};

export default Register;
