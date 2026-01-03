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
            'login' => ['required', 'string'],
            'email' => ['required', 'email', 'unique:users'],
            'password' => ['required', 'min:8']
        ];
    }

    public function messages(): array
    {
        return [
          'login.required' => 'Логин обязателен для заполнения',
          'email.required' => 'Email обязателен для заполнения',
          'email.email' => 'Введите корректный email',
          'email.unique' => 'Email уже занят',
          'password.required' => 'Пароль обязателен для заполнения',
          'password.min' => 'Пароль должен иметь 8 символов',
        ];
    }
}
