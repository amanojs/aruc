class UsersController < ApplicationController
  def index
    posts = User.all
    render json: [data: posts, user: current_user]
  end

  def create
    user = User.new(user_create_params)
    if user.save
      render json: { status: 'SUCCESS', data: user }
    else
      render json: { status: 'ERROR', data: user.errors.full_messages }
      p user.errors.full_messages
    end
  end
  wrap_parameters :user, include: %i[name mail budget
                                     password password_confirmation birthday]

  private

  def user_create_params
    params.require(:user).permit(:name, :school_name,
                                 :password, :home_place, :school_place, :gender)
  end
end
