import { CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { Trash } from "lucide-react";

const OrderSummary = ({ restaurant, cartItems, removeFromCart }) => {
  const getTotalCost = () => {
    const totalInPence = cartItems.reduce(
      (total, cartItem) => total + cartItem.price * cartItem.quantity,
      0
    );

    const totalWithDelivery = totalInPence + restaurant.deliveryPrice || 0;

    return (totalWithDelivery / 100).toFixed(2);
  };

  // const getTotalCost = () => {
  //   const totalInPence = cartItems.reduce(
  //     (total, cartItem) => total + cartItem.price * cartItem.quantity,
  //     0
  //   );

  //   // const deliveryPrice = restaurant.deliveryPrice || 0; // Fallback to 0 if undefined/null

  //   const deliveryPrice =
  //     typeof restaurant.deliveryPrice === "number"
  //       ? restaurant.deliveryPrice
  //       : 0;

  //   const totalWithDelivery = totalInPence + deliveryPrice;

  //   return (totalWithDelivery / 100).toFixed(2);
  // };

  return (
    <>
      <CardHeader>
        <CardTitle className="text-2xl font-bold tracking-tight flex justify-between">
          <span>Your Order</span>
          <span>Rs.{getTotalCost()}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        {cartItems.map((item) => (
          <div className="flex justify-between" key={item._id}>
            <span>
              <Badge variant="outline" className="mr-2">
                {item.quantity}
              </Badge>
              {item.name}
            </span>
            <span className="flex items-center gap-1">
              <Trash
                className="cursor-pointer"
                color="red"
                size={20}
                onClick={() => removeFromCart(item)}
              />
              Rs.{((item.price * item.quantity) / 100).toFixed(2)}
            </span>
          </div>
        ))}
        <Separator />
        <div className="flex justify-between">
          <span>Delivery</span>
          <span>Rs.{(restaurant.deliveryPrice / 100).toFixed(2)}</span>
        </div>
        <Separator />
      </CardContent>
    </>
  );
};

export default OrderSummary;
