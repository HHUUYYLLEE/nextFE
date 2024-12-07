import { Oval } from "react-loader-spinner";
import Modal from "react-modal";
export default function Loading() {
  return (
    <Modal
      style={{
        overlay: {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 27,
        },
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          backgroundColor: "rgba(0, 0, 0, 0)",
          transform: "translate(-50%, -50%)",
          paddingLeft: "3vw",
          paddingRight: "3vw",
          paddingTop: "2vw",
          paddingBottom: "4vw",
          borderWidth: "0px",
          borderRadius: "1rem",
        },
      }}
      isOpen={true}
    >
      <Oval
        height="80"
        width="80"
        color="#ffc300"
        secondaryColor="#ffc300"
        ariaLabel="oval-loading"
      />
    </Modal>
  );
}
