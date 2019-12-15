<template>
    <div class="home">
        <div class="container">
            <carousel class="carousel-regular"></carousel>
            <carousel-accessible class="carousel-accessible"></carousel-accessible>

            <h5 class="my-4">Popular products</h5>
            <products></products>
        </div>
    </div>
</template>

<script>
import Carousel from './home/Carousel'
import CarouselAccessible from './home/CarouselAccessible'
import Products from './home/Products'

export default {
    components: { Carousel, CarouselAccessible, Products }
}
</script>

<style lang="scss">
.accessible {
    .carousel-regular {
        display: none;
    }
    .carousel-accessible {
        display: block;
    }
}

.carousel-accessible {
    display: none;
}

.carousel-regular, .carousel-accessible { margin-bottom: 1rem }
</style>
