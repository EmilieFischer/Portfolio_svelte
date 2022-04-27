<script>
    export let src;
    export let title;
    export let text;
    export let color;
    export let url;

</script>

<section id="card_projects">
    <a href={url} target="_blank">
    <img class="block bg-{color}" src={src} alt="project_picture">
    <div class="overlay">
        <div class="text-overlay">
            <h4>{title}</h4>
            <div class="overlay_underline"></div>
            <p class="overlay-text-description">{text}</p>
        </div>
    </div></a>
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
    background-color: #ffffff52;
}

.text-overlay {
    color: #000000;
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

</style>


