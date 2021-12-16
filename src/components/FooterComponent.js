import react, { Component } from "react";

class FooterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div className="footer navbar fixed-bottom d-flex align-items-center justify-content-center">
                <p>
                    &copy;{new Date().getFullYear()} Fortune Web App - Abdelhamid Lafkiri
                </p>
            </div>
        )
    }
}

export default FooterComponent