export default {
    create: {
        id: {
          isAlphanumeric: true,
          in: ["body"],
          isEmpty: {
            errorMessage: "Id is Required",
            negated: true,
          },
          custom: {
            options: (value) => {
              console.log("Value", value);
              return true;
            },
          },
        },
        name: {
          in: ["body"],
          isEmpty: {
            errorMessage: "Name is Required",
            negated: true,
          },
          isLength: {
            errorMessage: "Name should be 4 character long",
            options: { min: 4 },
          },
          matches: {
            options: [/(\w+)$/],
            errorMessage: "Name should be in format",
          },
        },
      },
      delete: {
        id: {
          in: ['params', 'query'],
          errorMessage: 'ID must be Int',
          isInt: true,
          toInt: true
        },
      },
      get: {
        skip: {
          isInt: true,
          in: ["query"],
        },
        limit: {
          isInt: true,
          in: ["query"],
          errorMessage: "Limit is invalid",
        },
    
      },
      update: {
        id: {
          in: ['params', 'query'],
          errorMessage: 'ID must be Int',
          isInt: true,
          toInt: true
        },
        dataToUpdate: {
          in: ["body"],
          custom: {
            options: (dataToUpdate) => {
              console.log(dataToUpdate);
              return true;
            },
          },
        },
      }
}