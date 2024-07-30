import { useEffect, useRef, useState } from "react";

function useModal(id: string, visible: boolean, cb?: any) {
  const [showModal, setShowModal] = useState(false);
  const cbRef = useRef(cb);
  const idRef = useRef(id);

  useEffect(() => {
    if (visible) {
      setShowModal(true);
      setTimeout(() => {
        document.getElementById(idRef.current)?.classList.add("show");
        document.body.classList.add("modal-open");
      }, 150);
      if (cbRef.current) {
        cbRef.current();
      }
    } else {
      document.body.classList.remove("modal-open");
      document.getElementById(idRef.current)?.classList.remove("show");
      setTimeout(() => {
        setShowModal(false);
      }, 150);
    }
  }, [visible]);

  return showModal;
}

export default useModal;
