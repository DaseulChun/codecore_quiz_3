import React from "react";

function NewAuctionForm(props) {
  function handleSubmit(event) {
    event.preventDefault();
    const { currentTarget } = event;
    const formData = new FormData(currentTarget);

    const newAuction = {
      title: formData.get("title"),
      description: formData.get("description"),
      reserve_price: formData.get('reserve_price'),
      ends_at: formData.get('ends_at')
    };

    props.onCreateAuction(newAuction);
    currentTarget.reset();
  }

  return (
    <form className="ui form" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Please Enter Title"
        />
      </div>
      <div className="field">
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          placeholder="Please Enter description"
          rows="2"
        />
      </div>
      <div className="field">
        <label htmlFor="reserve_price">Reserve Price</label>
        <input
          type="number"
          name="reserve_price"
          id="reserve_price"
          placeholder="Please Enter Reserve Price"
        />
      </div>
      <div className="field">
        <label htmlFor="ends_at">Ends At</label>
        <input
          type="date"
          name="ends_at"
          id="ends_at"
          placeholder="Please Enter the Expiary Date"
        />
      </div>
      <button className="ui button" type="submit">
        Submit
      </button>
    </form>
  );
}

export default NewAuctionForm;