migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5l6rvsu9s3094n7")

  collection.listRule = ""
  collection.createRule = ""
  collection.updateRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5l6rvsu9s3094n7")

  collection.listRule = null
  collection.createRule = null
  collection.updateRule = null

  return dao.saveCollection(collection)
})
