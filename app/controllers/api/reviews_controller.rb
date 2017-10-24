class Api::ReviewsController < ApplicationController
  before_action :require_log_in
  def new
  end

  def create
    @review = Review.new(review_params)
    if @review.save
      render :show
    else
      render json: @review, status: :unprocessable_entity
    end
  end

  def update
  end

  def index
  end

  def show
  end

  def destroy
  end

  def edit
  end

  private

  def review_params
    params.require(:review).permit(:rating, :body, :user_id, :biz_id)
  end
end
