class ApplicationController < ActionController::Base
  protect_from_forgery

  private

  def check_admin
    unless current_user && current_user.admin
      render text: "Access denied", status: 403
    end
  end

  def redir
    redirect_to controller: 'home', action: 'index'
  end

end
