import { Card, Col, Row, Stack } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
import ProductSearchBar from "../components/product/ProductSearchBar";
import Category from "../components/category/Category";
import product from "../data/product.json";
import { CartContext } from "../providers/CartProvider";

const Product = () => {
  const { addToCart } = useContext(CartContext);

  // PRODUCT DATA STATE
  let [data, setData] = useState([]);

  // CATEGORY ID STATE
  const [categoryId, setCategoryId] = useState(0);

  // SEARCH QUERY STATE
  const [query, setQuery] = useState("");

  // FILTER PRODUCT DATA BASED ON SEARCH QUERY
  data = data.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  // FILTER PRODUCT DATA BASED ON CATEGORY
  data = data.filter((product) =>
    categoryId !== 0 ? product.category === categoryId : data
  );

  // SET PRODUCT DATA ON STATE
  useEffect(() => {
    setData(product);
  }, []);

  return (
    <Card className="overflow-hidden" style={{ minHeight: "100vh" }}>
      <ProductSearchBar query={query} setQuery={setQuery} />
      <Card.Body className="bg-secondary">
        <Category categoryId={categoryId} setCategoryId={setCategoryId} />
        <Row xs={1} md={2} lg={5} className="g-3">
          {/* PRODUCT CARD  */}
          {data.map((product) => (
            <Col key={product.id}>
              <Card
                style={{ cursor: "pointer" }}
                onClick={() => addToCart(product)}
              >
                <Card.Img
                  className="productImage"
                  variant="top"
                  src={product?.image}
                />
                <Stack className="text-center">
                  <Card.Title className="bg-secondary shadow-sm py-1">
                    <small className="text-muted" style={{ fontSize: "15px" }}>
                      ${product?.price}
                    </small>
                  </Card.Title>
                  <Card.Text className="p-1">
                    <small className="text-muted" style={{ fontSize: "14px" }}>
                      {product?.name}
                    </small>
                  </Card.Text>
                </Stack>
              </Card>
            </Col>
          ))}
          {/* END PRODUCT CARD */}
        </Row>
      </Card.Body>
    </Card>
  );
};

export default Product;
