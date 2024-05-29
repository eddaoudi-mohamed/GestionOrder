export const actionType = (actionType: string) => {
  switch (actionType) {
    case "created":
      return "lucide-badge-plus" ;

    case "updated":
      return "lucide-pencil";

    case "deleted":
      return "lucide-" ;

    case "searched":
      return "lucide-search-slash" ;

    case "paid":
      return "lucide-credit-card" ;

    case "refunded":
      return "" ;

    case "delivered":
      return "lucide-" ;

    default:
      return  ;
  } 
};
