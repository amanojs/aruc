class MembershipsController < ApplicationController
  def index
    membership = Membership.finf_by(user_id: 2)
	membership = membership.includes(:user)
    if membership.save
      render json: { status: 'SUCCESS', data: membership }
    else
      render json: { status: 'ERROR', data: membership.errors.full_messages }
      p user.errors.full_messages
    end
  end

  def create
    membership = Membership.new(membership_create_params)
    if membership.save
      render json: { status: 'SUCCESS', data: membership }
    else
      render json: { status: 'ERROR', data: membership.errors.full_messages }
      p membership.errors.full_messages
    end
  end

  def update
    membership = Membership.find(user_id: 1).update(membership_create_params)
    if membership.save
      render json: { status: 'SUCCESS', data: membership }
    else
      render json: { status: 'ERROR', data: membership.errors.full_messages }
      p membership.errors.full_messages
    end
  end

  private

  def membership_create_params
    params.require(:membership).permit(:to_user_id, :from_user_id, :status_id)
  end
end
