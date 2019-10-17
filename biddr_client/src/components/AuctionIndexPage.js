import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Auction } from "../requests";

class AuctionIndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auctions: [],
      isLoading: true
    };
  }
  componentDidMount() {
    Auction.all().then(auctions => {
      this.setState({
        auctions: auctions,
        isLoading: false
      });
    });
  }
  render() {
    return (
      <main>
        <div className="ui header">Auctions</div>
        <ul>
          {this.state.auctions.map((auction, index) => (
            <li key={index}>
              <p>
                <Link to={`/auctions/${auction.id}`}>{auction.title}</Link>
                <br />
                <small>Posted On {auction.created_at}</small>
              </p>
            </li>
          ))}
        </ul>
      </main>
    )
  }
}

export default AuctionIndexPage;