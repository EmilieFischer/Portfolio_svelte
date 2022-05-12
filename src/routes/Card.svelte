<script>
    export let src;
    export let title;
    export let url;

</script>

<section id="card_projects">
    <a href={url} target="_blank">
    <img class="block" src={src} alt="project_picture">
    <div class="overlay">
        <div class="text-overlay">
            <h4 class="text-2xl md:text-3xl roboto uppercase font-medium pl-4 pt-4">{title}</h4>
            <div class="overlay_underline"></div>
        </div>
    </div></a>
</section>




<style>


.roboto {
        font-family: 'roboto flex' ;
    }

/* .overlay-text-description {
    line-height: 1.5;
} */
.overlay_underline {
    display: block;
    width: 75px;
    border: 1.5px solid;
    margin-top: 10px;
    margin-bottom: 15px;
    color: #fff;
    margin-left: 1rem;
}

#card_projects {
    position: relative;
    border: 5px solid #201abd;

}

img {
    display: block;
    width: 100%;
    height: auto;
}

.text-overlay {
    color: #fff;
    background-color: #201abd;
    position: absolute;
    top: 0%;
    width: 100%;
    margin-right: 12px;
}


@media screen and (min-width: 600px) {
 
.overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 20%;
    width: 100%;
    opacity: 0;
    transition: .5s ease;
    background-color: #201abd;

    /* background-color: #ffffff7a; */
}

.text-overlay {
    color: #fff;
    background-color: #201abd;
    position: absolute;
    width: 100%;
    margin-right: 12px;
}

#card_projects:hover .overlay {
    opacity: 1;
}
}


</style>


