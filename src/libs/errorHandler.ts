const notFound = () => {
    let errorReturn = {
      error: "Not Found",
      message: "error",
      status: 500,
      timestamp: Date.now();
    };
    return errorReturn;
  };
  export default { notFound };