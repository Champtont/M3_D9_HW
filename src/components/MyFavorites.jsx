import { Button, Col, Container, ListGroup, Row } from "react-bootstrap";
import { GiShrug } from "react-icons/gi";
import { TfiTrash } from "react-icons/tfi";
import { useSelector, useDispatch } from "react-redux";

const MyFavorites = () => {
  const favorites = useSelector((state) => state.favorites.companies);
  console.log(favorites);
  const dispatch = useDispatch();

  return (
    <>
      <Container>
        <h1 className="text-center mb-2">Saved for Later</h1>
        {favorites.length === 0 && (
          <Row>
            <Col>
              <h2>
                No Favorites Yet <GiShrug />{" "}
              </h2>
            </Col>
          </Row>
        )}
      </Container>
      <Container>
        <ListGroup>
          {favorites.map((favorite) => {
            return (
              <ListGroup.Item
                key={favorite._id}
                className="d-flex justify-content-between"
              >
                <p>{favorite.company_name}</p>
                <p>{favorite.title}</p>
                <Button
                  variant="danger"
                  onClick={() => {
                    dispatch({
                      type: "REMOVE_FROM_FAV",
                      payload: favorite._id,
                    });
                  }}
                >
                  <TfiTrash />
                </Button>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </Container>
    </>
  );
};

export default MyFavorites;
