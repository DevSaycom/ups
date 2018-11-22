<template>
    <section class="section">
        <div class="container">
            <div class="columns is-multiline">
                <div
                    class="column is-one-third"
                    v-for="(article, index) in result"
                    :key="index">
                        <a :href="article.url" target="_blank">
                            <div class="card is-sady">
                                <div class="card-image">
                                    <figure class="image is-3by2">
                                        <img :src="article.urlToImage" :alt="article.title">
                                    </figure>
                                </div>
                                <div class="card-content">
                                    <div class="content has-text-centered">
                                        <strong class="tag is-danger">{{ article.source }}</strong>
                                        <strong class="tag is-warning">{{ article.publishedAt2 }}</strong>
                                        <h1 class="title is-family-sans-serif is-4 is-spaced has-text-grey has-text-centered has-text-weight-semi-bold">{{ article.title }}</h1>
                                    </div>
                                </div>
                            </div>
                        </a>
                </div>
            </div>
        </div>
    </section>
</template>






<script>


export default {
    head() {
        return {
            titleTemplate: '%s | All Things Artifact',
            mets: [
                {name: 'description', content: 'All Things Artifact'},
                {name: 'og:description', content:'All Things Artifact'},
            ]
        }
    },
    async asyncData({ app }) {
        const { articles } = await app.$axios.$get(
            `http://localhost:3000/api/v1/${process.env.API_KEY}/articles`
            )

                function compare(a,b) {
                    if (a.publishedAt < b.publishedAt)
                        return -1;
                    if (a.publishedAt > b.publishedAt)
                        return 1;
                    return 0;
                }

                let result = articles.sort(compare).reverse()


                return { result }
    }
}
</script>

<style>
</style>
