const casual = require('casual')
const fs = require('fs')

const randomCategoryList = (n) => {
  const categoryList = []

  Array.from(new Array(n)).forEach(() => {
    if (n <= 0) return []
    const category = {
      id: casual.uuid,
      name: casual.name,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    }

    categoryList.push(category)
  })

  return categoryList
}

// IFFE
;(() => {
  // random data
  const categoryList = randomCategoryList(5)

  // prepare db object
  const db = {
    categories: categoryList,
    products: [],
    profile: {
      name: 'Tin',
    },
  }

  // write db object to db.json
  fs.writeFile('db.json', JSON.stringify(db), () => {
    console.log('Generate data successfully')
  })
})()
