migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5l6rvsu9s3094n7")

  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5l6rvsu9s3094n7")

  collection.viewRule = null

  return dao.saveCollection(collection)
})
