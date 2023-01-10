migrate((db) => {
  const collection = new Collection({
    "id": "4oxrfqgx9v65f17",
    "created": "2023-01-09 20:13:08.391Z",
    "updated": "2023-01-09 20:13:08.391Z",
    "name": "components",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "j6seebbb",
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
        "id": "h6531m7r",
        "name": "code",
        "type": "text",
        "required": true,
        "unique": false,
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
  const collection = dao.findCollectionByNameOrId("4oxrfqgx9v65f17");

  return dao.deleteCollection(collection);
})
