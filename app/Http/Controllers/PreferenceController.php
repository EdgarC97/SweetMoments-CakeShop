<?php

namespace App\Http\Controllers;

use App\Http\Requests\PreferenceRequest;
use App\Models\Preference;
use App\Models\Client;

class PreferenceController extends Controller
{
    /**
     * Store a newly created resource in storage.
     */
    public function store(PreferenceRequest $request, Client $client)
    {
        // Creamos la preferencia para el cliente específico
        $client->clientPreferences()->create($request->validated());
        return redirect()->route('clients.show', $client)->with('success', 'Preferencia agregada correctamente.');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(PreferenceRequest $request, Preference $preference)
    {
        $preference->update($request->validated());
        return redirect()->route('clients.show', $preference->client_id)->with('success', 'Preferencia actualizada correctamente.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Preference $preference)
    {
        $preference->delete();
        return redirect()->route('clients.show', $preference->client_id)->with('success', 'Preferencia eliminada correctamente.');
    }
}