import _ from "lodash";
import { useEffect, useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Alert, Button, Container, Row } from "reactstrap";
import Header from "../components/Header";
import LoadingSpinner from "../components/LoadingSpinner";
import { downdootChicken, getAllChickens, updootChicken } from "../utils/api";

function RateChickens() {
  const [loading, setLoading] = useState(false);
  const [chickens, setChickens] = useState([]);
  const [index, setIndex] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);

  const chicken = chickens[index];

  function getNewChicken() {
    setErrorMsg(null);
    setLoading(true);
    getAllChickens()
      .then((data) => setChickens(_.shuffle(data)))
      .catch((e) => setErrorMsg(e))
      .finally(() => setLoading(false));
  }

  useEffect(getNewChicken, []);

  function handleUpdoot() {
    setErrorMsg(null);
    setLoading(true);
    updootChicken(chicken.id)
      .then(() => setIndex(index + 1))
      .catch((e) => setErrorMsg(e))
      .finally(() => setLoading(false));
  }

  function handleDowndoot() {
    setErrorMsg(null);
    setLoading(true);
    downdootChicken(chicken.id)
      .then(() => setIndex(index + 1))
      .catch((e) => setErrorMsg(e))
      .finally(() => setLoading(false));
  }

  return (
    <div>
      <Header />
      {loading ? <LoadingSpinner /> : null}
      {errorMsg ? <Alert color="danger">{errorMsg}</Alert> : null}
      {!loading && !errorMsg && index <= chickens.length - 1 ? (
        <Container>
          <Row>
<<<<<<< HEAD
            <div className="p-2 bg-light d-flex align-items-right justify-content-right">
              <div className="chikn-img d-flex align-items-right justify-content-right">
=======
            <div className="p-2 bg-light d-flex align-items-center justify-content-center" style={{borderRadius: "50%"}}>
              <div className="chikn-img d-flex align-items-center justify-content-center">
>>>>>>> a72c3972c6fc19e9b51b8d4e8c0811f2f61df133
                <img src={chicken.imgurl} />
              </div>
            </div>
            <div style={{ height: "220px", backgroundColor: 'rgba(0, 0, 0, 0.5)', color: "white"}}>
              <h2 className="mt-3 d-flex align-items-baseline">
                {chicken.name}
<<<<<<< HEAD
                <small className="text-sm text-muted ms-3 d-flex align-items-right">
=======
                <small className="text-sm ms-3 d-flex align-items-center">
>>>>>>> a72c3972c6fc19e9b51b8d4e8c0811f2f61df133
                  <FaMapMarkerAlt style={{ width: 20 }} className="me-2" />
                  {chicken.location}
                </small>
              </h2>
              <hr />
              <h6>Description</h6>
              <p>{chicken.description}</p>
            </div>
            <div className="d-flex justify-content-between px-2 py-4">
              <Button
                color="primary"
                size="lg"
                className="shadow-sm"
                onClick={handleDowndoot}
              >
                🚫 Cool Ranch 🥶
              </Button>
              <Button
                color="danger"
                size="lg"
                className="shadow-sm"
                onClick={handleUpdoot}
              >
                ❤️ Spicy Buffalo 🥵
              </Button>
            </div>
          </Row>
        </Container>
      ) : (
        "No more chickens to rate."
      )}
    </div>
  );
}

export default RateChickens;
