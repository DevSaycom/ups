<template>
    <section class="section bak">
        <div class="container is-responsive">
            <div class="columns is-multiline">
                <div
                    class="column is-one-third"
                    v-for="(article, index) in result"
                    :key="index">
                        <a :href="article.url" target="_blank">
                            <div class="card is-grey">
                                <div class="card-image">
                                    <figure class="image is-3by2">
                                        <img :src="article.urlToImage" :alt="article.title">
                                    </figure>
                                </div>
                                <div class="card-content cc">
                                    <div class="content is-title has-text-centered">
                                        <strong class="tag is-danger">{{ article.source }}</strong>
                                        <strong class="tag is-warning">{{ article.publishedAt2 }}</strong>
                                        <h1 class="title is-4 is-spaced has-text-centered has-text-weight-bold">{{ article.title }}</h1>
                                    </div>

                                </div>
                                <article class="card-content ss">
                                    <div class="content">
                                        <h3 class="is-family-primary is-italic has-text-weight-semibold is-size-5-desktop is-size-6-mobile has-text-justified has-text-grey" >{{ article.description }}</h3> 
                                    </div>
                                </article>

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
