import { Container, Navbar } from "react-bootstrap";
import { FaBarcode, FaSearch } from "react-icons/fa";
import IconButton from "../utils/IconButton";

const ProductSearchBar = ({ query, setQuery }) => {
  return (
    <Navbar className="bg-body-tertiary shadow-sm">
      <Container>
        <Navbar.Brand className="text-dark">
          <FaSearch />
        </Navbar.Brand>
        <input
          type="text"
          className="w-100 border-0 outline-0 form-control bg-transparent"
          placeholder="Search Products"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Navbar.Collapse className="justify-content-end">
          <IconButton
            startIcon={<FaBarcode />}
            variant="transparent"
          ></IconButton>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default ProductSearchBar;
