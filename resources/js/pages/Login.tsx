import DefaultLayout from '../layouts/DefaultLayouts';
import {useForm, Head} from '@inertiajs/react';
import {FormEvent} from 'react';

const Login = () => {
    const {data, setData, post, processing, errors} = useForm({
        email: '',
        password: '',
    });

    const handleSubmit = (e: FormEvent<HTMLFormElement>)=> {
        e.preventDefault();
        post('/login');
    };

    return (
        <DefaultLayout>
            <Head title='Вход в систему' />

            <div className="auth_container">
                <form className="auth_form" onSubmit={handleSubmit}>

                    <label>Email</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        autoComplete="email"
                        required
                    />
                    {errors.email && <>Неверный Email или пароль</> }
                    <label>Пароль</label>
                    <input
                        id="password"
                        type="password"
                        value={data.password}
                        onChange={(e) => setData('password', e.target.value)}
                        autoComplete="current-password"
                        required
                    />
                    {errors.password && <>Неверный Email или пароль</> }
                    <button type="submit" disabled={processing}>
                        {processing ? 'Вход' : 'Войти'}
                    </button>
                </form>
            </div>
        </DefaultLayout>
    );
}; export default Login
