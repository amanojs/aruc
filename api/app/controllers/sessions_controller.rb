class SessionsController < ApplicationController
  def index
    render json: current_user
  end

  def create
    user = User.find_by(name: login_user_email[:name])
    if user
      #   session[:user_id] = user.id
      #   render json: { status: 'SUCCESS', data: user }
      log_in(user)
    else
      render json: { status: 'ERROR', data: user.errors }
    end
  end
  wrap_parameters :user

  def destroy
    log_out
  end

  private

  def login_user_email
    params.require(:user).permit(:mail, :password)
  end
end
