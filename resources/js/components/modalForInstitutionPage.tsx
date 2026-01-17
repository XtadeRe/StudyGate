import { Link } from '@inertiajs/react';
import { ArrowsPointingInIcon } from '@heroicons/react/16/solid';

const modalForInstitutionPage = () => {
    return (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
            <div className="bg-white rounded-lg p-6 max-w-md w-full">
                <h2 className="text-xl font-bold mb-4">Оформление</h2>
                <Link className="underline text-blue-500 mb-4 inline-block">
                    Перед началом ознакомьтесь с тем как будет проходить наша работа
                    <ArrowsPointingInIcon className="w-4 h-4 inline ml-2" />
                </Link>
                <button className="disabled:bg-blue-300
                text-white pl-5 pr-5 pb-2 pt-2 rounded-2xl
                enabled:bg-blue-500" disabled>Далее</button>
                <form className="hidden">
                    <label>Ваше имя</label>
                </form>
            </div>
        </div>
    )
}

export default modalForInstitutionPage;
