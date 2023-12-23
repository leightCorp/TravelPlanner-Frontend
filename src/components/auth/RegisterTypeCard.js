import { Card, CardBody } from "react-bootstrap";

function RegisterTypeCard({ title, linkText, link }) {
  return (
    <Card className=" bg-black border border-primary">
      <CardBody>
        <Card.Title className="text-white">{title}</Card.Title>
        <Card.Link href={link}>{linkText}</Card.Link>
      </CardBody>
    </Card>
  );
}

export default RegisterTypeCard;
