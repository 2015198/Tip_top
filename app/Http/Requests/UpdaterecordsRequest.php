<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdaterecordsRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'cash_in' => 'required|integer',
            'cash_out' => 'required|integer',
            'deposited' => 'required|integer',
            'in_hand_cash' => 'required|integer',
            'remark' => 'required|string|max:200',
            'site_id' => 'required|integer',
            'record_date' => 'required|date|before:today',
            'user_id' => 'exists:users,id'
        ];
    }
}
