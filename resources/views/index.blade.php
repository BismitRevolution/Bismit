@extends('main')

@section('title', config('app.name'))

@section('extra-css')
<link rel="stylesheet" href="{{ asset('css/index.css') }}">
@endsection

@section('content')
<div id="fullpage">
    <div id="onboard" class="section bg-dark light" data-anchor="section-onboard">
        <div class="container grid-x grid-padding-x align-middle align-center">
            <h1 class="cell small-12 medium-shrink title text-left">WE <span class="blue">CREATE</span></h1>
            <h2 class="cell small-12 medium-auto subtitle text-right">TO BRING <span class="blue">REVOLUTION</span><br>TO OUR WORLD</h2>
        </div>
    </div>
    <div id="design" class="section bg-light dark" data-anchor="section-design">
        <div class="container grid-x grid-padding-x align-middle">
            <h1 class="cell small-12 medium-shrink title text-left">WE <span class="blue">DESIGN</span></h1>
            <h2 class="cell small-12 medium-auto subtitle text-right">TO EXPLORE <span class="blue">CREATIVITY</span><br>BEYOND CAPABILITIES</h2>
        </div>
    </div>
    <div id="projects" class="section bg-blue dark" data-anchor="section-projects">
        <div class="container grid-x grid-padding-x align-middle">
            <h1 class="cell small-12 medium-shrink title text-left">SEE <span class="light">PROJECTS</span></h1>
            <h2 class="cell small-12 medium-auto subtitle text-right">SLIDE <span class="light">RIGHT</span><br>TO SEE</h2>
        </div>
    </div>
</div>
@endsection

@section('extra-js')
<script type="application/javascript" src="{{ asset('js/index.js') }}"></script>
@endsection
