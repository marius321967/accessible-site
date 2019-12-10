<template>
    <div class="home">
        <div class="container">
            <carousel class="carousel-regular"></carousel>
            <carousel-accessible class="carousel-accessible"></carousel-accessible>
        </div>
    </div>
</template>

<script>
import Carousel from './home/Carousel'
import CarouselAccessible from './home/CarouselAccessible'

export default {
    components: { Carousel, CarouselAccessible }
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
</style>
