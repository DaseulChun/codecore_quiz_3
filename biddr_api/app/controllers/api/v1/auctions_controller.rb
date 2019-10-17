class Api::V1::AuctionsController < Api::ApplicationController
  before_action :authenticate_user!, only: :create
  before_action :find_auction, only: :show

  def index
    auctions = Auction.order(created_at: :desc)
    render json: auctions
  end

  def show
    render json: @auction
  end

  def create
    auction = Auction.new auction_params
    auction.user = current_user

    if auction.save
      render json: { id: auction.id }
    else
      render(
        json: { errors: auction.errors }, 
        status: 422 # Unprocessable Entity
      )
    end
  end

  private

  def auction_params
    params.require(:auction).permit(:title, :description, :reserve_price, :ends_at)
  end

  def find_auction
    @auction ||= Auction.find params[:id]
  end
end
