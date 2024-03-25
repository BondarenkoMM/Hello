db.articles.find(
    {
        tags: {$all: ['beta', 'alpha']}
    })