class PictureAlbumsController < ApplicationController
    before_action :require_log_in

    def index
        @picture_album = Picture_Album.where(biz_id: params[picBizId])
        render :index
    end 
    private 
    
    def pic_params
        params.require(:picture_album).permit(:user_id, :biz_id)
    end
end
