import * as React from "aleph/react";

export default function E404(): JSX.Element {
    return (
        <div className="screen e404">
            <h2>
                Oh no! There seems to be nothing here :(
            </h2>
            <p>
                <React.Link to="/">Go back to the homepage</React.Link>
            </p>
        </div>
    );
}
