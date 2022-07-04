class MessagesController < ApplicationController
  def index
    @message = Message.all.shuffle.first.text
    
    respond_to do |format|
      format.html
      format.json { render json: {data: @message, status: 200}}
    end
  end
end
