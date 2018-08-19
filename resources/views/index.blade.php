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
        <div class="slide">
            <div class="container grid-x grid-padding-x align-middle">
                <h1 class="cell small-12 medium-shrink title text-left">SEE <span class="light">PROJECTS</span></h1>
                <h2 class="cell small-12 medium-auto subtitle text-right">SLIDE <span class="light">RIGHT</span><br>TO SEE</h2>
            </div>
        </div>
        <!-- <div class="slide" style="background: linear-gradient(rgba(255, 255, 255, 0.4),rgba(255, 255, 255, 0.4)), url({{ asset('img/portofolio/EUREKA/04.png') }});"> -->
        <div class="slide">
            <div class="overlay-container" style="background-image: url({{ asset('img/portofolio/EUREKA/04.png') }});">
                <div class="overlay-content">
                    <div class="container grid-x grid-padding-x align-middle" style="height: 75vh;">
                        <div class="cell small-12 medium-shrink text-left project-detail">
                            <h1 class="title text-left">EUREKA</h1>
                            <h3 class="subtitle text-left">E-COMMERCE WEBSITE</h3>
                        </div>
                        <div class="cell small-12 medium-auto text-center">
                            <div class="overlay-container screen" style="background-image: url({{ asset('img/computer.png') }});">
                                <!-- <img src="{{ asset('img/computer.png') }}" alt="computer"> -->
                                <div class="overlay-content grid-x align-middle align-center text-center" style="height: 50vh; width: 100%;">
                                    <button class="button success light" type="button" name="button">SEE MORE</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection

@section('extra-js')
<script type="application/javascript" src="{{ asset('js/index.js') }}"></script>
@endsection
