<?php

namespace App\Http\Controllers;

use App\Models\site;
use App\Http\Requests\StoresiteRequest;
use App\Http\Requests\UpdatesiteRequest;

class SiteController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = $request->user();
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
     * @param  \App\Http\Requests\StoresiteRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoresiteRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\site  $site
     * @return \Illuminate\Http\Response
     */
    public function show(site $site)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\site  $site
     * @return \Illuminate\Http\Response
     */
    public function edit(site $site)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdatesiteRequest  $request
     * @param  \App\Models\site  $site
     * @return \Illuminate\Http\Response
     */
    public function update(UpdatesiteRequest $request, site $site)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\site  $site
     * @return \Illuminate\Http\Response
     */
    public function destroy(site $site)
    {
        //
    }
}
