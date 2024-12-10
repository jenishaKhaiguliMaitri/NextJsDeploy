"use client";

import { useRouter } from "next/navigation";

const ModalBackDrop = () => {
  // we can also refresh the page
  const router = useRouter();

  return <div className="modal-backdrop" onClick={router.back} />;
};

export default ModalBackDrop;
