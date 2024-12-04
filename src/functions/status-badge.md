---
outline: deep
---
# Status Badge
Custom function for rendering a badge based on the status like active, disabled, ordered, cancelled, etc.

## Code v1
This version uses a switch statement to return the appropriate badge color based on the status. Used within `className` with `cn` utility to style the badge.
```ts
export const statusBadge = (status: string) => {
  switch (status.toLowerCase()) {
    case "pending":
      return "bg-yellow-500 text-white!";
    case "succeeded":
      return "bg-green-100 text-green-600";
    case "received":
      return "bg-green-500 text-white";
    case "shipped":
      return "bg-green-300 text-white";
    case "cancelled":
      return "bg-red-500 text-white";
    case "cancelled_by_user":
      return "bg-red-500 text-white";
    case "blue":
      return "bg-yellow-400 text-white";
    default:
      return "bg-gray-500";
  }
};
```
## Code v2
This version uses a switch statement to return the appropriate badge based on the status. More conditions can be added as per the need. It directly returns the badge component.
```ts
export function renderStatus(status: string) {
    switch (status) {
        case "processing":
            return <span className="border-2 border-yellow-500 py-1 px-2 rounded-2xl  ">Processing</span>
        case "pending":
            return <span className="border-2 border-yellow-400 py-1 px-2 rounded-2xl  ">Pending</span>
        case "shipped":
            return <span className="border-2 border-orange-500 py-1 px-2 rounded-2xl  ">Shipped</span>
        case "delivered":
            return <span className="border-2 border-green-500 py-1 px-2 rounded-2xl  ">Delivered</span>
        default:
            return <span className="border-2 border-red-500 py-1 px-2 rounded-2xl  ">Cancelled</span>
    }
}
```

