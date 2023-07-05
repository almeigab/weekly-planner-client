'use client';

import {MouseEvent, useState } from "react";
import NewActivityForm from "./newActitvityForm";

export default function NewActivityModal() {

    const [showModal, updateShowModal] = useState(false);

    function handleOpenModal() {
        updateShowModal(true);
    }

    function handleCloseModal(event?: MouseEvent) {
        if (event == null || (event.target as HTMLButtonElement).classList.contains("modal")) {
            updateShowModal(false);
        }
    }

    return (
        <>
            <button className="btn btn-blue" onClick={handleOpenModal}>Adicionar atividade</button>
            { showModal && (
                    <div className="modal z-1 fixed left-0 top-0 h-full w-full" onClick={handleCloseModal}>
                        <div className="modal-content p-8 w-3/5 absolute">
                            <div className="modal-title">
                                <h2 className="mb-8">Adicionar atividade</h2>
                            </div>
                            <div className="modal-body">
                                <NewActivityForm onConfirm={handleCloseModal}></NewActivityForm>
                            </div>
                        </div>
                    </div>
            ) }
        </>
    )
}