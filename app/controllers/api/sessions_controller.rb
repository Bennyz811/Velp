class Api::SessionsController < ApplicationController
  def new
  end

  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if @user
      log_in(@user)
      render 'api/users/show'
    else
      render json: ['Invalid email/password combination'], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      log_out
      render json: {}
    else
      render json: ['Need to sign in first'], status: 401
    end
  end
end
