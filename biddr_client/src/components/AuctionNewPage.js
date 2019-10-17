import React, { Component } from "react";
import { Auction } from "../requests";
import NewAuctionForm from "./NewAuctionForm";

class AuctionNewPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: []
    }
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

  render() {
    return (
      <main>
        <div className="ui header">Create an Auction</div>
        <NewAuctionForm errors={this.state.errors} onCreateAuction={this.createAuction} />
      </main>
    );
  }
}

export default AuctionNewPage;