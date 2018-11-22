const Article = require('../../models/article.model')

let newDate

exports.get_all = (req, res, next) => {



  Article.find()
  .exec()
  .then((docs) => {
    const response = {
      articles: docs.map(doc => {
        let desc = (doc.description).replace(/^(.{200}[^\s]*).*/, "$1") + "..." + "\n"
        let det = new Date(doc.publishedAt)
        let mes = (det).getUTCMonth() + 1
        let day = (det).getUTCDate()
        let año = (det).getUTCFullYear()
        let añoString = año.toString()
        let añoCorto = añoString.substring(2)





        return {
          _id: doc._id,
          source: doc.source,
          author: doc.author,
          title: doc.title,
          description: desc,
          url: doc.url,
          urlToImage: doc.urlToImage,
          publishedAt: doc.publishedAt,
          publishedAt2: day + '/' + mes + '/' + añoCorto
        }
      })
    }


    res.status(200).json(response)

  }).catch((err) => {
    res.status(500).json({
      error: err
    })
  })
}