<template>
    <b-carousel
    id="carousel-1"
    :interval="5000"
    controls
    indicators
    img-height="400px"
    style="text-shadow: 1px 1px 2px #333;">
        <!-- Text slides with image -->
        <b-carousel-slide :img-src="i1" height="400"></b-carousel-slide>

        <!-- Slides with custom text -->
        <b-carousel-slide :img-src="i2"></b-carousel-slide>

    </b-carousel>
</template>

<script>
import i1 from '@/assets/christmas-acc.jpg'
import i2 from '@/assets/sl2-acc.jpg'

export default {
    data: () => ({ i1, i2 })
}
</script>
