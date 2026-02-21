import DefaultLayout from '@/layouts/DefaultLayouts';
import "../../../css/FillBid.css";
import { PageProps } from '@inertiajs/core';
import { useDropzone } from 'react-dropzone';
import { useCallback, useState } from 'react';
import { router } from '@inertiajs/react';

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

interface Institution {
    id: number,
    name: string,
    description: string,
    country: string,
    city: string,
    type: string,
    image_url: string,
    rating: number,
    featured: number,
    programs: string,
    price_from: number,
    price_to: number,
    currency: string,
    views: number,
}

interface Bid {
    id: number,
    user_id: number,
    institution_id: number,
    name: string,
    phone: string,
    tg_username: string,
    buy_method: string,
    files: FileInfo[] | null,
    created_at: string,
    status?: 'pending' | 'approved' | 'rejected' | 'completed' | 'cancelled',
    institution?: Institution;
}

interface FileInfo {
    name: string;
    path: string;
    url: string;
    size: number;
    mime: string;
}

interface Props extends PageProps {
    user: User;
    bid: Bid;
}

interface UploadedFile extends File {
    id: string;
    preview?: string;
}

const FillBid = ({ bid }: Props) => {
    const [files, setFiles] = useState<UploadedFile[]>([]);
    const [uploading, setUploading] = useState(false);

    const onDrop = useCallback((acceptedFiles: File[]) => {
        const newFiles = acceptedFiles.map(file => {
            const uploadedFile = file as UploadedFile;
            uploadedFile.id = `${file.name}-${Date.now()}-${Math.random()}`;

            if (file.type.startsWith('image/')) {
                uploadedFile.preview = URL.createObjectURL(file);
            }

            return uploadedFile;
        });

        setFiles(prev => [...prev, ...newFiles]);
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        multiple: true,
        accept: {
            'image/*': ['.png', '.jpg', '.jpeg', '.gif'],
            'application/pdf': ['.pdf'],
            'application/msword': ['.doc'],
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx']
        }
    });

    const removeFile = (id: string) => {
        setFiles(prev => {
            const fileToRemove = prev.find(f => f.id === id);
            if (fileToRemove?.preview) {
                URL.revokeObjectURL(fileToRemove.preview);
            }
            return prev.filter(f => f.id !== id);
        });
    };

    const deleteServerFile = (filePath: string) => {
        if (confirm('Вы уверены, что хотите удалить этот файл?')) {
            router.delete(`/bids/${bid.id}/delete-file`, {
                data: { file_path: filePath },
                onSuccess: () => {
                    alert('Файл успешно удален');
                },
                onError: () => {
                    alert('Ошибка при удалении файла');
                }
            });
        }
    };

    const formatFileSize = (bytes: number): string => {
        if (bytes < 1024) return bytes + ' B';
        if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
        return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (files.length === 0) {
            alert('Пожалуйста, выберите файлы для загрузки');
            return;
        }

        setUploading(true);

        const formData = new FormData();

        files.forEach((file) => {
            formData.append('files[]', file);
        });

        router.post(`/bids/${bid.id}/upload-files`, formData, {
            onSuccess: () => {
                alert('Файлы успешно загружены!');
                files.forEach(file => {
                    if (file.preview) {
                        URL.revokeObjectURL(file.preview);
                    }
                });
                setFiles([]);
            },
            onError: (errors) => {
                console.error('Ошибка загрузки:', errors);
                alert('Произошла ошибка при загрузке файлов');
            },
            onFinish: () => {
                setUploading(false);
            }
        });
    };

    return (
        <DefaultLayout>
            <div className="FillBid-container">
                <div className="FillBid-content">
                    <h1 className="text-2xl font-bold mb-6">Добавление документов</h1>

                    <form onSubmit={handleSubmit} className="bid-info-form max-w-2xl mx-auto">
                        {/* Dropzone для загрузки файлов */}
                        <div className="user-documents mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Приложите сюда свои документы
                            </label>

                            <div
                                {...getRootProps()}
                                className={`dropzone border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors
                                    ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-400'}`}
                            >
                                <input {...getInputProps()} />
                                {isDragActive ? (
                                    <p className="text-blue-500">Отпустите файлы для загрузки...</p>
                                ) : (
                                    <div>
                                        <p className="text-gray-600 mb-2">
                                            Перетащите файлы сюда или кликните для выбора
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            Поддерживаются: изображения, PDF, DOC, DOCX
                                        </p>
                                    </div>
                                )}
                            </div>

                            {/* Список выбранных файлов для загрузки */}
                            {files.length > 0 && (
                                <div className="mt-4">
                                    <h4 className="font-medium mb-2">Новые файлы для загрузки ({files.length}):</h4>
                                    <div className="space-y-2">
                                        {files.map((file) => (
                                            <div
                                                key={file.id}
                                                className="flex items-center justify-between p-2 bg-gray-50 rounded-lg"
                                            >
                                                <div className="flex items-center space-x-3">
                                                    {file.preview ? (
                                                        <img
                                                            src={file.preview}
                                                            alt={file.name}
                                                            className="w-10 h-10 object-cover rounded"
                                                        />
                                                    ) : (
                                                        <div className="w-10 h-10 bg-gray-200 rounded flex items-center justify-center">
                                                            <span className="text-lg">📄</span>
                                                        </div>
                                                    )}
                                                    <div>
                                                        <p className="text-sm font-medium text-gray-700">
                                                            {file.name.length > 30
                                                                ? file.name.substring(0, 27) + '...'
                                                                : file.name}
                                                        </p>
                                                        <p className="text-xs text-gray-500">
                                                            {formatFileSize(file.size)}
                                                        </p>
                                                    </div>
                                                </div>
                                                <button
                                                    type="button"
                                                    onClick={() => removeFile(file.id)}
                                                    className="text-red-500 hover:text-red-700 p-1"
                                                    title="Удалить файл"
                                                >
                                                    ✕
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Информация об учебном заведении */}
                        {bid.institution && (
                            <div className="w-full mb-6 p-4 bg-gray-100 rounded-lg">
                                <h3 className="font-bold text-lg mb-2">Информация об учебном заведении</h3>
                                <p className="text-gray-700">
                                    <span className="font-medium">Название:</span> {bid.institution.name}
                                </p>
                                <p className="text-gray-700">
                                    <span className="font-medium">Город:</span> {bid.institution.city}, {bid.institution.country}
                                </p>
                                <p className="text-gray-700">
                                    <span className="font-medium">Стоимость от:</span> {bid.institution.price_from} {bid.institution.currency}
                                </p>
                            </div>
                        )}

                        <div className="w-full flex gap-4 mt-6">
                            <button
                                type="submit"
                                disabled={uploading}
                                className={`flex-1 font-bold py-3 px-4 rounded-lg transition duration-300
                                    ${uploading
                                    ? 'bg-gray-400 cursor-not-allowed'
                                    : 'bg-blue-500 hover:bg-blue-700 text-white'
                                }`}
                            >
                                {uploading ? 'Загрузка...' : 'Отправить документы'}
                            </button>
                            <button
                                type="button"
                                className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-4 rounded-lg transition duration-300"
                                onClick={() => window.history.back()}
                                disabled={uploading}
                            >
                                Отмена
                            </button>
                        </div>
                    </form>

                    {bid.files && Array.isArray(bid.files) && bid.files.length > 0 && (
                        <div className="mt-8">
                            <h3 className="font-bold text-lg mb-4">Загруженные документы:</h3>
                            <div className="space-y-2">
                                {bid.files.map((file: FileInfo, index: number) => (
                                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                        <div className="flex items-center space-x-3">
                                            <span className="text-lg">📄</span>
                                            <div>
                                                <p className="text-sm font-medium">{file.name}</p>
                                                <p className="text-xs text-gray-500">
                                                    {formatFileSize(file.size)}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex gap-2">
                                            <a
                                                href={file.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-500 hover:text-blue-700 text-sm px-3 py-1 border border-blue-500 rounded"
                                            >
                                                Скачать
                                            </a>
                                            <button
                                                onClick={() => deleteServerFile(file.path)}
                                                className="text-red-500 hover:text-red-700 text-sm px-3 py-1 border border-red-500 rounded"
                                            >
                                                Удалить
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </DefaultLayout>
    );
};

export default FillBid;
