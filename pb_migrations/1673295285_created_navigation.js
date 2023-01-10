migrate((db) => {
  const collection = new Collection({
    "id": "z4jc5eg9jzjhmmd",
    "created": "2023-01-09 20:14:45.524Z",
    "updated": "2023-01-09 20:14:45.524Z",
    "name": "navigation",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ufbryepc",
        "name": "name",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "gfeixrl3",
        "name": "slug",
        "type": "text",
        "required": true,
        "unique": true,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("z4jc5eg9jzjhmmd");

  return dao.deleteCollection(collection);
})
