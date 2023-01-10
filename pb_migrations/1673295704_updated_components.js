migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4oxrfqgx9v65f17")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "s97uiub5",
    "name": "category",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "5l6rvsu9s3094n7",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4oxrfqgx9v65f17")

  // remove
  collection.schema.removeField("s97uiub5")

  return dao.saveCollection(collection)
})
