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
    @businesses = bounds ? Business.in_bounds(bounds) : Business.all
  end

  def search
    if params[:query].present?
      @businesses = Business.where('biz_name ~ ?', params[:query])
    else
      @businesses = Business.none
    end

    respond_to do |format|
      format.html {render :search}
      format.json {render :search}
    end
  end


  private
  def biz_params
    params.require(:business).permit(:biz_name.downcase,
      :address, :cost, :category, :phone,
      :neighborhood, :image, :rating, :lat, :lng)
  end
  
  def bounds
    params[:bounds]
  end
end
