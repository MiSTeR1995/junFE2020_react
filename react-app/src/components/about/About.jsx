import React from "react";
import axios from "axios";

export default class About extends React.Component {
    state = {
        persons: [],
        isLoading: true
    };

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
            setTimeout( _ => this.setState({ persons: res.data, isLoading: false }), 1000);
        });
    }
    onDeleteClick(id) {
        // axios.delete()
    }
    render() {

        return (
            <div>
                {this.state.isLoading ? (
                    <div>Подождите, мы собираем данные.</div>
                ) : (
                    this.state.persons.map((person) => (
                        <div id="user-{person.id}" className="user-item">
                            <div className="item-actions">
                                <button onclick="onDeleteClick({person.id})">
                                    Delete
                                </button>
                            </div>
                            <div className="item-left">
                                <div className="user-name">{person.name}</div>
                                <div className="user-mail">{person.email}</div>
                            </div>
                            <div className="item-right">
                                <div className="user-phone">{person.phone}</div>
                                <div className="user-company">
                                    <div className="company-name">
                                        {person.company.name}
                                    </div>
                                    <div className="company-sphere">
                                        {person.company.catchPhrase}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        );
    }
}
// export default About;
