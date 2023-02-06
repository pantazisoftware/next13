migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4oxrfqgx9v65f17")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ddlo4xty",
    "name": "image",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [
        "image/jpg",
        "image/jpeg",
        "image/png",
        "image/svg+xml",
        "image/gif",
        "image/webp"
      ],
      "thumbs": [
        "300x300"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4oxrfqgx9v65f17")

  // remove
  collection.schema.removeField("ddlo4xty")

  return dao.saveCollection(collection)
})
