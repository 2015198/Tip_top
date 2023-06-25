<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class RecordsResources extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'cash_in' => $this->cash_in,
            'cash_out' => $this->cash_out,
            'deposited' => $this->deposited,
            'in_hand_cash' => $this->in_hand_cash,
            'remarks' => $this->remarks,
            'user_id' => $this->user_id,
            'site_id' => $this->site_id,
            'record_date' => $this->record_date->format('Y-m-d H:i:s'),
            'created_at' => $this->created_at->format('Y-m-d H:i:s'),
            'updated_at' => $this->updated_at->format('Y-m-d H:i:s'),
        ];
    }
}
