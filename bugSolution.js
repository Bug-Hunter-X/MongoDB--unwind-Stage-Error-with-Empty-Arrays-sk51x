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
    $addFields: {
      result: { $ifNull: [ "$result", [] ] } //Handles the case of empty array
    }
  },
  {
    $unwind: "$result"
  }
];
```