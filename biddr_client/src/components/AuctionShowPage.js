import React, { Component } from "react";
import NewBidForm from './NewBidForm';
import { Auction, Bid } from "../requests";

class AuctionShowPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auction: null,
      loading: true
    };
  }

  createAuction = params => {
    Auction.create(params).then(auction => {
      if(auction.errors) {
        this.props.history.push(`/auctions`);
        alert('Please try again!');
      } else {
        this.props.history.push(`/auctions/${auction.id}`);
      }
    });
  };

  createBid = params => {
    let id = this.props.match.params.id
    Bid.create(params, id).then(bid => {
      // console.log(bid)
      // this.props.history.push(`/auctions/${bid.id}`);
      window.location = window.location
    });
  };

  componentDidMount() {
    Auction.one(this.props.match.params.id).then(auction => {
      this.setState({
        auction: auction,
        loading: false
      });
    });
  }
  render() {
    if (!this.state.auction) {
      return (
      <h1>Loading...</h1>)
    }
    const auction = this.state.auction;
    const bids = this.state.auction.bids;
    return (
      <main>
        <h1>{auction.title}</h1>
        <p>{auction.description}</p>
        <p>Reserve Price: ${auction.reserve_price}</p>
        <p>Ends at: {auction.ends_at}</p>

        <NewBidForm onCreateBid={this.createBid} />
        <h5>Previous Bids</h5>
        <ul>
          {bids.map(bid => (
            <li key={bid.id}>
              ${bid.price} on {bid.created_at}
            </li>
          ))}
          </ul>
      </main>
    )
  }
}

export default AuctionShowPage;