<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class BidRequest extends FormRequest
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
            'name' => 'required|string|max:30',
            'phone' => 'required|string|regex:/^([0-9\s\-\+\(\)]*)$/|min:10',
            'tg_username' => 'required|string|regex:/^@[a-zA-Z0-9_]{5,32}$/|max:32',
            'buy_method' => 'required|string',
        ];
    }
    public function messages(): array
    {
        return [
            'name.required' => 'Нам важно ваше имя',
            'name.string' => 'Имя содержит ошибки',
            'name.max' => 'Имя не должно превышать 30 символов',

            'phone.required' => 'Телефон обязателен для связи',
            'phone.string' => 'Телефон должен быть строкой',
            'phone.regex' => 'Неверный формат телефона',
            'phone.min' => 'Телефон должен содержать минимум 10 цифр',

            'tg_username.required' => 'Укажите ваш Telegram для связи',
            'tg_username.string' => 'Telegram username должен быть строкой',
            'tg_username.regex' => 'Неверный формат Telegram username. Должен начинаться с @ и содержать 5-32 символа (латиница, цифры, подчеркивание)',

            'buy_method.required' => 'Пожалуйста, выберите способ оплаты',
            'buy_method.string' => 'Способ покупки должен быть строкой',
        ];
    }
}
