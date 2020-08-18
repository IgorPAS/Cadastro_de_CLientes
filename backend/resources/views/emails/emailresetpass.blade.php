@component('mail::message')
<h1>Recuperar Senha</h1>

@component('mail::button', ['url' => 'http://localhost:4200/response-reset-password?token='.$token])
Click para Redefnir sua senha
@endcomponent

Obrigado,<br>
{{ config('app.name') }}
@endcomponent
