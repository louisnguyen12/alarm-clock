import React, { Component } from 'react';

export default class displayDate extends Component {
    constructor(props) {
        super(props)
        this.state = { display_Date: new Date() }
    }



    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({ display_Date: new Date() })
        }, 86400000);
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    day() {
        const layDay = new Date().getDay()
        switch (layDay) {
            case 0:
                return 'Sunday';

            case 1:
                return "Monday";

            case 2:
                return "Tuesday";

            case 3:
                return "Wednesday";

            case 4:
                return "Thursday";

            case 5:
                return "Friday";

            case 6:
                return "Saturday";

        }
    }
    render() {
        return (
            <div>
                <h1>
                    {this.state.display_Date.toLocaleDateString()}
                </h1>
                <div>
                    {this.day()}
                </div>
            </div>
        )
    }
}
