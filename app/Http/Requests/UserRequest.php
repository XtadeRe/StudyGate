<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'login' => ['required', 'string', 'min:4', 'max:30', 'unique:users'],
            'email' => ['required', 'email', 'unique:users'],
            'phone' => ['required', 'string', 'unique:users', 'regex:/^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/'],
            'password' => ['required', 'min:8', 'confirmed']
        ];
    }

    public function messages(): array
    {
        return [
            'login.required' => 'Логин обязателен для заполнения',
            'login.unique' => 'Пользователь с таким логином уже существует',
            'login.max' => 'Логин слишком длинный',
            'login.min' => 'Логин должен содержать минимум 4 символа',
            'email.required' => 'Email обязателен для заполнения',
            'email.email' => 'Введите корректный email',
            'email.unique' => 'Email уже занят',
            'phone.required' => 'Номер телефона обязателен',
            'phone.unique' => 'Пользователь с таким номером телефона уже существует',
            'phone.regex' => 'Номер телефона некорректен',
            'password.required' => 'Пароль обязателен для заполнения',
            'password.min' => 'Пароль должен содержать минимум 8 символов',
            'password.confirmed' => 'Пароли не совпадают',
        ];
    }
}
