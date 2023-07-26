import _ from "lodash";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Alert, Button, Table } from "reactstrap";
import Header from "../components/Header";
import LoadingSpinner from "../components/LoadingSpinner";
import { deleteChicken, getAllChickens } from "../utils/api";
import useSound from "use-sound";
import deleteSound from "../assets/deleteSound.mp3"

function ViewChickens() {
  const [loading, setLoading] = useState(false);
  const [chickens, setChickens] = useState();
  const [errorMsg, setErrorMsg] = useState(null);
  const [playDelete] = useSound(deleteSound);

  const navigate = useNavigate();

  function refreshChickens() {
    setErrorMsg(null);
    setLoading(true);
    getAllChickens()
      .then((data) => setChickens(data))
      .catch((e) => setErrorMsg(e))
      .finally(() => setLoading(false));
  }

  useEffect(refreshChickens, []);

  function handleDelete(id) {
    setErrorMsg(null);
    setLoading(true);
    deleteChicken(id)
    playDelete()
      .then(() => refreshChickens())
      .catch((e) => setErrorMsg(e))
      .finally(() => setLoading(false));
  }

  return (
    <div style={{backgroundImage: `url('https://cswoodcraft.com/wp-content/uploads/Inside-Chicken-Coop.jpg')`}}>
      <Header />
      <h2 className="ms-2 mt-5 text-white">
        All Chickens{" "}
        <Button size="sm" color="danger" onClick={() => navigate("/submit")}>
          + Add 🐔
        </Button>
      </h2>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          {errorMsg ? <Alert color="danger">{errorMsg}</Alert> : null}
          <Table hover className="mt-5">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Location</th>
                <th>👎</th>
                <th>👍</th>
                <th>Total Score</th>
                <th>Fry Chicken 🍗</th>
              </tr>
            </thead>
            <tbody>
              {_.map(chickens, (c) => (
                <tr key={c.id}>
                  <td>
                    <img
                      src={c.imgurl}
                      style={{
                        height: "48px",
                        width: "48px",
                        objectFit: "cover",
                        borderRadius: "50%",
                      }}
                    />
                  </td>
                  <td
                    className={
                      "fw-bold " + (c.score > 0 ? "text-danger" : "text-muted")
                    }
                  >
                    {c.name}
                  </td>
                  <td>{c.location}</td>
                  <td>{c.updoots}</td>
                  <td>{c.downdoots}</td>
                  <td
                    className={
                      "fw-bold " + (c.score > 0 ? "text-danger" : "text-muted")
                    }
                  >
                    {c.score} {c.score > 0 ? "🔥" : "❄️"}
                  </td>
                  <td>
                    <Button
                      color="danger"
                      size="sm"
                      onClick={() => handleDelete(c.id)}
                    >
                      🚫 Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </>
      )}
    </div>
  );
}

export default ViewChickens;
