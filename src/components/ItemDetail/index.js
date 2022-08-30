import "./style.scss";
import { Card, CardTitle, CardText, CardBody, Button } from "reactstrap";
import ItemCount from "../ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

const ItemDetail = ({ selectedProduct }) => {
  const [isAdded, setIsAdded] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const { isInCart, addToCart } = useCartContext();

  const onAdd = () => {
    setIsAdded(true);
    isInCart(selectedProduct.id);
    addToCart(selectedProduct, quantity);
  };

  return (
    <div className="item-container">
      <Card color="black" body className="item-card">
        <img src={selectedProduct.image} alt={selectedProduct.name} />
        <CardBody className="item-body">
          <div className="item-heading">
            <CardTitle>{selectedProduct.name}</CardTitle>
            <CardText>${selectedProduct.price}</CardText>
          </div>

          <CardText className="item-description">
            {selectedProduct.description}
          </CardText>
          {isAdded ? (
            <Link to="/cart">
              <Button color="dark" outline size="sm">
                Ir al carrito
              </Button>
            </Link>
          ) : (
            <ItemCount
              quantity={quantity}
              setQuantity={setQuantity}
              stock={selectedProduct.stock}
              onAdd={onAdd}
            />
          )}
        </CardBody>
      </Card>
    </div>
  );
};

export default ItemDetail;
