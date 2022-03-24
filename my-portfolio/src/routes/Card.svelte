<script>
    export let src;
    export let title;
    export let text;

</script>

<section id="card_projects" class="h-96 w-96 bg-gray-700 mb-9">
    <img class="block" src={src} alt="">
    <div class="overlay">
        <div class="text-overlay">
            <h4>Billetsalg.dk</h4>
            <div class="overlay_underline"></div>
            <p class="overlay-text-description">Videoredigering</p>
        </div>
    </div>
</section>

<style>
.overlay-text-description {
    font-size: 65%;
    line-height: 1.5;
}
.overlay_underline {
    display: block;
    border-radius: 10%;
    width: 75px;
    border: 2px solid;
    margin-top: 10px;
    margin-bottom: 15px;
}
#card_projects {
    position: relative;
}

img {
    display: block;
    width: 100%;
    height: auto;
}

.overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: .5s ease;
    background-color: #222A31;
}

.text-overlay {
    color: #fff;
    font-size: 20px;
    position: absolute;
    top: 13%;
    left: 8%;
    max-width: 100%;
    margin-right: 12px;
}

#card_projects:hover .overlay {
    opacity: 0.9;
}

/* 



    #card_projects:hover {
        background-color: white;
        opacity: 70%;
        cursor: pointer;
    } */

</style>


