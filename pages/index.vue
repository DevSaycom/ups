<template>
    <section class="section">
        <div class="container">
            <div class="columns is-multiline">
                <div
                    class="column is-5-tablet is-4-desktop is-3-fullhd"
                    v-for="(article, index) in result"
                    :key="index">
                        <a :href="article.url" target="_blank">
                            <div class="card is-storyworld">
                                <div class="card-image">
                                    <figure class="image is-3by2">
                                        <img :src="article.urlToImage" :alt="article.title">
                                    </figure>
                                <div class="level">
                                    <div class="level-right">
                                        <div class="tags has-addons">
                                            <div class="item-category tag has-text-danger">{{article.source}}</div>
                                            <div class="item-category tag has-text-link">{{article.publishedAt2}}</div>
                                        </div>
                                    </div>
                                </div>
                                </div>

                                <div class="card-content">
                                    <div class="card-title">{{ article.title }}</div>
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
