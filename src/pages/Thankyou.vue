<template>
    <Layout>
        <section class="text-black">
                <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                    <div class="text-center lg:w-2/3 w-full">
                        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-semibold">
                            Thank You!</h1>
                        <p class="leading-relaxed mb-8 font-normal">We have received your consultation submission and will be in touch with you shortly.
                        </p>
                        <div class="flex justify-center">
                                <g-link to="https://wesleymok.github.io/tod-webdev-demo/?utm_source=google&utm_medium=email&utm_campaign=2020%2BEBike%2BSale&utm_term=city%2Bcycle">
                                    <button class="shadow bg-orange-500 hover:bg-orange-400 focus:shadow-outline focus:outline-none text-white font-semibold py-2 px-4 rounded" type="button">
                                        Return to Home
                                      </button>
                                </g-link>
                        </div>
                    </div>
                </div>
            </section>
    </Layout>
</template>
      
<script>
    export default {
        metaInfo: {
            title: 'Thank You!'
        }
    }
</script>