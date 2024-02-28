import { Button, Stack } from "react-bootstrap";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useRef, useState } from "react";
import Sidebar from "../utils/Sidebar.jsx";
import category from "../../data/category.json";
import { categoryScrollbar } from "./Category.module.css";
import IconButton from "../utils/IconButton.jsx";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Category = ({ categoryId, setCategoryId }) => {
  // SIDEBAR STATES
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  // REF
  const scrollRef = useRef(null);

  // RIGHT SCROLL FUNCTIONS
  const handleRightScroll = () => {
    if (scrollRef.current) {
      const newPosition = Math.min(
        scrollRef.current.scrollLeft + 200,
        scrollRef.current.scrollWidth - scrollRef.current.clientWidth
      );
      scrollRef.current.scrollTo({ left: newPosition, behavior: "smooth" });
    }
  };

  // LEFT SCROLL FUNCTIONS
  const handleLeftScroll = () => {
    if (scrollRef.current) {
      const newPosition = Math.max(scrollRef.current.scrollLeft - 200, 0);
      scrollRef.current.scrollTo({ left: newPosition, behavior: "smooth" });
    }
  };

  return (
    <>
      <Stack direction="horizontal" className="mb-1 overflow-hidden" gap={1}>
        {/* LEFT SCROLL BUTTON */}
        <IconButton
          onClick={handleLeftScroll}
          variant="transparent"
          startIcon={<FaAngleLeft />}
          className="px-1 py-2"
        ></IconButton>

        <Stack
          direction="horizontal"
          gap={1}
          className={`py-2 justify-content-between align-items-end ${categoryScrollbar} overflow-x-auto`}
          ref={scrollRef}
        >
          {/* CATEGORY BUTTONS */}
          {category.map((item, index) => (
            <Button
              key={index}
              variant={`${
                categoryId === item.id ? "outline-primary" : "outline-secondary"
              }`}
              className="py-1 d-flex justify-content-center align-items-center gap-2 text-nowrap"
              onClick={() => setCategoryId(item.id)}
            >
              {item.name}
            </Button>
          ))}
        </Stack>

        {/* RIGHT SCROLL BUTTON */}
        <IconButton
          variant="transparent"
          startIcon={<FaAngleRight />}
          className="px-1 py-2"
          onClick={handleRightScroll}
        ></IconButton>

        {/* VERTICAL DOTS BUTTON FOR FILTER DRAWER OPEN */}
        <Button
          onClick={() => setShow(true)}
          variant="transparent"
          className="px-1 py-2"
        >
          <BsThreeDotsVertical style={{ fontSize: "1.2rem" }} />
        </Button>
      </Stack>

      {/* RIGHT SIDEBAR */}
      <Sidebar
        show={show}
        placement="end"
        title="Categories"
        handleClose={handleClose}
      >
        {/* NAVIGATION BUTTONS */}
        <Stack
          direction="horizontal"
          gap={1}
          className="py-2 align-items-center flex-wrap "
        >
          {category.map((item, index) => (
            <Button
              key={index}
              variant="outline-secondary"
              className="py-1 d-flex justify-content-center align-items-center gap-2"
              onClick={() => {
                handleClose();
                setCategoryId(item.id);
              }}
            >
              {item.name}
            </Button>
          ))}
        </Stack>
      </Sidebar>
    </>
  );
};

export default Category;
