import React from "react";

export class PreviewModal extends React.Component {
  render() {
    return (
      <div>
        <div
          style={{
            position: "relative",
            backgroundColor: "#EAEAEA",
            padding: "20px",
            width: "100%",
            display: "flex",
            justifyContent: "center"
          }}
        >
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  style={{ width: "100%" }}
                  alt="Flamingos"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Flamingos_Laguna_Colorada.jpg/1200px-Flamingos_Laguna_Colorada.jpg"
                />
              </div>
              <div class="flip-card-back">
                <img
                  style={{ width: "100%" }}
                  alt="Flamingos"
                  src="https://pbs.twimg.com/media/DuPVVTSW0AIeFXl.jpg"
                />
              </div>
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              height: "100%",
              left: "-10px",
              display: "flex",
              alignItems: "center"
            }}
          >
            <button
              style={{
                backgroundColor: "white",
                borderColor: "white",
                borderRadius: "50%"
              }}
            >
              L
            </button>
          </div>

          <div
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              height: "100%",
              right: "-10px",
              display: "flex",
              alignItems: "center"
            }}
          >
            <button
              style={{
                backgroundColor: "white",
                borderColor: "white",
                borderRadius: "50%"
              }}
            >
              R
            </button>
          </div>
        </div>
        <div
          style={{
            padding: "24px 36px"
          }}
        >
          <p>
            This <strong>4.25x6 matte-finish postcard</strong> will be mailed to
            all eligible recipients in the list <strong>"Fall 2017"</strong> on{" "}
            <strong>Jan. 16, 2019</strong> using{" "}
            <strong>First-Class Postage</strong>
          </p>
          <p style={{ textAlign: "center" }}>
            <sub style={{ textAlign: "center" }}>
              Some of this is an estimate and should not be taken literally
            </sub>
          </p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            {" "}
            <button
              style={{
                backgroundColor: "#4FA32F",
                color: "white",
                borderColor: "#4FA32F",
                borderRadius: "5px",
                padding: "5px 25px",
                marginTop: "5px"
              }}
            >
              Approve Campaign & Send Mail
            </button>
          </div>
          <div style={{ position: "absolute", bottom: "3px", left: "6px" }}>
            <span style={{ fontSize: "10px" }}>CANCEL</span>
          </div>
        </div>
      </div>
    );
  }
}
