import { Link } from '@inertiajs/react';
import { ArrowsPointingInIcon, XMarkIcon } from '@heroicons/react/16/solid';
const modalForInstitutionPage = ({onClose}) => {

    return (
        <div onClick={onClose} className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
            <div onClick={(e) => e.stopPropagation()} className="bg-white rounded-lg p-6 max-w-md w-full">
                <div className="flex">
                <h2 className="text-xl font-bold mb-4">Оформление</h2>
                <XMarkIcon onClick={onClose} className="w-8 text-gray-300 ml-auto
                mr-0 mb-3 cursor-pointer
                hover:text-gray-400 duration-300" />
                </div>
                <Link href="/immigration" className="underline text-blue-500 mb-4 inline-block">
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
