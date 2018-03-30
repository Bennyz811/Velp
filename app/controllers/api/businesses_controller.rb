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
    if params[:category]
      @businesses = @businesses.joins(:category).where("categories.name = ?", params[:category])
    end
    # @businesses = Business.where("category = :category", {category: params[:searchInput]})
    render :index
  end

  def search
    if params[:query].present?
      @businesses = Business.where("category ILIKE :category", {category: params[:query]}).limit(5).offset(params[:offSet])
    else
      @businesses = Business.all
    end

    respond_to do |format|
      format.html {render :search}
      format.json {render :search}
    end

  end

  def recommend 
    array = []
    array.push(Business.all.sample) until array.uniq.length === 3
    @recommend = array.uniq
  end 


  private
  def biz_params
    params.require(:business).permit(:biz_name,
      :address, :cost, :phone, :category,
      :neighborhood, :image, :rating, :lat, :lng)
  end

  def bounds
    params[:bounds]
  end
end
