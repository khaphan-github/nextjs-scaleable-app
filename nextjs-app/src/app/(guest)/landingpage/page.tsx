"use client"
import Modal from "@/lib/ui/modal/modal";
import { useState } from "react";

export default function Dashboard() {
  const [showModal, setShowModal] = useState(false);

  return (
      <div>
        <button onClick={() => setShowModal(true)}>Open Modal</button>
        {showModal &&
            <Modal onClose={() => setShowModal(false)}>
                Hello from the modal!
            </Modal>
        }
      </div>
  )
}