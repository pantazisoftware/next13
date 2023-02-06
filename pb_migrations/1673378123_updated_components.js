migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4oxrfqgx9v65f17")

  collection.listRule = "@collection.components.created <= @request.auth.updated"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4oxrfqgx9v65f17")

  collection.listRule = null

  return dao.saveCollection(collection)
})
