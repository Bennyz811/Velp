class Api::ReviewsController < ApplicationController
  before_action :require_log_in, only: [:create, :update, :destroy]
  def new
  end

  def create
    @review = Review.new(review_params)
    @review.user_id = current_user.id
    if @review.save
      render :show
    else
      render json: @review, status: :unprocessable_entity
    end
  end

  def update
    @review = Review.find(params[:id])
    if @review.update(review_params)
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def index
    @reviews = Review.where(biz_id: params[:revBizId]).limit(5).offset(params[:offSet])
    render :index
  end

  def show
    @review = Review.find(params[:id])
    render :show
  end

  def destroy
    review = review.find(params[:id])
    review.destroy
  end

  def edit
  end

  private

  def review_params
    params.require(:review).permit(:rating, :body, :biz_id)
  end
end
