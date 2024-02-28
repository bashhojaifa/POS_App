import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const IconButton = ({
  startIcon,
  endIcon,
  children,
  className,
  path,
  ...rest
}) => {
  const BoolPath = Boolean(path);

  if (BoolPath) {
    return (
      <Link to={path} className="text-decoration-none">
        <Button
          {...{ ...rest }}
          className={`${
            Boolean(className) && className
          } d-flex align-items-center gap-2 `}
        >
          {startIcon} {children}
          {endIcon}
        </Button>
      </Link>
    );
  }
  return (
    <Button
      {...{ ...rest }}
      className={`d-flex align-items-center gap-2 ${className}`}
    >
      {startIcon} {children}
      {endIcon}
    </Button>
  );
};

IconButton.propTypes = {
  startIcon: PropTypes.element,
  endIcon: PropTypes.element,
  children: PropTypes.string,
  isLink: PropTypes.bool,
  path: PropTypes.string,
  rest: PropTypes.object,
  className: PropTypes.string,
};

export default IconButton;
