migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4oxrfqgx9v65f17")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jvnzod8u",
    "name": "language",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4oxrfqgx9v65f17")

  // remove
  collection.schema.removeField("jvnzod8u")

  return dao.saveCollection(collection)
})
