import React from "react";
//import Select from "react-select";
import "../css/feedback.css";

class Feedback extends React.Component {
    state = {
        name: "",
        email: "",
        message: "",
    }

    handleSubmit = async (e) => {
        console.log('entro')
        e.preventDefault();
        try {
            let res = await fetch("https://track-bus-nevsoft.herokuapp.com/feedback", {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: this.state.name,
                    email:this.state.email,
                    content: this.state.message,
                }),
            });
            if (res.status === 200) {
                this.setState({ name: "" });
                this.setState({ email: "" });
                this.setState({ message: "" });
                alert("Message sent successfully!");
            } else {
                alert("Some error occured");
            }
        } catch (err) {
        }
    };

    render() {
        return (
            <form className="form" onSubmit={(e) => this.handleSubmit(e)}>
                <a className="fa-solid fa-chevron-left" href="/" id="back">{null}</a>
                <h2>CONTACT US</h2>
                <p type="Name:"><input placeholder="Write your name here.." value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })}></input></p>
                <p type="Email:"><input placeholder="Let us know how to contact you back.." value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })}></input></p>
                <p type="Message:"><input placeholder="What would you like to tell us.." value={this.state.message} onChange={(e) => this.setState({ message: e.target.value })}></input></p>
                <button type="submit" className="btn-large waves-effect waves-light orange">Send Message</button>
            </form>
        );
    }
}
export default Feedback;