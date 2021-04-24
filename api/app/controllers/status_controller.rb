class StatusController < ApplicationController
	def create
		membership = Membership.new(membership_create_params)
		if membership.save
		  render json: { status: 'SUCCESS', data: membership }
		else
		  render json: { status: 'ERROR', data: membership.errors.full_messages }
		  p membership.errors.full_messages
		end
	  end
	
	  private
	
	  def status_create_params
		params.require(:status).permit(:to_user_id, :from_user_id, :status_id)
	  end
end
