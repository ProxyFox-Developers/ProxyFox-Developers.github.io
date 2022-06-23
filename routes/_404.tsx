import * as Aleph from "aleph/react";

export default function E404() {
    return (
      <div className="screen e404">
          <h2>
                Ooooooops, nothing here!
          </h2>
          <p>
                <Aleph.Link to="/">Go back to the homepage</Aleph.Link>
          </p>
        </div>
    );
}
