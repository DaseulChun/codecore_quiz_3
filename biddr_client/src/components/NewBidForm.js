import React from 'react';

function NewBidForm (props) {
  function handleSubmit (event){
    event.preventDefault();
    const { currentTarget } = event;
    const formData = new FormData(currentTarget)

    const newBid = {
      price: formData.get("price")
    };

    props.onCreateBid(newBid);
    currentTarget.reset();
  };

  return (
    <form className="ui form" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="price">Bidding Price</label> <br />
        <input
          type="number"
          name="price"
          id="price"
          placeholder="Please Enter Price"
        />
      </div>
      <button className="ui button" type="submit">
        Bid
      </button>
    </form>
  )
};

export default NewBidForm;