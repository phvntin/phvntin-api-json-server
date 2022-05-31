const casual = require('casual')
const fs = require('fs')

const randomPostList = (numberOfPosts) => {
  if (numberOfPosts <= 0) return []
  const postList = []

  Array.from(new Array(numberOfPosts)).forEach(() => {
    const post = {
      id: casual.uuid,
      title: casual.title,
      author: `${casual.first_name} ${casual.last_name}`,
      description: casual.description,
      createdAt: Date.now(),
      updatedAt: Date.now(),
      imageUrl: `https://picsum.photos/id/${casual.integer(1, 999)}/1368/400`,
    }

    postList.push(post)
  })

  return postList
}

// IFFE
;(() => {
  // random data
  const postList = randomPostList(50)

  // prepare db object
  const db = {
    posts: postList,
  }

  // write db object to db.json
  fs.writeFile('db.json', JSON.stringify(db), () => {
    console.log('Generate data successfully')
  })
})()
