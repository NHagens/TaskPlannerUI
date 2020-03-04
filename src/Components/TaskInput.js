import React from "react";

function getDateTime(extraHours = 0) {
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth();
    let date = today.getDate();

    let hours = today.getHours() + extraHours;
    let minutes = today.getMinutes();

    return `${year}-${month}-${date}T${hours}:${minutes}`;
}

export class TaskInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: '',
            description: '',
            startTime: getDateTime(),
            endTime: getDateTime(1)};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]: value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.name);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>New task</h2>
                <label>
                    Name:
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                </label>
                <label>
                    Description:
                    <input type="text" name="description" value={this.state.description} onChange={this.handleChange} />
                </label>
                <label>
                    Start time:
                    <input type="datetime-local" name="startTime" value={this.state.startTime} onChange={this.handleChange}/>
                </label>
                <label>
                    End time:
                    <input type="datetime-local" name="endTime" value={this.state.endTime} onChange={this.handleChange}/>
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}