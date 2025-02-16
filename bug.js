```javascript
const pipeline = [
  {
    $lookup:
      {
        from: "collection2",
        localField: "_id",
        foreignField: "_id",
        as: "result"
      }
  },
  {
    $unwind: "$result" //Error prone if collection2 might be empty for some documents
  }
];
```