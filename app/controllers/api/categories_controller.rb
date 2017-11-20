class CategoriesController < ApplicationController

  def new
  end

  def create
    @category = Category.new(category_params)
    if @category.save
      render :show
    else
      render json: @category.errors.full_messages, status: 422
    end
  end

  private

  def category_params
    params.require(:category).permit(:name.downcase)
  end
end
