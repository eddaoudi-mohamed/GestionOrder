const Severity = (actionType:string) => {
    switch (actionType) {
      case "update":
        return ["bg-orange-200","bg-orange-600"];

      case "":
        return ["bg-green-200","bg-green-600"];

      case "partially_paid":
        return ["bg-blue-200","bg-blue-600"];

      case "unpaid":
        return ["bg-red-200","bg-red-600"];

      case "refunded":
        return ["bg-purple-200","bg-purple-600"];

      case "partially_refunded":
        return ["bg-gray-200","bg-gray-600"];

      default:
        return ["bg-gray-200","bg-gray-600"];
    }
  };