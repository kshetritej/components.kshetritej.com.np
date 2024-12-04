---
outline: deep
---
# Status Badge
Custom function for rendering a badge based on the status like active, disabled, ordered, cancelled, etc.

## Code
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

## Example Usage
```ts
  statusBadge(order?.orderStatus.toLowerCase());
```
