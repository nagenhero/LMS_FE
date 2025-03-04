import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const CustomCard = ({
  _id,
  thumbnail,
  title,
  author,
  publishedYear,
}) => {
  return (
    <Card style={{ width: "18rem", height: "30rem" }}>
      <Card.Img
        variant="top"
        src={thumbnail}
        style={{
          width: "100%",
          height: "30rem",

          // Ensures the image maintains its aspect ratio and doesn't crop
        }}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <hr />
        <Card.Text>
          {author} - {publishedYear}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
