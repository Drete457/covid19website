import React from 'react';
import { useHistory } from 'react-router-dom';
import update from "../Controller/update";

export default function BackButton() {
    const link = useHistory();
    return (
        <button
            className="backbutton"
            onClick={() => {
                link.push("/Covid19website/");
                update();
            }}
        >
            Go back
        </button>
    );
}
