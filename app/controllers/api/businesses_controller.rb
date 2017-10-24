class Api::BusinessesController < ApplicationController
  before_action :require_log_in, only: [:create, :update, :destroy]
  def new
  end

  def create
    @business = Business.create!(biz_params)
  end

  def update
  end

  def edit
  end

  def destroy
  end

  def show
    @business = Business.find(params[:id])
  end

  def index
  end

  private
  def biz_params
    params.require(:business).permit(:biz_name, :address, :cost, :category)
  end
end
