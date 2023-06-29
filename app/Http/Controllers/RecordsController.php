<?php

namespace App\Http\Controllers;

use App\Http\Resources\RecordsResources;
use App\Models\records;
use App\Http\Requests\StorerecordsRequest;
use App\Http\Requests\UpdaterecordsRequest;

use Illuminate\Http\Response;
use Illuminate\Http\Request;


class RecordsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // $user = $request->user();
        //\Symfony\Component\HttpFoundation\Request $request
        // return RecordsResources::collection(
        //     records::all()
        // );
        $records = records::all();
        return response()->json($records);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StorerecordsRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StorerecordsRequest $request)
    {
        $data = $request->validated();

        $record = records::create([
            'cash_in' => $data['cash_in'],
            'cash_out' => $data['cash_out'],
            'deposited' => $data['deposited'],
            'in_hand_cash' => $data['in_hand_cash'],
            'remark' => $data['remark'],
            'record_date' => $data['record_date'],
            'site_id' => $data['site_id'],
        ]);


        return response([
            'record' => $record,
            //TODO
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\records  $records
     * @return \Illuminate\Http\Response
     */
    public function show(records $records)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\records  $records
     * @return \Illuminate\Http\Response
     */
    public function edit(records $records)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdaterecordsRequest  $request
     * @param  \App\Models\records  $records
     * @return \Illuminate\Http\Response
     * 
     */
    public function update(Request $request, $id)
    {
        $record = records::find($id);

        if(!$record){
            return response()->json(['message'=>'record not found'], 404);
        }
        $record->update($request->all());

        return response()->json(['message' => 'Record updated successfully']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\records  $records
     * @return \Illuminate\Http\Response
     */
    public function destroy(records $records)
    {
        $result = records::where('')->delete();
        return response()->json($result);
    }
    public function getData(Request $request)
    {
        $skey = $request->input("skey", '');
        $sdate = $request->input('sdate', '');

        $result = records::where('remark', 'like', '%' . $skey . '%')
            ->whereDate('record_date', $sdate)
            ->get();
        return response()->json($result);
    }

    public function delete(Request $request, $id)
    {
        $data = records::find($id);

        if (!$data) {
            return response()->json(['error' => 'Data not found.'], 404);
        }

        $data->delete();

        return response()->json(['message' => 'Data deleted successfully']);

    }
}