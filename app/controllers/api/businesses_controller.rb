class Api::BusinessesController < ApplicationController
  before_action :require_log_in, only: [:create, :update, :destroy]
  def new
  end

  def create
    @business = Business.new(biz_params)
    if @business.save
      render :show
    else
      render json: @business.errors.full_messages, status: 422
    end
  end

  def update
    @business = business.find(params[:id])
    if @business.update(biz_params)
      render :show
    else
      render json: @business.errors.full_messages, status: 422
    end
  end

  def edit
  end

  def destroy
    business = Business.find(params[:id])
    if currentUser.businesses.include?(business)
      business.destroy
      render json: business
    else
      render json: ['You need to be owner'], status: 401
    end
  end

  def show
    @business = Business.find(params[:id])
    render :show
  end

  def index
    @businesses = Business.all
  end

  private
  def biz_params
    params.require(:business).permit(:biz_name, :address, :cost, :category, :phone, :neighborhood)
  end
end
