class MessagesController < ApplicationController
  def ping
    ActionCable.server.broadcast "echo_channel", message: "Hello from server"
  end
end
