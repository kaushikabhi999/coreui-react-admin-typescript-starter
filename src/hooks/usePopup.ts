import { useState } from "react";

function usePopup(cb?: () => void) {
  const [open, setOpen] = useState(false);

  return {
    open,
    onOpen: () => setOpen(true),
    onToggle: () => setOpen(!open),
    onClose: () => setOpen(false),
    onClick: () => {
      setOpen(false);
      if (cb) {
        cb();
      }
    },
  };
}

export default usePopup;
