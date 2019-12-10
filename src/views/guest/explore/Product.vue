<template>
    <div class="standard-page">
        <div class="row">
            <div class="col-md-6">
                image

                title

                description
            </div>

            <div class="col-md-6">
                price

                addtocart

                fake reviews with stars
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: { productId: { required: true, type: String } },

    data: () => ({

    })
}
</script>

<style>

</style>