const BASE_URL = "http://localhost:3000/api/v1";

// Auction module
const Auction = {
  // fetch all auctions from server
  all() {
    return fetch(`${BASE_URL}/auctions`, { credentials: "include" }).then(
      res => res.json()
    );
  },
  // fetch a single auction
  one(id) {
    return fetch(`${BASE_URL}/auctions/${id}`, {
      credentials: "include"
    }).then(res => res.json());
  },
  // creating a auction
  create(params) {
    return fetch(`${BASE_URL}/auctions`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    }).then(res => res.json());
  }
};

// User module
const User = {
  current() {
    return fetch(`${BASE_URL}/users/current`, {
      method: "GET",
      credentials: "include"
    }).then(res => res.json());
  }
};

// Session module
const Session = {
  create(params) {
    return fetch(`${BASE_URL}/session`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    }).then(res => res.json());
  },
  destroy() {
    return fetch(`${BASE_URL}/session`, {
      method: "DELETE",
      credentials: "include"
    }).then(res => res.json());
  }
};

// Bid module
const Bid = {
  create(params, auction_id) {
    return fetch(`${BASE_URL}/auctions/${auction_id}/bids`, {
      method: "POST",
      credentials: "include",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    }).then(res=>res.json())
  }
};

export { Auction, Session, User, Bid };